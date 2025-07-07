const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Restaurant = require('./models/Restaurant');

dotenv.config();

const data = [
  {
    name: "cupcakes",
    image: "https://thebusybaker.ca/wp-content/uploads/2019/09/best-ever-from-scratch-chocolate-cupcakes-fb-ig-3.jpg",
    description: "Delicious chocolate cupcakes topped with creamy frosting.",
    rating: 4.7,
    type: "dessert",
    price: 150,
  },
  {
    name: "Burger",
    image: "https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg",
    description: "Juicy beef burger with lettuce, tomato, and cheese.",
    rating: 4.1,
    type: "fast-food",
    price: 200,
  },
  {
    name: "Dosa",
    image: "https://bing.com/th?id=OSK.004a41ff52f4fe6c2da84323faa3e7ea",
    description: "Crispy South Indian dosa served with coconut chutney and sambar.",
    rating: 4.3,
    type: "south-indian",
    price: 120,
  },
  
  {
    name: "Masala Dosa",
    image: "https://paattiskitchen.com/wp-content/uploads/2023/03/kmc_20230318_215425.jpg",
    description: "Spiced potato filling wrapped in a crispy dosa, served with chutney.",
    rating: 4.4,
    type: "south-indian",
    price: 130,
  },
  {
    name: "Idli Sambar",
    image: "https://bing.com/th?id=OSK.1df19f12a4612b5e862fbc3d2b863bde",
    description: "Steamed rice cakes served with spicy sambar and coconut chutney.",
    rating: 4.2,
    type: "south-indian",
    price: 110,
  },
  {
    name: "Butter Chicken",
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Best-Instant-Pot-Butter-Chicken-Recipe.jpg",
    description: "Tender chicken pieces cooked in a rich and creamy tomato gravy.",
    rating: 4.7,
    type: "north-indian",
    price: 350,
  },
  {
    name: "Paneer Tikka",
    image: "https://thespicemess.com/wp-content/uploads/2021/07/Paneer-Tikka-03.jpg",
    description: "Grilled paneer cubes marinated in spices and served with mint chutney.",  
    rating: 4.5,
    type: "north-indian",
    price: 250,
  },
  {
    name: "Chicken Biryani",
    image: "https://www.whiskaffair.com/wp-content/uploads/2020/07/Chicken-Biryani-2-3.jpg",
    description: "Aromatic basmati rice cooked with tender chicken pieces and spices.",
    rating: 4.6,
    type: "north-indian",
    price: 300,
  },
  {
    name: "Veg Manchurian",
    image :"https://i.ytimg.com/vi/xkMbJCtaaqA/maxresdefault.jpg",
    description: "Crispy vegetable balls in a tangy Manchurian sauce.",
    rating: 4.1,
    type: "chinese",
    price: 180,
  },
  {
    name: "Hakka Noodles",
    image: "https://i1.wp.com/thetwincookingproject.net/wp-content/uploads/2020/05/Hakka-Noodles-11-scaled.jpg?w=1707&ssl=1",
    description: "Stir-fried noodles with vegetables and soy sauce.",
    rating: 4.0,
    type: "chinese",
    price: 160,
  },
  {
    name: "Spring Rolls",
    image: "https://wallpaperaccess.com/full/6905828.jpg",
    description: "Crispy rolls filled with vegetables and served with sweet chili sauce.",
    rating: 4.0,
    type: "chinese",
    price: 150,
  },
  {
    name: "Margherita Pizza",
    image: "https://tse4.mm.bing.net/th/id/OIP.sA5pwgdPLjJtOoo5xIGRkQHaI2?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
    rating: 4.3,
    type: "continental",
    price: 250,
  },
  {
    name: "Pasta Alfredo",
    image: "https://i.pinimg.com/originals/3e/39/3c/3e393c27209280a09ac8e6a6a48f60c7.jpg",
    description: "Creamy pasta with Alfredo sauce, garlic, and Parmesan cheese.",
    rating: 4.2,
    type: "continental",
    price: 280,
  },
  {
    name: "Cheeseburger",
    image: "https://brookrest.com/wp-content/uploads/2020/05/AdobeStock_282247995-scaled.jpeg",
    description: "Juicy beef patty topped with cheese, lettuce, and tomato in a soft bun.",
    rating: 4.1,
    type: "fast-food",
    price: 220,
  },
  {
    name: "French Fries",
    image: "https://i.ytimg.com/vi/wdvIcau0TxM/maxresdefault.jpg",
    description: "Crispy golden fries served with ketchup.",
    rating: 4.0,
    type: "fast-food",
    price: 100,
  },
  {
    name: "Chocolate Brownie",
    image: "https://tse1.mm.bing.net/th/id/OIP.b_Gbvbf7Afd02OZSXSkkbAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Rich and fudgy chocolate brownie topped with a scoop of vanilla ice cream.",
   rating: 4.5,
    type: "dessert",
    price: 180,
  },
  {
    name: "Gulab Jamun",
    image: "https://tse2.mm.bing.net/th/id/OIP.TR6gVZG-S4YxWTyGXxAHiwHaFk?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Soft and syrupy Indian sweet made from khoya and dipped in sugar syrup.",
    rating: 4.6,
    type: "dessert",
    price: 120,
  },
  {
    name: "Falooda",
    image: "https://tse1.explicit.bing.net/th/id/OIP.-ZGJQzZ_21WK5wfl3k5zZgHaLG?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "A refreshing dessert made with vermicelli, basil seeds, and rose syrup.",
    rating: 4.3,
    type: "dessert",
    price: 150,
  },
  {
    name: "Lassi",
    image: "https://www.evolvingtable.com/wp-content/uploads/2022/05/Mango-Lassi-11-1024x1536.jpg",
    description: "A traditional Indian yogurt-based drink, perfect for cooling down.",
    rating: 4.4,
   type: "beverage",
    price: 80,
  },
  {
    name: "Masala Chai",
    image: "https://masalaandchai.com/wp-content/uploads/2021/07/Masala-Chai-Featured.jpg",
    description: "A spiced tea made with black tea, milk, and a blend of spices.",
    rating: 4.7,
    type: "beverage",
    price: 50,
  },
  {
    name: "Cold Coffee",
    image: "https://www.sharmispassions.com/wp-content/uploads/2024/04/cold-coffee1.jpg",
    description: "A refreshing coffee drink made with chilled coffee, milk, and ice.",
    rating: 4.2,
    type: "beverage",
    price: 90,
  },
  {
    name: "Tandoori Momos",
    image: "https://tse3.mm.bing.net/th/id/OIP.6mviqKU4pbCpJE_LOQFPhwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Spicy and smoky momos cooked in a tandoor, served with chutney.",
    rating: 4.1,
    type: "fast-food",
    price: 120,
  },
  {
    name: "Pav Bhaji",
    image: "https://tse2.mm.bing.net/th/id/OIP.BqnGev1lwV5wDRFncQ4GtQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "A spicy vegetable mash served with buttered pav (bread rolls).",
    rating: 4.4,
    type: "fast-food",
    price: 140,
  },
{
  name: "fry fish",
  image :"https://kitchenseer.com/wp-content/uploads/2020/04/Frying-fishes-in-nonstick-frying-pan.jpg",
  description: "Crispy fried fish fillets seasoned with spices.",
  rating: 0,
  type: "seafood",
  price: 300,
}

];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected for seeding");
    await Restaurant.deleteMany({});
    await Restaurant.insertMany(data);
    console.log("Database seeded with sample restaurants");
    process.exit();
  })
  .catch(err => {
    console.error("Error seeding database:", err);
    process.exit(1);
  });
