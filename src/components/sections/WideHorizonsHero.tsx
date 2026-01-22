import React from "react";
import { motion } from "framer-motion";
import heroGirl from "../../assets/herogirl.png";
import logo from "../../assets/logoTp.png";

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
          <p className="text-sm font-semibold text-[#3d3533] mt-1">
            Advertising Private Limited
          </p>
        </div>

        {/* GIRL IMAGE – LEFT */}
        <motion.div className="absolute left-0 bottom-0 w-[420px] h-[620px]">
          <img
            src={heroGirl}
            alt="Presenter"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* SERVICES TEXT – TRUE STEP BY STEP BUILD */}
        <motion.div className="absolute left-75 top-15 z-10 text-left">
          {[
            "Out-of-Home (OOH) Advertising",
            "Corporate Events",
            "Brand Activations",
            "Celebrity management",
            "Public Relations",
            "Branding",
          ].map((text, index) => {
            const step = 28;
            const appearDelay = index * 0.8;

            return (
              <motion.p
                key={index}
                className={`text-[#3d3533] mt-1 ${
                  index === 0
                    ? "text-3xl font-bold left-300"
                    : index === 1
                      ? "text-xl font-semibold right-80"
                      : index === 2
                        ? "text-lg font-semibold"
                        : index === 3
                          ? "text-base font-medium"
                          : index === 4
                            ? "text-sm font-medium"
                            : "text-[12px] font-medium leading-tight"
                }`}
                initial={{ opacity: 0, y: step * (5 - index), x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  opacity: { delay: appearDelay, duration: 0.3 },
                  y: {
                    delay: appearDelay + 0.4,
                    duration: 0.6,
                    ease: "easeOut",
                  },
                  x: { delay: appearDelay, duration: 0.4 },
                }}
              >
                {text}
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
