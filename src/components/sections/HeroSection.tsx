import React from "react";
import { ArrowRight } from "lucide-react";
import type { HeroSectionProps } from "../../types";
import heroTitleImg from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const HeroSection: React.FC<HeroSectionProps> = ({ }) => {
  return (
    <section
      className="  relative overflow-hidden"
      style={{ backgroundColor: "#FFDA00" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-12">
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
      </div>
    </section>
  );
};