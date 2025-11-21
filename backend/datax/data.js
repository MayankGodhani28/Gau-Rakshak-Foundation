
const mongoose = require("mongoose");
const Product = require("../models/product");

const data=[
  {
    "name": "A2 Cow Milk",
    "price": 90,
    "about": "Pure and fresh A2 cow milk from desi cows, rich in nutrients.",
    "image": "/images/a2milk.jpg"
  },
  {
    "name": "Milk Lassi",
    "price": 50,
    "about": "Refreshing sweet lassi made with fresh curd and milk.",
    "image": "/images/milklassi.jpg"
  },
  {
    "name": "Mango Lassi",
    "price": 70,
    "about": "Thick and creamy mango lassi blended with ripe Alphonso mangoes.",
    "image": "/images/mangolassi.jpg"
  },
  {
    "name": "Kulfi",
    "price": 60,
    "about": "Traditional Indian frozen dessert made with rich milk and dry fruits.",
    "image": "/images/kulfi.jpg"
  },
  {
    "name": "Whipped Cream",
    "price": 150,
    "about": "Soft and fluffy whipped cream perfect for cakes and desserts.",
    "image": "/images/whippedcream.jpg"
  },
  {
    "name": "Heavy Cream",
    "price": 180,
    "about": "Rich heavy cream made from pure cow milk, ideal for cooking.",
    "image": "/images/heavycream.jpg"
  },
  {
    "name": "Milk Ice Cream",
    "price": 120,
    "about": "Delicious creamy ice cream made with pure milk.",
    "image": "/images/icecream.jpg"
  },
  {
    "name": "Milk Powder",
    "price": 250,
    "about": "High-quality milk powder for tea, coffee, and desserts.",
    "image": "/images/milkpowder.jpg"
  },
  {
    "name": "Curd (Dahi)",
    "price": 80,
    "about": "Fresh homemade curd made from farm fresh cow milk.",
    "image": "/images/curd.jpg"
  },
  {
    "name": "Buttermilk (Chaas)",
    "price": 40,
    "about": "Refreshing buttermilk seasoned with spices, perfect for summers.",
    "image": "/images/buttermilk.jpg"
  },
  {
    "name": "Ghee",
    "price": 550,
    "about": "Traditional pure cow ghee made using the bilona method.",
    "image": "/images/ghee.jpg"
  },
  {
    "name": "Butter",
    "price": 200,
    "about": "Creamy and fresh butter made from churned cow milk.",
    "image": "/images/butter.jpg"
  },
  {
    "name": "Cheese",
    "price": 300,
    "about": "Delicious soft cheese made from high-quality cow milk.",
    "image": "/images/chees.jpg"
  }
];

// Only run if this file is executed directly
if (require.main === module) {
  mongoose.connect("mongodb+srv://godhanimayank075_db_user:H9Tp8CS6EXoVI1Ki@gaurakshakfoundation.vhlvzpe.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
      try {
        console.log("Connected to MongoDB");
        await Product.deleteMany({});
        console.log("All products deleted");
        await Product.insertMany(data);
        console.log("All products inserted");
        await mongoose.disconnect();
        process.exit(0);
      } catch (err) {
        console.error("Error during DB operation:", err);
        await mongoose.disconnect();
        process.exit(1);
      }
    })
    .catch(err => {
      console.error("MongoDB connection error:", err);
      process.exit(1);
    });
}
