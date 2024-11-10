const User = require("../models/userModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const {
      mobailNumber,
      email,
      username,
      password,
      birthDate,
      panNumber,
      bankAccNumber,
      createdAt,
    } = req.body;
    
    const user = await User.create({
      mobailNumber,
      email,
      username,
      password,
      birthDate,
      panNumber,
      bankAccNumber,
    });
    
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

//Login 
module.exports.Login = async (req, res, next) => {
  try {
    const { mobailNumber, password } = req.body;
    if (!mobailNumber || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({
      mobailNumber
    });
    if (!user) {
      return res.json({ message: "Incorrect password or mobail number" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or mobail number" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
    
  } catch (error) {
    console.error(error);
  }
};
