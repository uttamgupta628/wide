import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import heroGirl from "../../assets/herogirl.png";

const WideHorizonsHero: React.FC = () => {
  return (
    <section className="bg-[#FFDA00] relative overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto h-[700px] px-6">
        {/* LOGO – TOP RIGHT */}
        <div className="absolute top-10 right-10 text-right z-20">
          <img
            src={logo}
            alt="Wide Horizons Advertising Private Limited"
            className="w-44 ml-auto"
          />
        </div>

        {/* GIRL IMAGE – LEFT */}
        <motion.div className="absolute left-0 bottom-0 top-20 w-[420px] h-[620px]">
          <img
            src={heroGirl}
            alt="Presenter"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* SERVICES TEXT – CASCADING FROM BOTTOM WITH LETTER-BY-LETTER ANIMATION */}
        <motion.div className="absolute top-8 z-10">
          {[
            "Out-of-Home (OOH) Advertising",
            "Corporate Events",
            "Brand Activations",
            "Celebrity management",
            "Public Relations",
            "Branding",
          ].map((text, index) => {
            const reverseIndex = 5 - index; // For applying correct styles
            const appearDelay = index * 0.5;
            const leftPositions = [480, 440, 400, 360, 320, 280]; // Right to left
            const topPositions = [20, 65, 100, 130, 160, 180]; // Top to bottom in final position
            const finalLeft = leftPositions[index];
            const finalTop = topPositions[index];
            const startingLeft = 280; // All start from Branding's left position
            const startingTop = 180; // All start from Branding's top position

            return (
              <motion.p
                key={index}
                className={`text-[#3d3533] mt-1 absolute whitespace-nowrap ${
                  reverseIndex === 0
                    ? "text-[12px] font-medium leading-tight"
                    : reverseIndex === 1
                      ? "text-sm font-medium"
                      : reverseIndex === 2
                        ? "text-base font-medium"
                        : reverseIndex === 3
                          ? "text-lg font-semibold"
                          : reverseIndex === 4
                            ? "text-xl font-semibold"
                            : "text-3xl font-bold"
                }`}
                initial={{ left: startingLeft, top: startingTop }}
                animate={{ left: finalLeft, top: finalTop }}
                transition={{
                  left: {
                    delay: appearDelay + 0.2,
                    duration: 2,
                    ease: "easeOut",
                  },
                  top: {
                    delay: appearDelay + 0.2,
                    duration: 2,
                    ease: "easeOut",
                  },
                }}
              >
                {text.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: appearDelay + letterIndex * 0.03,
                      duration: 0.1,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.p>
            );
          })}
        </motion.div>

        {/* RIGHT BOTTOM – WIDEST BLOCK */}
        <div className="absolute bottom-24 right-16 text-right space-y-2">
          {[
            "NETWORK OF MEDIA.",
            "GAMUT OF SERVICES.",
            "REPERTOIRE OF CUSTOMIZATION.",
          ].map((text, i) => (
            <motion.div
              key={i}
              className="flex justify-end items-end gap-2"
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 + i * 0.25 }}
            >
              <span className="text-5xl italic font-semibold">Widest</span>
              <span className="text-sm tracking-wide uppercase font-medium mb-1">
                {text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WideHorizonsHero;
