const router = require("express").Router();
const Order  = require("../models/Order");

router.post("/", async (req, res) => {
  console.log("ORDER BODY:", req.body);  // debug
  try {
    const order = await Order.create(req.body);
    res.status(201).json({ message: "Saved", id: order._id });
  } catch (err) {
    console.error("SAVE ERROR:", err);
    res.status(400).json({ message: "Validation/Save error", error: err.message });
  }
});

module.exports = router;
