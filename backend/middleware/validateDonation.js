module.exports = function validateDonation(req, res, next) {
  const { name, email, phone, amount } = req.body;

  if (!name || !email || !phone || !amount) {
    return res.status(400).json({ error: "All required fields must be filled." });
  }

  if (amount <= 0) {
    return res.status(400).json({ error: "Donation amount must be greater than zero." });
  }

  next();
};