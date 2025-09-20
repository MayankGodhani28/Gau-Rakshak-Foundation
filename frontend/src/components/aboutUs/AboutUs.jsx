export default function AboutUs() {
  return (
    <div className="bg-yellow-50 mt-3 py-16 px-6 md:px-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-brown-800">
          About गो रक्षक Foundation
        </h2>
        <p className="mt-4 text-lg text-brown-600 max-w-3xl mx-auto">
          For over 6 years, we've been dedicated to providing sanctuary, care, and love to cows in need.  
          Our journey began with a simple belief: every life deserves compassion.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 mb-12">
        <h3 className="text-2xl font-semibold text-green-600 flex items-center gap-2">
          <span>💚</span> Our Mission & Story
        </h3>
        <p className="mt-4 text-brown-700 leading-relaxed">
          Founded in 2018 by a group of passionate animal advocates, गो रक्षक Foundation began when we
          witnessed the urgent need for cow sanctuary and rehabilitation services in our region.  
          What started as a small effort to save five cows has grown into a comprehensive rescue operation.
        </p>
        <p className="mt-3 text-brown-700 leading-relaxed">
          Today, we operate a 40-acre sanctuary that serves as a permanent home for over 80 cows,  
          with facilities including veterinary care, rehabilitation spaces, and educational centers.  
          Our dedicated team works tirelessly to provide medical care, proper nutrition, and the love these gentle giants deserve.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h4 className="text-3xl font-bold text-green-600">200+</h4>
          <p className="text-brown-700 mt-2">Cows Rescued</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h4 className="text-3xl font-bold text-green-600">40</h4>
          <p className="text-brown-700 mt-2">Acres of Sanctuary</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h4 className="text-3xl font-bold text-green-600">6</h4>
          <p className="text-brown-700 mt-2">Years of Service</p>
        </div>
      </div>

      {/* Journey Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 mb-12">
        <h3 className="text-2xl font-semibold text-green-600 flex items-center gap-2">
          <span>📜</span> Our Journey
        </h3>
        <ul className="mt-4 space-y-3">
          <li><strong>2018:</strong> Foundation established with first rescue of 5 cows</li>
          <li><strong>2019:</strong> Built first permanent shelter facility</li>
          <li><strong>2020:</strong> Rescued 50+ cows, expanded to 20-acre sanctuary</li>
          <li><strong>2021:</strong> Launched education programs for local schools</li>
          <li><strong>2022:</strong> Opened veterinary care center on-site</li>
          <li><strong>2023:</strong> Reached milestone of 200+ cows rescued</li>
          <li><strong>2024:</strong> Expanded to 40 acres with new adoption program</li>
        </ul>
      </div>

      {/* Donors Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8">
        <h3 className="text-2xl font-semibold text-green-600 flex items-center gap-2">
          <span>🤝</span> Our Valued Supporters
        </h3>
        <p className="mt-2 text-brown-600">We’re grateful to our generous donors who make our mission possible.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-green-50 p-4 rounded-xl shadow text-center">
            <h4 className="font-semibold text-lg">Ramesh Sharma</h4>
            <p className="text-sm text-gray-600">Supporting for 5 years</p>
            <p className="text-green-700 font-bold mt-2">₹50,00,000+</p>
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">Platinum</span>
          </div>

          <div className="bg-green-50 p-4 rounded-xl shadow text-center">
            <h4 className="font-semibold text-lg">Meera & Arjun Patel</h4>
            <p className="text-sm text-gray-600">Supporting for 3 years</p>
            <p className="text-green-700 font-bold mt-2">₹25,00,000+</p>
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs">Gold</span>
          </div>

          <div className="bg-green-50 p-4 rounded-xl shadow text-center">
            <h4 className="font-semibold text-lg">Green Valley Trust</h4>
            <p className="text-sm text-gray-600">Supporting for 2 years</p>
            <p className="text-green-700 font-bold mt-2">₹15,00,000+</p>
            <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs">Silver</span>
          </div>

          <div className="bg-green-50 p-4 rounded-xl shadow text-center">
            <h4 className="font-semibold text-lg">Anonymous Donor</h4>
            <p className="text-sm text-gray-600">Supporting for 4 years</p>
            <p className="text-green-700 font-bold mt-2">₹30,00,000+</p>
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">Platinum</span>
          </div>

          <div className="bg-green-50 p-4 rounded-xl shadow text-center">
            <h4 className="font-semibold text-lg">Community Seva Fund</h4>
            <p className="text-sm text-gray-600">Supporting for 6 years</p>
            <p className="text-green-700 font-bold mt-2">₹10,00,000+</p>
            <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs">Bronze</span>
          </div>
        </div>
      </div>
    </div>
  );
}
