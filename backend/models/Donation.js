const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  amount: { type: Number, required: true },
  heardAbout: { type: String, default: "" },           // optional
  paymentMethod: { type: String, default: "card" },
  message: { type: String, default: "" },
  paymentStatus: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Donation", donationSchema);
