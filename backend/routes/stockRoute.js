const { allHoldings, newOrder, allPosition } = require("../controllers/stockController");
const router = require("express").Router();

router.get("/allHoldings/:id", allHoldings);
router.post("/newOrder/:id", newOrder);
router.get("/allPositions", allPosition);

module.exports = router;