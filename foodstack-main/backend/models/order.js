// models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      name:  { type: String,  required: true },
      qty:   { type: Number,  required: true, min: 1 },
      price: { type: Number,  required: true, min: 0 }
    }
  ],
  total: { type: Number, required: true, min: 0 },
  date:  { type: Date,   default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);
