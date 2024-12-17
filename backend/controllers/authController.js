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
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    const user = await User.findOne({ mobailNumber });

    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: "Incorrect password", success: false });
    }

    const token = createSecretToken(user._id, user.username);
    res.status(200).json({
      token,
      message: "User logged in successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error in Login:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};


module.exports.Logout = (req, res) => {
  try {
    res.status(200).json({
      message: "Logout successful",
      success: true,
    });
  } catch (e) {
    res.status(500).json({
      message: "Error in logout",
      success: false,
    });
  }
};
