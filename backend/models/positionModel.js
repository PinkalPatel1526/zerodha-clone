const { model } = require("mongoose");
const { positionSchema } = require("../schemas/positionSchema.js");

const positionModel = model("position", positionSchema);

module.exports = positionModel;