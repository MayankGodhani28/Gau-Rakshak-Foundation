const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // <-- use env variable
const Donation = require("../models/Donation");
const validateDonation = require("../middleware/validateDonation");

// Create donation & PaymentIntent
router.post("/", validateDonation, async (req, res) => {
  const { name, email, phone, amount, donationType, heardAbout, message } = req.body;

  try {
    // Validate amount
    const donationAmount = Number(amount);
    if (isNaN(donationAmount) || donationAmount <= 0) {
      return res.status(400).json({ error: "Invalid donation amount" });
    }

    // Save donation in DB as pending
    const donation = await Donation.create({
      name,
      email,
      phone,
      amount: donationAmount,
      donationType,
      heardAbout,
      message
    });

    // Create Stripe PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: donationAmount * 100,
      currency: "inr",
      payment_method_types: ["card"],
      metadata: { donationId: donation._id.toString() }
    });

    res.json({ clientSecret: paymentIntent.client_secret, donationId: donation._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// Update payment status after successful payment
router.post("/confirm", async (req, res) => {
  const { donationId, status } = req.body;

  try {
    const donation = await Donation.findById(donationId);
    if (!donation) return res.status(404).json({ error: "Donation not found" });

    donation.paymentStatus = status; // "succeeded" or "failed"
    await donation.save();

    res.json({ message: "Donation updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
