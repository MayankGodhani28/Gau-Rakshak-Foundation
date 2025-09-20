import React from "react";

const InfoCards = () => {
  const infoItems = [
    {
      emoji: "🚚",
      title: "Free Shipping",
      description: "Free shipping on orders over $50",
    },
    {
      emoji: "💝",
      title: "Direct Impact",
      description: "100% of proceeds support cow rescue operations",
    },
    {
      emoji: "🎁",
      title: "Gift Wrapping",
      description: "Free gift wrapping available at checkout",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
        >
          <div className="text-4xl mb-3">{item.emoji}</div>
          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
