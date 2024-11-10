  require("dotenv").config();

  //user define middleware


  const express = require("express");
  const mongoose = require("mongoose");
  const cors = require("cors");
  const bodyParser = require("body-parser");
  const cookieParser = require("cookie-parser");

  //Collections
  const holdingModel = require("./models/holdingModel.js");
  const positionModel = require("./models/positionModel.js");
  const orderModel = require("./models/orderModel.js");
  const userModel = require("./models/userModel.js");

  //routes
  const authRoute = require("./routes/authRoute");

  //DB connction
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });

  const app = express();

  //middleware
  app.use(cors());
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(express.json());

  let port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`server run on port no ${port}`);
  });

  app.get("/", (req, res) => {
    res.send("Hello world!!");
  });

  //get holding data
  app.get("/allHoldings", async (req, res) => {
    let allHoldings = await holdingModel.find({});

    res.json(allHoldings);
  });

  //new Oredr
  app.post("/newOrder", async (req, res) => {
    const newOrder = new orderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    const result = await newOrder.save();

    let staticCurrPrice = req.body.price + Math.random() * 100;
    let stockInHolding = await holdingModel.findOne({ name: req.body.name });

    //buy order
    if (req.body.mode === "BUY") {
      if (stockInHolding) {
        let totalShare = parseInt(stockInHolding.qty) + parseInt(req.body.qty);
        let holdingShare = stockInHolding.qty * stockInHolding.avg;
        let newShare = req.body.qty * req.body.price;

        let newAvgPrice = (holdingShare + newShare) / totalShare;

        await holdingModel.updateOne({ name: req.body.name }, [
          { $set: { qty: totalShare, avg: newAvgPrice } },
        ]);

        console.log("stock Add to Holdings");
      } else {
          const newHolding = new holdingModel({
              name:req.body.name,
              qty:req.body.qty,
              avg:req.body.price,
              price: staticCurrPrice,
              net: "+0.00",
              day:"+0.00"
          });
      
          const result =  await newHolding.save();
          console.log(result);

        console.log("New stock Add to holding");
      }

      
    } else {
      if (stockInHolding) {
        if (stockInHolding.qty < req.body.qty) {
          console.log(`No ${req.body.qty} stock available in holdings.`);
        } else {
          let updatedStockQty = stockInHolding.qty - req.body.qty;

          if (updatedStockQty === 0) {
            //calculate profit
            await holdingModel.deleteOne({ name: req.body.name });
          } else {
            await holdingModel.updateOne(
              { name: req.body.name },
              { qty: updatedStockQty }
            );    
          }
        }
      } else {
        console.log("Not Found in holdings");
      }
    }
  });

  //get Position data
  app.get("/allPositions", async (req, res) => {
    let allPositions = await positionModel.find({});

    res.json(allPositions);
  }); 


  //Auth routes
  app.use("/", authRoute);  

  // app.get("/test",authMiddleware, async(req, res) => {

  //   const user = await userModel.findById(req.id);
  //   console.log(user);
  //   console.log("done");
  // })


  app.post("/validate", async(req, res) => {
    try {
        
    const { username, email, mobailNumber } = req.body;
    console.log(username, email, mobailNumber);
  
    const checkUsername = await userModel.findOne({username: username});
    const checkMobailNumber = await userModel.findOne({mobailNumber: mobailNumber});
    const checkEmail = await userModel.findOne({email: email});

  
    if(checkMobailNumber) {
      return res.json({ mobailNumberExists: true})
    }

    if(checkUsername) {
      return res.json({ usernameExists: true})
    }

    if(checkEmail) {
      return res.json({ emailExists: true})
    }
    
    return res.json({ mobailNumberExists: false, usernameExists: false ,emailExists: false});

    } catch(error) {
       console.error("Validation error:", error);
      res.status(500).json({error: "error"});
    }
  })  




