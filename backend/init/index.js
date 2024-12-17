const mongoose = require("mongoose");
const { model } = require("mongoose");
const { holdings, positions } = require("../init/data.js");
const holdingModel = require("../models/holdingModel.js");
const { positionModel } = require("../models/positionModel.js");
const orderModel = require("../models/orderModel.js");

//DB connction
mongoose
  .connect(
    "mongodb+srv://pinkalpatel2615:pinkal8924@clusterzerodhaclone.5mmxn.mongodb.net/zerodha?retryWrites=true&w=majority&appName=ClusterZerodhaClone"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

//Holding data add
//   let addData = async () => {
//     try {
//       await holdingModel.insertMany(holdings);
//       console.log("Data Added");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   addData();

//Position data add
// let addData = async () => {
//   try {
//     await positionModel.insertMany(positions);
//     console.log("Data Added");
//   } catch (err) {
//     console.log(err);
//   }
// };

// addData();

let deleteData = async() => {
  await orderModel.deleteMany({});
  console.log("Data delted");

}

deleteData();
