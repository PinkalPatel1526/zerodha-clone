const { Schema, default: mongoose } = require("mongoose");

module.exports.holdingsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  avg: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  net: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  isLoss: {
    type: Boolean,
  },
  userId: {
    type: mongoose.Schema.ObjectId, 
    ref: "User",          
    required: true,      
  },
});
