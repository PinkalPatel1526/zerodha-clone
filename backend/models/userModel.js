const { model, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema } = require("mongoose");
// const holdingModel = require("./holdingModel");

const userSchema = new Schema({
  mobailNumber: {
    type: Number,
    required: [true, "Your Mobail-Number is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Your Email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  birthDate: {
    type: Date,
    required: [true, "Your birth date is required"],
  },
  panNumber: {
    type: Number,
    required: [true, "Your pan card number is required"],
    unique: true,
  },
  bankAccNumber: {
    type: Number,
    required: [true, "Your bank account number is required"],
    unique: true,
  },
  holding: [
    {
      type: mongoose.Schema.ObjectId,
      ref:"holding",
    }
  ],
  order: [
    {
      type: mongoose.Schema.ObjectId,
      ref:"order",
    }
  ],
  position: [
    {
      type: mongoose.Schema.ObjectId,
      ref:"position",
    }
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const userModel = model("user", userSchema);

module.exports = userModel;
