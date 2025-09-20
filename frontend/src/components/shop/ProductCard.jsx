import React, { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const token = localStorage.getItem("token"); // check if user is logged in
    if (!token) {
      // user not logged in
      alert("Please login first to buy items."); // simple popup
      navigate("/login"); // redirect to login page
      return;
    }

    // user logged in, add to cart
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col hover:shadow-lg transition">
      {/* Image */}
      <div className="w-full aspect-square overflow-hidden rounded">
        <img
          src={`http://localhost:5000${product.image}`}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Name + Price */}
      <div className="flex justify-between items-center mt-3">
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <span className="text-green-600 font-semibold text-lg">
          ₹{product.price}
        </span>
      </div>

      {/* About */}
      <p className="text-sm text-gray-600 mt-1 flex-grow">{product.about}</p>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-400 text-white px-4 py-2 rounded-md hover:from-green-600 hover:to-green-500 transition"
      >
        <ShoppingCart className="w-4 h-4" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
