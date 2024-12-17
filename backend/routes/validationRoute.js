const router = require("express").Router();
const { validation } = require("../controllers/validationController");

router.post("/validate", validation);

module.exports = router;