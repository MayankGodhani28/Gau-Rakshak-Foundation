export default function WhatWeDo() {
  const services = [
    {
      icon: "💚",
      title: "Rescue & Rehabilitation",
      desc: "We provide immediate care and long-term rehabilitation for cows in need."
    },
    {
      icon: "🛡️",
      title: "Sanctuary & Safety",
      desc: "Our 40-acre sanctuary offers a permanent, safe home for rescued cows."
    },
    {
      icon: "👥",
      title: "Community Support",
      desc: "Join our community of donors, volunteers, and advocates making a difference."
    },
    {
      icon: "📅",
      title: "Educational Programs",
      desc: "We educate the public about compassionate animal care and sanctuary work."
    },
  ];

  return (
    <section className="bg-gradient-to-b from-amber-0 to-amber-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What We Do</h2>
        <p className="text-gray-600 mt-2">Our comprehensive approach to cow rescue and care</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
