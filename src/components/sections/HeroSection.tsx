import React from "react";
import type { HeroSectionProps } from "../../types";
import heroTitleImg from "../../assets/logo2.png";
import heroBgImg from "../../assets/heroBg1.png";
import { FaRegHandshake } from "react-icons/fa";

export const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  return (
    <section
      className="relative overflow-hidden bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBgImg})`,
        minHeight: "600px",
      }}
    >
      {/* Yellow Overlay */}
      {/* <div className="absolute inset-0 bg-[#FFDA00]/90"></div> */}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          {/* Left Side - Handshake Icon + Logo */}
          <div className="w-full lg:w-1/2 flex items-end justify-center lg:justify-end">
            <div className="flex items-center gap-4 sm:gap-0">
              {/* Handshake Icon */}
              <FaRegHandshake
                className="text-[#3d3435] w-42 h-42 sm:w-52 sm:h-52 lg:w-64 lg:h-64"
                // style={{
                //   width: "48px",
                //   height: "64px",
                // }}
              />

              {/* Logo */}
              <img
                src={heroTitleImg}
                alt="WH Logo"
                className="w-64 sm:w-80 lg:w-96 object-contain"
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
            <div className="text-right">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-black leading-relaxed">
                <span className="inline-block animate-slide-in-right">
                  <span className="font-bold">Widest</span> gamut of services
                </span>
                <br />
                <span className="inline-block animate-slide-in-right animation-delay-200">
                  <span className="font-bold">Widest</span> network of india
                </span>
                <br />
                <span className="inline-block animate-slide-in-right animation-delay-400">
                  <span className="font-bold">Widest</span> repertoire of
                  customization
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          opacity: 0;
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          opacity: 0;
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};
