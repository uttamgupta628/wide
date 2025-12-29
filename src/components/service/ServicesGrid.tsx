import React from "react";
import cardImage from "../../assets/service.png";

const services = [
  "OOH Event services",
  "Corporate Events",
  "Brand Activation",
  "Celebrity Management",
  "Public Relations (PR)",
  "Branding",
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 py-16 bg-[#faf7f5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        {services.map((title, index) => (
          <div
            key={index}
            className="bg-[#111111] rounded-xl overflow-hidden shadow-lg flex flex-col"
          >
            {/* IMAGE */}
            <div className="h-72 sm:h-80 lg:h-96 w-full">
              <img
                src={cardImage}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* BUTTON */}
            <div className="p-5">
              <button className="w-full bg-[#1c1c1c] text-white py-4 rounded-md text-base font-medium hover:bg-[#2a2a2a] transition">
                {title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
