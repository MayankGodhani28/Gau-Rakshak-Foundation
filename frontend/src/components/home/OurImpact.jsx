import React from "react";

export default function OurImpact() {
  // All stats in one array
  const stats = [
    { value: "200+", label: "Cows Rescued" },
    { value: "40", label: "Acres of Sanctuary" },
    { value: "6", label: "Years of Service" },
    { value: "15", label: "Dedicated Staff" },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#f3e8dc] py-12">
      <div className="max-w-8xl mx-5 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-8"
            >
              <h3 className="text-4xl font-bold text-green-600">
                {item.value}
              </h3>
              <p className="text-[#6b4226] mt-2 text-xl">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
