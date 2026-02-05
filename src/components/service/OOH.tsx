import React from "react";
import oohImage from "../../assets/ooh3.png";
import billboardImage from "../../assets/ooh2.png";
import Breadcrumb from "../Global/Breadcrumb";
import OOHMain from "./OOHMain";

export const OOHAdvertising: React.FC = () => {
  return (
    <div className="bg-[#F8F6F5]">
      {/* Breadcrumb */}
      {/* <div className="bg-[#3C3533] text-white text-sm px-6 py-2">
        Home &gt; Services &gt; OOH
      </div> */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "OOH" },
        ]}
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">OOH Advertising</h1>
        <p className="text-gray-700 mb-6">
          High impact outdoor advertising to capture and engage audiences
          effectively
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
          Maximize your brand visibility with OOH Advertising
        </h2>
        {/* <p className="text-gray-700 mb-8 sm:text-2xl ">
          OOH Advertising is one of the most powerful ways to reach a broad and
          captive audience
        </p> */}

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-full">
            <img
              src={oohImage}
              alt="Billboard"
              className="rounded-lg w-full h-auto"
            />
          </div>
          {/* <div className="lg:w-1/2 flex flex-col justify-start gap-8">
            <h3 className="text-2xl font-semibold">Billboard</h3>

            <ul className="space-y-4 text-gray-800">
              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Digital Displays</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Transit Advertising</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Street Furniture</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Bus & Taxi Wraps</span>
              </li>
            </ul>
          </div> */}
        </div>
        <OOHMain />
      </section>

      {/* Why Choose Section */}
    </div>
  );
};
