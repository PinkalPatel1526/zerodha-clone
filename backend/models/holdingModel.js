const { model } = require("mongoose");
const { holdingsSchema } = require("../schemas/holdingsSchema.js");
const { holdings } = require("../init/data.js");

const holdingModel = model("holding", holdingsSchema);



module.exports = holdingModel;
