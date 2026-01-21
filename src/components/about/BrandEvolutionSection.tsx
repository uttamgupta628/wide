import { useRef } from "react";
import { easeOut, motion, useInView } from "framer-motion";

const BrandEvolutionSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const lineVariants = {
    hidden: {
      scaleY: 0,
      opacity: 0,
    },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: easeOut,
      },
    },
  };

  const headingVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
        delay: 0.2,
      },
    },
  };

  const paragraphVariants = {
    hidden: {
      x: -30,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
        delay: 0.4 + custom * 0.15,
      },
    }),
  };

  const boxVariants = {
    hidden: {
      y: 30,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
        delay: 0.9,
      },
    },
  };

  return (
    <section className="bg-white">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-10 items-stretch">
          {/* Yellow Accent Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ originY: 0 }}
            className="w-[6px] rounded-full self-stretch bg-[linear-gradient(180deg,#FFDA00_0%,#998300_100%)]"
          />

          {/* Content */}
          <div className="flex-1">
            <motion.h2
              variants={headingVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-5xl font-semibold text-black mb-6 uppercase"
            >
              Our <span className="text-[#FFCD29]">Brand</span> Evolution
            </motion.h2>

            <motion.p
              custom={0}
              variants={paragraphVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-[17px] leading-relaxed text-[#686775] mb-4"
            >
              <span className="font-semibold text-black">
                Brandwave Media Solutions
              </span>{" "}
              was where our journey began—focused on delivering impactful
              digital solutions and helping brands establish a strong online
              presence.
            </motion.p>

            <motion.p
              custom={1}
              variants={paragraphVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-[17px] leading-relaxed text-[#686775] mb-4"
            >
              As our vision expanded, we evolved into{" "}
              <span className="font-semibold text-black">
                Wide Horizons Advertising Private Limited
              </span>
              —a name that represents broader thinking, deeper innovation, and a
              future-ready approach to building meaningful digital experiences.
            </motion.p>

            <motion.p
              custom={2}
              variants={paragraphVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-[17px] leading-relaxed text-[#686775]"
            >
              While our name has changed, our commitment to quality,
              transparency, and results-driven execution remains unchanged.
            </motion.p>

            {/* Highlight Box */}
            <motion.div
              variants={boxVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-10 bg-[#FFCD29] rounded-2xl px-8 py-6 flex flex-wrap gap-10"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-black/70">
                  Previously
                </span>
                <p className="mt-2 text-lg font-semibold text-black">
                  Brandwave Media Solutions
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-black/70">
                  Now
                </span>
                <p className="mt-2 text-lg font-semibold text-black">
                  Wide Horizons Advertising Private Limited
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandEvolutionSection;
