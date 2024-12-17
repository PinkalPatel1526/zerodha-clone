const userModel = require("../models/userModel.js");

module.exports.validation = async (req, res) => {
    try {
      const { username, email, mobailNumber } = req.body;
      console.log(username, email, mobailNumber);
  
      const checkUsername = await userModel.findOne({ username: username });
      const checkMobailNumber = await userModel.findOne({
        mobailNumber: mobailNumber,
      });
      const checkEmail = await userModel.findOne({ email: email });
  
      if (checkMobailNumber) {
        return res.json({ mobailNumberExists: true });
      }
  
      if (checkUsername) {
        return res.json({ usernameExists: true });
      }
  
      if (checkEmail) {
        return res.json({ emailExists: true });
      }
  
      return res.json({
        mobailNumberExists: false,
        usernameExists: false,
        emailExists: false,
      });
    } catch (error) {
      console.error("Validation error:", error);
      res.status(500).json({ error: "error" });
    }
  };