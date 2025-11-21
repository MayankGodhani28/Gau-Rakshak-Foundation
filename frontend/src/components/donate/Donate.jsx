// Donate.jsx

import React, { useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", amount: "", donationType: "one-time",
    heardAbout: "", message: ""
  });
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:5000/api/donations", formData);
      setPaymentData(data);
    } catch (err) {
      alert(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = () => {
    setPaymentData(null);
    setFormData({
      name: "", email: "", phone: "", amount: "", donationType: "one-time", heardAbout: "", message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center px-6 py-12">
      
      {/* Hero Section */}
      <section className="text-center max-w-2xl my-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
          🐄 Support Our Cow Rescue Foundation
        </h1>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Every contribution helps us save more lives.  
          Fill the form below to make a difference today.
        </p>
      </section>

      {/* Form or Payment */}
      {!paymentData ? (
        <section className="w-full max-w-xl bg-white/90 backdrop-blur shadow-2xl rounded-2xl p-8 border border-green-100">
          <h2 className="text-2xl font-semibold mb-6 text-center text-green-800">
            Make a Donation
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text" name="name" placeholder="Full Name" value={formData.name}
              onChange={handleChange} required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              type="email" name="email" placeholder="Email Address" value={formData.email}
              onChange={handleChange} required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              type="tel" name="phone" placeholder="Phone Number" value={formData.phone}
              onChange={handleChange} required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              type="number" name="amount" placeholder="Donation Amount (₹)" value={formData.amount}
              onChange={handleChange} required min="1"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />

            
              
              <select
                name="heardAbout" value={formData.heardAbout} onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="">How did you hear about us?</option>
                <option value="social-media">Social Media</option>
                <option value="friend">Friend</option>
                <option value="website">Website</option>
                <option value="event">Event</option>
                <option value="other">Other</option>
              </select>
            

            <textarea
              name="message" placeholder="Message (Optional)" value={formData.message}
              onChange={handleChange} rows={3}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            ></textarea>

            <button
              type="submit" disabled={loading}
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-all shadow-md disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Proceed to Payment"}
            </button>
          </form>
        </section>
      ) : (
        <section className="w-full max-w-xl bg-white/90 backdrop-blur shadow-2xl rounded-2xl p-8 border border-green-100">
          <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">
            Complete Your Payment
          </h2>
          <Elements stripe={stripePromise}>
            <PaymentForm
              clientSecret={paymentData.clientSecret}
              cartOrDonationId={paymentData.donationId}
              type="donation"
              onPaymentSuccess={handlePaymentSuccess}
            />
          </Elements>
        </section>
      )}
    </div>
  );
};

export default Donate;



