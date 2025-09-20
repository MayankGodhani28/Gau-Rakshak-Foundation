const express = require("express");
const Rescue = require("../models/rescueModel");

const router = express.Router();

// POST request - create rescue request
router.post("/", async (req, res) => {
  try {
    const newRescue = new Rescue(req.body);
    await newRescue.save();
    res.status(201).json({ message: "Rescue request saved", data: newRescue });
  } catch (error) {
    console.error("Rescue request error:", error);
    const errorMessage = error.message || "Error saving rescue request";
    res.status(500).json({ 
      message: errorMessage,
      details: error.errors ? Object.values(error.errors).map(err => err.message) : []
    });
  }
});

// // GET request - fetch all rescue requests
// router.get("/", async (req, res) => {
//   try {
//     const rescues = await Rescue.find();
//     res.json(rescues);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching rescue requests", error });
//   }
// });

module.exports = router;
