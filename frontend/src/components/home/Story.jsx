import React from "react";

export default function FoundationStory() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      {/* --- Page Title + Subtitle --- */}
      <header className="text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#3b2c20]">
          Our Foundation Story
        </h1>
        <p className="mt-2 text-[#6b4226] text-md md:text-base">
          Born from compassion, grown through dedication
        </p>
      </header>

      {/* ===== Section 1: How It All Started ===== */}
      <section className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            How It All Started
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            In the summer of 2018, our founder Sarah Johnson witnessed five cows
            abandoned on a property near her home. Malnourished and neglected,
            these gentle giants needed immediate help. What began as an
            emergency rescue mission soon revealed a much larger problem in our
            community.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Sarah, along with local veterinarian Dr. Michael Chen and farmer
            Lisa Rodriguez, realized that there was no dedicated sanctuary for
            cows in our region. Together, they decided to change that, pooling
            their resources and expertise to create Gentle Hearts Cow Rescue.
          </p>

          {/* Mission Highlight */}
          <div className="flex items-start gap-3 mt-6">
            <div className="bg-green-100 p-2 rounded-full">
              <span className="text-green-600 text-lg">💚</span>
            </div>
            <div>
              <h4 className="font-semibold">Our Mission</h4>
              <p className="text-sm text-gray-600">
                To provide sanctuary, care, and love to every cow in need
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="font-medium">Foundation Established</span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                2018
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span className="font-medium">First Rescue</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                5 Cows
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span className="font-medium">Initial Funding</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                $25,000
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span className="font-medium">Founding Members</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                3
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== Section 2: Growing Impact ===== */}
      <section className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Growing Impact
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            From those first five cows, our sanctuary has grown to house over 80
            permanent residents and has facilitated the rescue and
            rehabilitation of more than 200 cows over six years. Each cow that
            comes to us has a unique story, but they all share the need for
            compassion and care.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Today, we operate a state-of-the-art facility with 40 acres of
            pasture, veterinary facilities, and educational centers. Our work
            extends beyond rescue to include community education, advocacy for
            animal welfare, and building a network of support for sanctuaries
            nationwide.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            None of this would be possible without our incredible community of
            supporters, volunteers, and dedicated staff who share our vision of
            a world where every cow can live with dignity and love.
          </p>
        </div>

        {/* Right Side */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-green-600 font-semibold mb-4 flex items-center gap-2">
            <span>⭐</span> Key Milestones
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                2019
              </span>
              <span>Built our first permanent shelter facility</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                2020
              </span>
              <span>Expanded to 20 acres, rescued 50+ cows</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                2021
              </span>
              <span>Launched educational programs for schools</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                2022
              </span>
              <span>Opened on-site veterinary care center</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                2023
              </span>
              <span>Reached 200+ cows rescued milestone</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                2024
              </span>
              <span>Expanded to 40 acres with adoption program</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
