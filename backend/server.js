require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");   // <-- only once
const rescueRoutes = require("./routes/rescueRoutes.js");
const feedbackRoutes = require("./routes/feedbackRoutes.js");
const productRoutes = require("./routes/product.js");
const cartRoutes = require("./routes/cart.js");
const bodyParser = require("body-parser");
const Stripe = require("stripe");
const donationRoutes = require("./routes/donations.js");
const authRoutes = require("./routes/auth.js");
const path = require("path");

// Initialize express
const app = express();

// Serve images folder
app.use("/images", express.static(path.join(__dirname, "datax/images")));

// -------------------------
// ✅ CORS FIX (LOCAL + RENDER)
// -------------------------
app.use(
  cors({
    origin: process.env.FRONTEND_URL,   // FROM .env
    credentials: true,
  })
);

// Body parser + JSON
app.use(bodyParser.json());
app.use(express.json());

// -------------------------
// Stripe
// -------------------------
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
console.log("Stripe Secret Key:", stripeSecretKey ? "Loaded" : "Missing");

if (!stripeSecretKey || !stripeSecretKey.startsWith("sk_")) {
  console.error("❌ Stripe secret key is missing or invalid. Check .env");
  process.exit(1);
}
const stripe = Stripe(stripeSecretKey);

// -------------------------
// Routes
// -------------------------
app.use("/api/rescues", rescueRoutes);
app.use("/api/feedbacks", feedbackRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);

// -------------------------
// MongoDB Connection
// -------------------------
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// -------------------------
// Start Server
// -------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
