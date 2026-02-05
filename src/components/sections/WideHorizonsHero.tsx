import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import heroGirl from "../../assets/herogirl.png";

const WideHorizonsHero: React.FC = () => {
  const services = [
    "Out-of-Home (OOH) Advertising",
    "Corporate Events",
    "Brand Activations",
    "Celebrity management",
    "Public Relations",
    "Branding",
  ];

  const [items, setItems] = React.useState(services);
  const [visibleCount, setVisibleCount] = React.useState(0);
  const [isInitial, setIsInitial] = React.useState(true);
  const [widestAnimKey, setWidestAnimKey] = React.useState(0);

  React.useEffect(() => {
    if (!isInitial) return;

    // Wait for image to slide in first (1.2s duration)
    setTimeout(() => {
      // Make all items visible at once - stagger is handled by animation delays
      setVisibleCount(services.length);

      // Start rotation AFTER all animations complete
      setTimeout(() => {
        setIsInitial(false);

        const rotationInterval = setInterval(() => {
          setItems((prev) => {
            const first = prev[0];
            return [...prev.slice(1), first];
          });
        }, 2500); // Decreased from 3500 to 2500 to match faster animations

        return () => clearInterval(rotationInterval);
      }, 2500);
    }, 1200);
  }, []);

  // Loop widest animation every 5 seconds
  React.useEffect(() => {
    const loopInterval = setInterval(() => {
      setWidestAnimKey((prev) => prev + 1);
    }, 10000);

    return () => clearInterval(loopInterval);
  }, []);

  const leftPositions = [10, 10, 10, 10, 10, 10];
  const topPositions = [80, 155, 215, 270, 315, 355];

  return (
    <section className="bg-[#FFDA00] relative overflow-hidden">
      <div className="bg-black w-full h-[1px]"></div>

      {/* Desktop Version */}
      <div className="hidden lg:block relative w-full max-w-7xl mx-auto h-[700px] px-6">
        {/* LOGO – TOP RIGHT */}
        <div className="absolute top-10 -right-0 z-20 flex flex-col items-end">
          <img
            src={logo}
            alt="Wide Horizons Advertising Private Limited"
            className="w-80"
          />
        </div>

        {/* GIRL IMAGE – LEFT */}
        <motion.div
          className="absolute -left-50 bottom-0 w-[340px] h-[540px]"
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={heroGirl}
            alt="Presenter"
            className="w-full h-full object-contain object-bottom"
          />
        </motion.div>

        {/* SERVICES TEXT – CASCADING FROM BOTTOM WITH LETTER-BY-LETTER ANIMATION */}
        <motion.div className="absolute top-8 z-10">
          {items.map((text, index) => {
            const reverseIndex = items.length - 1 - index;

            // Find the original index of this text in the services array
            const originalIndex = services.indexOf(text);

            // Check if this item should be visible based on the sequential reveal
            const isVisible = isInitial ? originalIndex < visibleCount : true;

            // DECREASED DELAY: Changed from 0.5 to 0.3 for faster sequence
            const animationDelay =
              isInitial && isVisible ? originalIndex * 0.3 : 0;

            return (
              <motion.p
                key={text}
                className={`text-[#3d3533] absolute whitespace-nowrap ${
                  reverseIndex === 0
                    ? "text-sm font-medium leading-tight"
                    : reverseIndex === 1
                      ? "text-lg font-medium"
                      : reverseIndex === 2
                        ? "text-xl font-medium"
                        : reverseIndex === 3
                          ? "text-2xl font-semibold"
                          : reverseIndex === 4
                            ? "text-3xl font-semibold"
                            : "text-5xl font-bold"
                }`}
                initial={false}
                animate={{
                  left: isVisible ? leftPositions[index] : 10,
                  top: isVisible ? topPositions[index] : 355,
                  opacity: isVisible ? 1 : 0,
                }}
                transition={{
                  duration: 0.5, // Decreased from 0.8 to 0.5 for faster slide
                  ease: "easeInOut",
                  delay: animationDelay,
                }}
              >
                {text.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{
                      delay: animationDelay + i * 0.015, // Decreased from 0.03 to 0.015 for faster letters
                      duration: 0.15, // Decreased duration for quicker fade-in
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.p>
            );
          })}
        </motion.div>

        {/* RIGHT BOTTOM – WIDEST BLOCK (NOW CENTERED) */}
        <div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center space-y-2 font-bell-mt"
          key={widestAnimKey}
        >
          {[
            "GAMUT OF SERVICES.",
            "NETWORK OF MEDIA.",
            "REPERTOIRE OF CUSTOMIZATION.",
          ].map((text, i) => {
            // Calculate delays so each line completes before next starts
            // Line duration: 0.9s slide + (text.length * 0.05s) for letters
            const textDuration = text.length * 0.05; // Time for all letters to appear
            const lineDuration = 0.9 + textDuration; // Total time for one complete line

            const slideDelay = i * lineDuration; // Each line starts after previous completes
            const letterStartDelay = slideDelay + 0.9; // Letters start after slide completes

            return (
              <motion.div
                key={i}
                className="flex justify-center items-end gap-2"
              >
                <motion.span
                  className="text-3xl italic font-semibold uppercase"
                  initial={{ x: 150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: slideDelay }}
                >
                  Widest
                </motion.span>
                <span className="text-base tracking-wide uppercase font-medium mb-1.5">
                  {text.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: letterStartDelay + letterIndex * 0.05,
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile/Tablet Version */}
      <div className="lg:hidden relative w-full px-4 py-12">
        {/* Logo - Top Center */}
        <div className="flex justify-center mb-12">
          <img
            src={logo}
            alt="Wide Horizons Advertising Private Limited"
            className="w-56 sm:w-72"
          />
        </div>

        {/* Services List - Centered with Visual Hierarchy */}
        <div className="space-y-3 mb-12 text-center">
          {services.map((text, index) => {
            const reverseIndex = services.length - 1 - index;

            return (
              <div
                key={text}
                className={`text-[#3d3533] transition-all duration-300 ${
                  reverseIndex === 0
                    ? "text-sm font-medium opacity-70"
                    : reverseIndex === 1
                      ? "text-base font-medium opacity-75"
                      : reverseIndex === 2
                        ? "text-lg font-semibold opacity-80"
                        : reverseIndex === 3
                          ? "text-xl font-semibold opacity-85"
                          : reverseIndex === 4
                            ? "text-2xl font-bold opacity-90"
                            : "text-3xl sm:text-4xl font-bold"
                }`}
              >
                {text}
              </div>
            );
          })}
        </div>

        {/* Decorative Divider */}
        <div className="flex justify-center mb-10">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3d3533] to-transparent rounded-full"></div>
        </div>

        {/* Widest Block - Styled Cards */}
        <div className="space-y-4 font-bell-mt">
          {[
            "GAMUT OF SERVICES.",
            "NETWORK OF MEDIA.",
            "REPERTOIRE OF CUSTOMIZATION.",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-[#3d3533]/10 hover:border-[#3d3533]/30 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-xl sm:text-2xl italic font-bold text-[#3d3533] ">
                  Widest
                </span>
                <span className="text-xs sm:text-sm tracking-widest uppercase font-semibold text-[#3d3533]/80">
                  {text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="flex justify-center mt-10">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#3d3533]"></div>
            <div className="w-2 h-2 rounded-full bg-[#3d3533]/60"></div>
            <div className="w-2 h-2 rounded-full bg-[#3d3533]/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WideHorizonsHero;
