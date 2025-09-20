// src/components/JoinMission.jsx
import { Heart, Users, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const JoinMission = () => {
  const items = [
    {
      icon: <Heart className="h-10 w-10 text-red-500" />,
      title: "Need Rescue?",
      desc: "Report cows in need of immediate help",
      button: "Contact Us",
      link: "/contact",
      style: "bg-green-600 text-white hover:bg-green-500",
    },
    {
      icon: <Users className="h-10 w-10 text-green-600" />,
      title: "Support Us",
      desc: "Learn about our work and become a supporter",
      button: "Learn More",
      link: "/about",
      style: "bg-green-600 text-white hover:bg-green-500",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-blue-500" />,
      title: "Shop & Support",
      desc: "Buy sanctuary products that help our mission",
      button: "Visit Shop",
      link: "/shop",
      style: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    },
  ];

  return (
    <section className=" py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Join Our Mission
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Whether you need rescue services, want to support our work, or shop
          for sanctuary products, there are many ways to be part of our
          compassionate community.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-8 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            {item.icon}
            <h3 className="mt-4 font-semibold text-lg text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
            <Link
              to={item.link}
              className={`mt-6 px-6 py-2 rounded-lg font-medium transition ${item.style}`}
            >
              {item.button}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JoinMission;
