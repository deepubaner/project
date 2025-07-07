const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Yahan orderData mil raha hai req.body se
app.post("/save-order", (req, res) => {
    const orderData = req.body; // <-- Yeh line sabse important hai!
    console.log("Received Order:", orderData); // Console me check karne ke liye

    fs.writeFile("orders.json", JSON.stringify(orderData, null, 2), (err) => {
        if (err) {
            console.error("Error saving order:", err);
            return res.status(500).send("Failed to save order.");
        }
        res.send("Order saved successfully.");
    });

app.listen(3000, () => {
    console.log("✅ Server running on http://localhost:3000");
});
