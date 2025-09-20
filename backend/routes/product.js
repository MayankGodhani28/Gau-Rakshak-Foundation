const express = require("express");
const Product = require("../models/product");
const data = require("../datax/data");

const router = express.Router();


// ✅ Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    // console.log(products);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
