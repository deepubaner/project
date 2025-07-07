const mongoose = require('mongoose');
const restaurantSchema = new mongoose.Schema({
     name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    type: { type: String, required: true},
    price: { type: Number, required: true },
});
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;