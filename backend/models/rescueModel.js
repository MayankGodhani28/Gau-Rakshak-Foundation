const mongoose = require("mongoose");

const rescueSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    urgency: { 
      type: String, 
      enum: [
        "Emergency - Immediate danger",
        "Urgent - Within 48 hours",
        "Standard - Within a week",
        "Planning - Future rescue"
      ], 
      required: true 
    },
    location: { type: String },
    numberOfAnimals: { type: String },
    situation: { type: String },
    details: { type: String, required: true }
  },
  { timestamps: true }
);

const Rescue = mongoose.model("Rescue", rescueSchema);

module.exports = Rescue;
