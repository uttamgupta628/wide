import React from "react";
import oohImage from "../../assets/cor.png";
import billboardImage from "../../assets/corporate2.png";
import Breadcrumb from "../Global/Breadcrumb";

export const Corporate: React.FC = () => {
  return (
    <div className="bg-[#F8F6F5]">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Corporate Events" },
        ]}
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Corporate Events
        </h1>
        <p className="text-gray-700 mb-6">
          Professional planning and execution of memorable corporate events that
          elevate your brand
        </p>

        <div className="group relative w-full h-120 overflow-hidden rounded-3xl shadow-lg">
          <img
            src={billboardImage}
            alt="OOH Advertising"
            className="w-full h-120 object-cover rounded-3xl transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-700 group-hover:bg-black/45"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl sm:text-5xl font-bold mb-4">
          Maximize your Corporate Events Unforgettable
        </h2>
        

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <img
              src={oohImage}
              alt="Billboard"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-start gap-8">
            <h3 className="text-2xl font-semibold">
              Corporate Event Service
            </h3>

            <ul className="space-y-4 text-gray-800">
              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Conference & Seminar</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Store Launches</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Exhibition</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Team Building Activity</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Store Launch</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Exhibition</span>
              </li>
              
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
         

          <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 sm:p-8 rounded-lg shadow gap-4">
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h2 className="text-gray-700 font-medium text-xl sm:text-2xl">
                Transform your corporate events into dynamic storytelling experiences 
              </h2>
              
            </div>
            <button
              onClick={() => (window.location.href = "/contact-us")}
              className="bg-[#3C3533] text-white px-6 py-3 rounded-md hover:bg-gray-800 transition whitespace-nowrap"
            >
              Contact us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
