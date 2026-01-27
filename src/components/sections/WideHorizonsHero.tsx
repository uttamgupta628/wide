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

  React.useEffect(() => {
    if (!isInitial) return;

    // Wait for image to slide in first (1.2s duration)
    setTimeout(() => {
      // Make all items visible at once - stagger is handled by animation delays
      setVisibleCount(services.length);

      // Start rotation AFTER all animations complete (last item starts at 2.5s + 0.8s duration)
      setTimeout(() => {
        setIsInitial(false);

        const rotationInterval = setInterval(() => {
          setItems((prev) => {
            const first = prev[0];
            return [...prev.slice(1), first];
          });
        }, 3500);

        return () => clearInterval(rotationInterval);
      }, 3500); // Wait for all animations to complete
    }, 1200); // Delay matches image animation duration
  }, []);

  const leftPositions = [10, 10, 10, 10, 10, 10];
  const topPositions = [120, 175, 225, 270, 315, 355];

  return (
    <section className="bg-[#FFDA00] relative overflow-hidden">
      <div className="bg-black w-full h-[1px]"></div>
      <div className="relative w-full max-w-7xl mx-auto h-[700px] px-6">
        {/* LOGO – TOP RIGHT */}
        <div className="absolute top-40 -right-0 z-20 flex flex-col items-end">
          <img
            src={logo}
            alt="Wide Horizons Advertising Private Limited"
            className="w-54"
          />
          {/* <p className="-mt-20 text-xs italic font-bold text-left -translate-x-11">
            Advertising Private Limited
          </p> */}
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
            const isVisible = isInitial ? originalIndex < visibleCount : true; // All visible after initial animation

            // Calculate delay for staggered animation
            const animationDelay = isInitial && isVisible ? originalIndex * 0.5 : 0;

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
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: animationDelay,
                }}
              >
                {text.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ delay: animationDelay + i * 0.03 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.p>
            );
          })}
        </motion.div>

        {/* RIGHT BOTTOM – WIDEST BLOCK */}
        <div className="absolute bottom-24 -right-0 text-right space-y-2">
          {[
            "NETWORK OF MEDIA.",
            "GAMUT OF SERVICES.",
            "REPERTOIRE OF CUSTOMIZATION.",
          ].map((text, i) => {
            // Calculate delays so each line completes before next starts
            // Line duration: 0.9s slide + (text.length * 0.05s) for letters
            const textDuration = text.length * 0.05; // Time for all letters to appear
            const lineDuration = 0.9 + textDuration; // Total time for one complete line
            
            const slideDelay = 0.4 + i * lineDuration; // Each line starts after previous completes
            const letterStartDelay = slideDelay + 0.9; // Letters start after slide completes
            
            return (
              <motion.div
                key={i}
                className="flex justify-end items-end gap-2"
              >
                <motion.span 
                  className="text-2xl italic font-semibold"
                  initial={{ x: 150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: slideDelay }}
                >
                  Widest
                </motion.span>
                <span className="text-sm tracking-wide uppercase font-3xl mb-1.5">
                  {text.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: letterStartDelay + letterIndex * 0.05 }}
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
    </section>
  );
};

export default WideHorizonsHero;