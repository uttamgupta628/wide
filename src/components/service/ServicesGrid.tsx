import React from "react";
import { Link } from "react-router-dom";
import cardImage from "../../assets/service.png";

const services = [
  { title: "OOH Event services", path: "/services/ooh" },
  { title: "Corporate Events", path: "/services/corporate" },
  { title: "Brand Activation", path: "/services/Branding" },
  { title: "Celebrity Management", path: "/services/Management" },
  { title: "Public Relations (PR)", path: "/services/Pr" },
  { title: "Branding", path: "/services/Branding" },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className="px-0 sm:px-6 pb-10 bg-[#faf7f5]">
      {/* Breadcrumb */}
      <div className="bg-[#3C3533] text-white text-sm px-6 py-4 mb-12 tracking-wide w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
  Home &gt; Services 
</div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#111111] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* IMAGE */}
            <div className="h-72 sm:h-80 lg:h-96 w-full overflow-hidden">
              <img
                src={cardImage}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* BUTTON */}
            <div className="p-5">
              <Link to={service.path}>
                <button className="w-full bg-[#1c1c1c] text-white py-4 rounded-md text-base font-medium tracking-wide hover:bg-[#2a2a2a] active:scale-[0.98] transition-all duration-200">
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
