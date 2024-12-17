//Collections
const holdingModel = require("../models/holdingModel.js");  
const positionModel = require("../models/positionModel.js");
const orderModel = require("../models/orderModel.js");
const userModel = require("../models/userModel.js");


module.exports.allHoldings = async (req, res) => {
    let allHoldings = await userModel.findById(req.params.id).populate("holding");
  
    console.log(allHoldings.holding);
    res.json(allHoldings.holding);
};

module.exports.newOrder = async (req, res) => {
    try {
      console.log(req.params.id);
  
      const newOrder = new orderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
      });
  
      const result = await newOrder.save();
      const user = await userModel.findById(req.params.id);
  
      console.log(user);
      user.order.push(result._id);
      console.log("Order Added");
  
      const test = await user.save();
      console.log(test);
  
      let staticCurrPrice = req.body.price + Math.random() * 100;
      let userHolding = await userModel.findById(req.params.id);
  
      // BUY Order
      if (req.body.mode === "BUY") {
        const newHolding = new holdingModel({
          name: req.body.name,
          qty: req.body.qty,
          avg: req.body.price,
          price: staticCurrPrice,
          net: "+0.00",
          day: "+0.00",
          userId: req.params.id,
        });
  
        const result = await newHolding.save();
        console.log(result);
        user.holding.push(result._id);
        const r = await user.save();
        console.log(r, "New stock added to holding");
  
      } else if (req.body.mode === "SELL") {
        // SELL Order
        const stockInHolding = await holdingModel.findOne({
          name: req.body.name,
          userId: req.params.id, // Ensure the holding belongs to the user
        });
  
        if (stockInHolding) {
          if (stockInHolding.qty < req.body.qty) {
            console.log(`Insufficient quantity: only ${stockInHolding.qty} available.`);
            return res.status(400).json({
              error: `Insufficient quantity: only ${stockInHolding.qty} available.`,
            });
          } else {
            // Calculate updated stock quantity
            let updatedStockQty = stockInHolding.qty - req.body.qty;
  
            if (updatedStockQty === 0) {
              // Delete the holding if all stocks are sold
              const deletedHolding = await holdingModel.deleteOne({
                _id: stockInHolding._id,
              });
              console.log(deletedHolding);
  
              // Remove from user's holdings
              const r = await userModel.findByIdAndUpdate(req.params.id, {
                $pull: { holding: stockInHolding._id },
              });
  
              console.log(r, "Stock deleted");
            } else {
              // Update the holding with the new quantity
              await holdingModel.updateOne(
                { _id: stockInHolding._id },
                { qty: updatedStockQty }
              );
  
              console.log("Stock quantity updated");
            }
          }
        } else {
          console.log("Stock not found in holdings");
          return res.status(404).json({
            error: "Stock not found in holdings",
          });
        }
      }
  
      res.status(200).json({ message: "Order processed successfully." });
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  };  

  module.exports.allPosition = async (req, res) => {
    let allPositions = await positionModel.find({});
  
    res.json(allPositions);
  };

