require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rescueRoutes = require("./routes/rescueRoutes.js");
const feedbackRoutes = require("./routes/feedbackRoutes.js");
const productRoutes = require("./routes/product.js");
const cartRoutes = require("./routes/cart.js");
const bodyParser = require("body-parser");
const Stripe = require("stripe");
const donationRoutes = require("./routes/donations.js");
const path = require("path");
const authRoutes=require("./routes/auth.js");



// Initialize express BEFORE using app
const app = express();

// ✅ Serve "images" folder as static
app.use("/images", express.static(path.join(__dirname, "datax/images")));
// Serve React build
app.use(express.static(path.join(__dirname, "../frontend/build")));


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Stripe
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY ? "Loaded" : "Missing");

if (!stripeSecretKey || !stripeSecretKey.startsWith("sk_")) {
  console.error("❌ Stripe secret key is missing or invalid. Check your .env file.");
  process.exit(1);
}
const stripe = Stripe(stripeSecretKey);

// Routes
app.use("/api/rescues", rescueRoutes);
app.use("/api/feedbacks", feedbackRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cart",cartRoutes)

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// React frontend fallback (must be after API routes)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});
