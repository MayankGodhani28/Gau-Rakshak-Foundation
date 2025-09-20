import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../PaymentForm"; // your existing PaymentForm
import axios from "axios";
import { useNavigate } from "react-router-dom"; // <-- added

const stripePromise = loadStripe(
  "pk_test_51S8hKtBSrBgMSrySJTmPMR9hKIWnsDHiudNAjoLMTH2KFNZKr1qokg2lFC1NYAWWe95rc6Rw1bxM07jwCi8giOFs00iHvP3YFi"
);

const Cart = () => {
  const { cartItems, getTotal, removeFromCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // <-- initialize navigate

  if (cartItems.length === 0) return null;

  const handleProceedPayment = async () => {
    // Validate required fields
    if (!name.trim() || !email.trim() || !address.trim()) {
      const missing = [];
      if (!name.trim()) missing.push("Name");
      if (!email.trim()) missing.push("Email");
      if (!address.trim()) missing.push("Address");
      setError(`Please fill in: ${missing.join(", ")}`);
      return;
    }

    setError(""); // clear previous errors
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/cart/create-payment",
        {
          items: cartItems,
          total: getTotal(),
          name,
          email,
          address,
        }
      );

      setPaymentData(data);
      setShowPayment(true);
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = () => {
    setPaymentData(null);
    setShowPayment(false);
    setName("");
    setEmail("");
    setAddress("");

    navigate("/"); // <-- redirect to home page
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow hover:bg-green-600 transition z-50"
      >
        {isOpen ? "Hide Cart" : `Cart (${cartItems.length})`}
      </button>

      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-white shadow-lg rounded-xl p-4 z-50">
          <h2 className="text-lg font-semibold mb-2">Your Cart</h2>

          {/* Cart Items */}
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border-b pb-1"
              >
                <span>{item.name}</span>
                <div className="flex items-center gap-2">
                  <span>₹{item.price}</span>
                  <button
                    onClick={() => removeFromCart(idx)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between font-semibold mt-2">
            <span>Total:</span>
            <span>₹{getTotal()}</span>
          </div>

          {/* Name & Email */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full border px-2 py-1 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full border px-2 py-1 rounded"
          />

          {/* Address */}
          <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-2 w-full border px-2 py-1 rounded"
          />

          {/* Show inline error */}
          {error && <p className="text-red-500 mt-2">{error}</p>}

          {/* Proceed to Payment */}
          {!showPayment && (
            <button
              onClick={handleProceedPayment}
              disabled={loading}
              className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>
          )}

          {/* Payment Form */}
          {showPayment && paymentData && (
            <div className="mt-2 p-2 bg-gray-100 rounded">
              <Elements stripe={stripePromise}>
                <PaymentForm
                  clientSecret={paymentData.clientSecret}
                  cartOrDonationId={paymentData.cartId} // MUST match CartOrder._id
                  type="cart"
                  onPaymentSuccess={handlePaymentSuccess}
                />
              </Elements>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
