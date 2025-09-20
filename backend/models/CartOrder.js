const mongoose = require("mongoose");

const cartOrderSchema = new mongoose.Schema({
  items: [
    {
      _id: String,
      name: String,
      price: Number,
      about: String,
      image: String,
      quantity: { type: Number, default: 1 }
    }
  ],
  total: Number,
  address: String,
  name: String,
  email: String,
  paymentStatus: { type: String, default: "pending" }, // pending / succeeded / failed
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CartOrder", cartOrderSchema);
