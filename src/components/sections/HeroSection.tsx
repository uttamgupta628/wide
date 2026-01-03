import React from "react";
import Lottie from "lottie-react";
import type { HeroSectionProps } from "../../types";
import heroTitleImg from "../../assets/logoWide.svg";
import businessHandshake from "../../assets/Business Handshake.json";

export const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  return (
    <section
      className="relative overflow-hidden bg-[#FFDA00]"
      // style={{
      //   minHeight: "600px",
      // }}
    >
      {/* Lottie Animation Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Lottie
          animationData={businessHandshake}
          loop={true}
          className="w-full h-auto max-w-full"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          {/* Left Side - Logo */}
          <div className="w-full lg:w-1/2 flex items-center justify-start">
            <img
              src={heroTitleImg}
              alt="WH Logo"
              className="w-64 sm:w-80 lg:w-96 object-contain"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
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
