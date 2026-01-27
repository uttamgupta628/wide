import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/herologo.jpeg";
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

    // Sequential reveal animation
    let i = 0;
    const revealInterval = setInterval(() => {
      setVisibleCount(i + 1);
      i++;

      if (i === services.length) {
        clearInterval(revealInterval);

        // Start rotation AFTER all are visible
        setTimeout(() => {
          setIsInitial(false);

          const rotationInterval = setInterval(() => {
            setItems((prev) => {
              const first = prev[0];
              return [...prev.slice(1), first];
            });
          }, 3500);

          return () => clearInterval(rotationInterval);
        }, 800);
      }
    }, 400);

    return () => clearInterval(revealInterval);
  }, []);

  const leftPositions = [200, 160, 120, 80, 40, 10];
  const topPositions = [120, 175, 225, 270, 315, 355];

  return (
    <section className="bg-[#FFDA00] relative overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto h-[700px] px-6">
        {/* LOGO – TOP RIGHT */}
        <div className="absolute top-10 -right-19 z-20 flex flex-col items-end">
          <img
            src={logo}
            alt="Wide Horizons Advertising Private Limited"
            className="w-64"
          />
          <p className="-mt-20 text-xs italic font-bold text-left -translate-x-11">
            advertising private limited
          </p>
        </div>

        {/* GIRL IMAGE – LEFT */}
        <motion.div className="absolute -left-50 bottom-0 w-[340px] h-[540px]">
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
                  left: isVisible ? leftPositions[index] : 120,
                  top: isVisible ? topPositions[index] : 320,
                  opacity: isVisible ? 1 : 0,
                }}
                transition={{
                  duration: 1.6,
                  ease: "easeInOut",
                }}
              >
                {text.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.p>
            );
          })}
        </motion.div>

        {/* RIGHT BOTTOM – WIDEST BLOCK */}
        <div className="absolute bottom-24 -right-19 text-right space-y-2">
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
