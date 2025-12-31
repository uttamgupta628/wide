import React from "react";
import { ArrowRight } from "lucide-react";
import type { HeroSectionProps } from "../../types";
import heroTitleImg from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const HeroSection: React.FC<HeroSectionProps> = ({ heroImg }) => {
  return (
    <section
      className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{ backgroundColor: "#FFDA00" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <img
              src={heroTitleImg}
              alt="Right Budget for Right Execution"
              className="mb-8 w-full max-w-xl sm:max-w-2xl"
            />

            <Link to="/contact-us">
              <button className="border border-black text-black px-6 py-3 rounded font-medium flex items-center gap-2 hover:bg-black hover:text-[#FFDA00] transition">
                Contact us <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative bg-gray-800 text-white px-8 py-12 rounded-lg shadow-2xl z-30 w-[90%] ml-auto">
              <span className="absolute top-3 left-3 w-2 h-2 bg-white rounded-full"></span>
              <p className="text-base">widest network of media</p>
            </div>

            <div
              className="relative px-8 py-10 rounded-lg shadow-xl z-20 w-[95%] -mt-4 ml-8"
              style={{ backgroundColor: "#FFDA00" }}
            >
              <span className="absolute top-3 left-3 w-2 h-2 bg-black rounded-full"></span>
              <p className="text-base text-black">
                widest repertoire of customization
              </p>
            </div>

            <div
              className="relative px-8 py-10 rounded-lg shadow-lg z-10 w-full -mt-4 ml-4"
              style={{ backgroundColor: "#FFF4CC" }}
            >
              <span className="absolute top-3 left-3 w-2 h-2 bg-black rounded-full"></span>
              <p className="text-base text-black">
                widest repertoire of customization
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full mt-16 sm:mt-24 overflow-hidden min-h-70 sm:min-h-85">
          {/* Background Image */}
          <img
            src={heroImg}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Yellow Overlay */}
          <div className="absolute inset-0 bg-[#FFDA00]/15"></div>

          {/* Content */}
          <div className="relative max-w-5xl mx-auto px-6 sm:px-12 py-12 sm:py-16">
            {/* Opening Quote */}
            <span className="absolute left-6 top-6 text-6xl sm:text-8xl font-serif text-[#8C7700]">
              “
            </span>

            {/* Text */}
            <p className="max-w-3xl ml-10 text-sm sm:text-base leading-relaxed font-medium text-black">
              Help our Clients to reach their business goals through our
              services in OOH communications, education, measurement, rewards
              and events to inspire their employee, channel partners and
              customers.
            </p>

            {/* Closing Quote */}
            <span className="absolute right-6 bottom-6 text-6xl sm:text-8xl font-serif text-[#8C7700]">
              ”
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
