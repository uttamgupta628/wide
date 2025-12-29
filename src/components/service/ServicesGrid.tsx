import React from "react";
import { Link } from "react-router-dom";
import cardImage from "../../assets/service.png";

const services = [
  { title: "OOH Event services", path: "/services/ooh" },
  { title: "Corporate Events", path: "/services/corporate" },
  { title: "Brand Activation", path: "/services/Branding" },
  { title: "Celebrity Management", path: "/services/celebrity-management" },
  { title: "Public Relations (PR)", path: "/services/pr" },
  { title: "Branding", path: "/services/branding" },
];


export const ServicesGrid: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 py-16 bg-[#faf7f5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#111111] rounded-xl overflow-hidden shadow-lg flex flex-col"
          >
            {/* IMAGE */}
            <div className="h-72 sm:h-80 lg:h-96 w-full">
              <img
                src={cardImage}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* BUTTON */}
            <div className="p-5">
              <Link to={service.path}>
                <button className="w-full bg-[#1c1c1c] text-white py-4 rounded-md text-base font-medium hover:bg-[#2a2a2a] transition">
                  {service.title}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
