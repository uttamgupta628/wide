import React from "react";
import type { HeroSectionProps } from "../../types";
import heroTitleImg from "../../assets/logo2.png";

export const HeroSection: React.FC<HeroSectionProps> = ({ heroImg }) => {
  return (
    <section
      className=" relative overflow-hidden"
      style={{ backgroundColor: "#FFDA00" }}
    >
      <div className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-12 mt-6 sm:mt-10">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12 ">
          <div className="w-full lg:w-1/2 h-[250px] sm:h-[350px] flex flex-col justify-center items-start">
            <img
              src={heroTitleImg}
              alt="Right Budget for Right Execution"
              className="mb-6 w-full max-w-xl sm:max-w-2xl"
            />
           
          </div>

          {/* Right side text with slide animation */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end min-h-[200px] overflow-hidden">
            <div className="relative">
              <p className="text-lg sm:text-xl lg:text-2xl font-medium text-black max-w-md text-right leading-relaxed">
                <span className="inline-block animate-slide-in-right">
                  <span className="font-bold">Widest</span> network of media
                </span>
                <br />
                <span className="inline-block animate-slide-in-right animation-delay-200">
                  <span className="font-bold">Widest</span> repertoire of customization
                </span>
                <br />
                <span className="inline-block animate-slide-in-right animation-delay-400">
                  <span className="font-bold">Widest</span> repertoire of customization
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative w-full overflow-hidden ">
      
        <img
          src={heroImg}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#FFDA00]"></div>

        <div className="relative h-full flex items-center justify-center px-6 sm:px-12">
         
          <span className="absolute left-6 top-6 text-6xl sm:text-8xl font-serif text-[#8C7700]">
            "
          </span>

          <p className="max-w-3xl text-sm sm:text-base leading-relaxed font-medium text-black text-center">
            Help our Clients to reach their business goals through our services
            in OOH communications, education, measurement, rewards and events to
            inspire their employee, channel partners and customers.
          </p>

          <span className="absolute right-6 bottom-6 text-6xl sm:text-8xl font-serif text-[#8C7700]">
            "
          </span>
        </div>
      </div> */}

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