const { model } = require("mongoose");
const { orderSchema } = require("../schemas/orderSchema.js");

const orderModel = model("order", orderSchema);

module.exports = orderModel;