const { Schema } = require("mongoose");

module.exports.orderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
 
  price: {
    type: Number,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
 
});
