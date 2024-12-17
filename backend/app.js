require("dotenv").config();

//user define middleware
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//routes
const authRoute = require("./routes/authRoute");
const stockRoute = require("./routes/stockRoute.js");
const validationRoute = require("./routes/validationRoute.js");

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

//stock controller
app.use("/", stockRoute);
//Auth routes
app.use("/", authRoute);

app.use("/", validationRoute)

