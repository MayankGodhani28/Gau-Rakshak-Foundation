const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const CartOrder = require("../models/CartOrder");

// Create payment intent for cart
router.post("/create-payment", async (req, res) => {
  const { items, total, address, name, email } = req.body;

  const missingFields = [];
  if (!items || !items.length) missingFields.push("Cart items");
  if (!total) missingFields.push("Total amount");
  if (!address) missingFields.push("Address");
  if (!name) missingFields.push("Name");
  if (!email) missingFields.push("Email");

  if (missingFields.length) {
    return res.status(400).json({
      error: `Missing required fields: ${missingFields.join(", ")}`
    });
  }

  try {
    const cartOrder = await CartOrder.create({ items, total, address, name, email });
    console.log("CartOrder created:", cartOrder);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(total * 100),
      currency: "inr",
      payment_method_types: ["card"],
      metadata: { cartId: cartOrder._id.toString() } // only ID
    });
     
    res.json({ clientSecret: paymentIntent.client_secret, cartId: cartOrder._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});


// Confirm payment
router.post("/confirm", async (req, res) => {
  const { cartId, status } = req.body;
console.log("Confirm request payload:", req.body); 
  try {
    const cartOrder = await CartOrder.findById(cartId);
    if (!cartOrder) return res.status(404).json({ error: "Cart order not found" });

    cartOrder.paymentStatus = status; // "succeeded" or "failed"
    await cartOrder.save();
   
    res.json({ message: "Cart order updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
