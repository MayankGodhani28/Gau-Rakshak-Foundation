const express = require("express");
const Feedback = require("../models/Feedback.js");

const router = express.Router();

// GET all feedbacks
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching feedbacks", error: err.message });
  }
});

// POST new feedback
router.post("/", async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    
    await newFeedback.save();

    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(400).json({ message: "Error saving feedback", error: err.message });
  }
});

module.exports = router;
