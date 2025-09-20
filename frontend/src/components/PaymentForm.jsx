// PaymentForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ clientSecret, cartOrDonationId, type = "donation", onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Processing...");

    if (!stripe || !elements) return;

    try {
      const cardElement = elements.getElement(CardElement);

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      // Determine API endpoint and payload
      let endpoint = "";
      let payload = { status: paymentResult.paymentIntent?.status || "failed" };

      if (type === "donation") {
        endpoint = "http://localhost:5000/api/donations/confirm";
        payload.donationId = cartOrDonationId;
      } else if (type === "cart") {
        endpoint = "http://localhost:5000/api/cart/confirm";
        payload.cartId = cartOrDonationId;
      }

      // Update backend
      await axios.post(endpoint, payload);

      if (paymentResult.error) {
        setStatus(`Payment failed: ${paymentResult.error.message}`);
      } else {
        setStatus("Payment successful!");
        window.alert("Payment successful!");
        if (onPaymentSuccess) onPaymentSuccess();
        navigate("/"); // redirect to home
      }
    } catch (err) {
      console.error(err);
      setStatus(`Error: ${err.response?.data?.error || err.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="border p-2 rounded-md" />
      <button
        type="submit"
        disabled={!stripe}
        className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700"
      >
        Pay Now
      </button>
      {status && <p className="mt-2 text-center">{status}</p>}
    </form>
  );
};

export default PaymentForm;
