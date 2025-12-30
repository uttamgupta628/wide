import { motion } from "framer-motion";
import { easeOut } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const BrandEvolutionSection: React.FC = () => {
  return (
    <section className="bg-white">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="flex gap-10 items-stretch">
          {/* ✅ FIXED Yellow Accent Line */}
          <div className="w-[6px] rounded-full self-stretch bg-[linear-gradient(180deg,#FFDA00_0%,#998300_100%)]" />

          {/* Content */}
          <motion.div className="flex-1" variants={containerVariants}>
            <motion.h2
              className="text-5xl font-semibold text-black mb-6 uppercase"
              variants={itemVariants}
            >
              Our <span className="text-[#FFCD29]">Brand</span> Evolution
            </motion.h2>

            <motion.p
              className="text-[17px] leading-relaxed text-[#686775] mb-4"
              variants={itemVariants}
            >
              <span className="font-semibold text-black">
                Brand Wave Media Solutions
              </span>{" "}
              was where our journey began—focused on delivering impactful
              digital solutions and helping brands establish a strong online
              presence.
            </motion.p>

            <motion.p
              className="text-[17px] leading-relaxed text-[#686775] mb-4"
              variants={itemVariants}
            >
              As our vision expanded, we evolved into{" "}
              <span className="font-semibold text-black">Wide Horizons</span>
              —a name that represents broader thinking, deeper innovation, and a
              future-ready approach to building meaningful digital experiences.
            </motion.p>

            <motion.p
              className="text-[17px] leading-relaxed text-[#686775]"
              variants={itemVariants}
            >
              While our name has changed, our commitment to quality,
              transparency, and results-driven execution remains unchanged.
            </motion.p>

            {/* Highlight Box */}
            <motion.div
              className="mt-10 bg-[#FFCD29] rounded-2xl px-8 py-6 flex flex-wrap gap-10"
              variants={itemVariants}
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-black/70">
                  Previously
                </span>
                <p className="mt-2 text-lg font-semibold text-black">
                  Brand Wave Media Solutions
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-black/70">
                  Now
                </span>
                <p className="mt-2 text-lg font-semibold text-black">
                  Wide Horizons
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrandEvolutionSection;
