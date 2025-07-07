const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes:
const restaurantRoutes = require('./routes/restaurantRoutes');
app.use('/api/restaurants', restaurantRoutes);
// new
const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes);
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes); // ✅ Make sure this path matches your frontend



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send("Zomato Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

