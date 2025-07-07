// backend/routes/restaurantRoutes.js
const express = require('express');
const router  = express.Router();
const Restaurant = require('../models/Restaurant');

/* -------------------------------------------------------
   GET /api/restaurants       → all restaurants
-------------------------------------------------------- */
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);          // 200 OK
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/* -------------------------------------------------------
   GET /api/restaurants/:id   → single restaurant by ID
-------------------------------------------------------- */
router.get('/:id', async (req, res) => {
  try {
    const rest = await Restaurant.findById(req.params.id);
    if (!rest) return res.status(404).json({ message: 'Restaurant not found' });
    res.json(rest);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/* -------------------------------------------------------
   POST /api/restaurants      → add a new restaurant
   (Send JSON body with name, image, location, rating, foodTypes[])
-------------------------------------------------------- */
router.post('/', async (req, res) => {
  try {
    const created = await Restaurant.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data', error: err.message });
  }

});


module.exports = router;
