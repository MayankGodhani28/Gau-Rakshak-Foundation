import React from "react";
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 bg-[#fafaf8]">
      {/* Title */}
      <h1 className="text-4xl font-bold text-brown-800">Sanctuary Shop</h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg text-brown-600 max-w-2xl">
        Support our rescue mission by purchasing handcrafted items made with
        love. Every purchase helps us care for more cows in need.
      </p>

      {/* Highlight Box */}
      <div className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-[#fdf7f2] to-[#e7d7c9] shadow-md flex items-center gap-2">
        <Heart className="w-5 h-5 text-pink-500" />
        <span className="text-brown-700 text-sm font-medium">
          All proceeds go directly to cow care and rescue operations
        </span>
      </div>
    </div>
  );
};

export default Hero;
