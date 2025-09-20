const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: "Community Member" },
  email: { type: String },
  rating: { type: Number, required: true, min: 1, max: 5 },
  experience: { type: String, required: true },
  category: { type: String },
  suggestions: { type: String },
  recommend: { type: String },
}, { timestamps: true });

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
