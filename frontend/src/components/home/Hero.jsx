import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero-cow-sanctuary.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for darkening background */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <span className="bg-white/20 text-xs md:text-sm px-3 py-1 rounded-full mb-4 inline-block">
          Saving Lives Since 2018
        </span>

        <h1 className="text-3xl md:text-5xl font-bold">
          <span className="block">गावः</span>
          <span className="block text-green-400">जीवनस्य आधारः।</span>
        </h1>

        <p className="mt-4 text-sm md:text-lg">
          Dedicated to rescuing, rehabilitating, and providing sanctuary for cows
          in need. Every life matters, every story has hope.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold shadow-md transition"
          >
            Request Rescue →
          </Link>
          <Link
            to="/donate"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold shadow-md transition"
          >
            Donate Us ❤️
          </Link>
        </div>
      </div>
    </section>
  );
}
