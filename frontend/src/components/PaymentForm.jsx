// PaymentForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const API_BASE = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
if (!API_BASE) {
  console.warn("VITE_API_URL not set — using relative API paths for confirm endpoints");
}

const PaymentForm = ({ clientSecret, cartOrDonationId, type = "donation", onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Processing...");

    if (!stripe || !elements) {
      setStatus("Stripe is not ready. Please wait.");
      return;
    }

    try {
      const cardElement = elements.getElement(CardElement);

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      // If Stripe returned an error, show it and do NOT call backend confirm endpoint
      if (paymentResult.error) {
        setStatus(`Payment failed: ${paymentResult.error.message}`);
        return;
      }

      // At this point we should have a paymentIntent; use its status
      const intentStatus = paymentResult.paymentIntent?.status || "unknown";

      // Determine API endpoint and payload (use API_BASE if available)
      let endpoint = "";
      let payload = { status: intentStatus };

      if (type === "donation") {
        endpoint = API_BASE ? `${API_BASE}/api/donations/confirm` : "/api/donations/confirm";
        payload.donationId = cartOrDonationId;
      } else if (type === "cart") {
        endpoint = API_BASE ? `${API_BASE}/api/cart/confirm` : "/api/cart/confirm";
        payload.cartId = cartOrDonationId;
      } else {
        throw new Error("Unknown payment type");
      }

      // Update backend — only after successful Stripe confirmation
      await axios.post(endpoint, payload);

      setStatus("Payment successful!");
      window.alert("Payment successful!");
      if (onPaymentSuccess) onPaymentSuccess();
      navigate("/"); // redirect to home
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
