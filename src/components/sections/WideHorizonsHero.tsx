import React from "react";
import images from "../../assets/images";
import logo from "../../assets/logoTp.png";

const WideHorizonsHero: React.FC = () => {
  return (
    <section className="bg-[#FFDA00]">
      <div
        className="relative overflow-hidden w-full max-w-7xl mx-auto px-6"
        style={{ backgroundColor: "#FFDA00", minHeight: "600px" }}
      >
        {/* Decorative Image - Top Right */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96">
          <img
            src={images.decorative}
            alt="Decorative element top right"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Logo - Top Right */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12 z-10">
          <img
            src={logo}
            alt="Wide Horizons Advertising Private Limited"
            className="w-48 md:w-64 h-auto"
          />
        </div>

        {/* Hand Image - Left Side */}
        <div className="absolute left-0 bottom-0 w-64 h-96 md:w-80 md:h-[500px] lg:w-96 lg:h-[600px]">
          <img
            src={images.handClock}
            alt="Hand holding WM logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Main Content - Center Right */}
        <div
          className="relative z-10 flex items-center justify-center max-w-4xl mx-auto"
          style={{ minHeight: "600px" }}
        >
          <div className="md:ml-10 lg:ml-20 space-y-6 md:space-y-8">
            {/* First Line */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-light">
              <h1 className="font-normal italic">
                Widest{" "}
                <span className="font-bold tracking-wide">
                  NETWORK OF MEDIA.
                </span>
              </h1>
            </div>

            {/* Second Line */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-light">
              <h1 className="font-normal italic">
                Widest{" "}
                <span className="font-bold tracking-wide">
                  GAMUT OF SERVICES.
                </span>
              </h1>
            </div>

            {/* Third Line */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-light">
              <h1 className="font-normal italic">
                Widest{" "}
                <span className="font-bold tracking-wide">
                  REPERTOIRE OF CUSTOMIZATION.
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WideHorizonsHero;
