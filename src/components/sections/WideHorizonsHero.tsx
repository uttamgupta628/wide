import React from "react";
import { motion } from "framer-motion";
import images from "../../assets/images";
import logo from "../../assets/logoTp.png";

const WideHorizonsHero: React.FC = () => {
  return (
    <section className="bg-[#FFDA00]">
      {/* Desktop Version - hidden on mobile/tablet */}
      <div
        className="hidden lg:block relative w-full max-w-7xl mx-auto px-6"
        style={{ backgroundColor: "#FFDA00", minHeight: "500px" }}
      >
        {/* Decorative Image - Top Right - Appears from top */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 pointer-events-none"
          style={{ zIndex: 1 }}
          initial={{ y: -400, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={images.decorative}
            alt="Decorative element top right"
            className="w-full h-full object-contain"
            loading="eager"
            style={{ display: "block" }}
          />
        </motion.div>

        {/* Logo and Text Container - Top Right */}
        <div className="absolute top-8 right-0 md:top-12 pr-6 md:pr-12 z-20 text-right">
          {/* Logo - Appears from right */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          >
            <img
              src={logo}
              alt="Wide Horizons Advertising Private Limited"
              className="w-36 md:w-40 h-auto mb-2 ml-auto"
              loading="eager"
            />
          </motion.div>

          {/* Text below logo - Appears from right */}
          <motion.div
            className="w-48 md:w-64 ml-auto"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          >
            <p className="text-sm md:text-lg font-semibold text-[#3d3533] leading-tight">
              Advertising Private Limited
            </p>
          </motion.div>
        </div>

        {/* Hand Image - Left Side - Appears from bottom */}
        <motion.div
          className="absolute left-0 bottom-0 w-64 h-96 md:w-80 md:h-[500px] lg:w-96 lg:h-[600px] z-0"
          initial={{ y: 400, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src={images.handClock}
            alt="Hand holding WM logo"
            className="w-full h-full object-contain"
            loading="eager"
          />
        </motion.div>

        {/* Main Content - Bottom Right Aligned */}
        <div className="absolute bottom-12 right-8 md:right-12 z-10 text-right space-y-4 md:space-y-6">
          {/* First Line - Appears from right */}
          <motion.div
            className="font-semibold text-4xl font-courgette"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1.1 }}
          >
            Widest{" "}
            <span className="text-lg tracking-wide font-montserrat">
              NETWORK OF MEDIA.
            </span>
          </motion.div>

          {/* Second Line - Appears from right after first */}
          <motion.div
            className="font-semibold text-4xl font-courgette"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1.5 }}
          >
            Widest{" "}
            <span className="text-lg tracking-wide font-montserrat">
              GAMUT OF SERVICES.
            </span>
          </motion.div>

          {/* Third Line - Appears from right after second */}
          <motion.div
            className="font-semibold text-4xl font-courgette"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1.9 }}
          >
            Widest{" "}
            <span className="text-lg tracking-wide font-montserrat">
              REPERTOIRE OF CUSTOMIZATION.
            </span>
          </motion.div>
        </div>
      </div>

      {/* Mobile & Tablet Version - visible only on smaller screens */}
      <div
        className="lg:hidden relative w-full mx-auto px-4 py-8"
        style={{ backgroundColor: "#FFDA00", minHeight: "400px" }}
      >
        {/* Decorative Image - Top Right - Smaller on mobile */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 pointer-events-none"
          style={{ zIndex: 1 }}
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={images.decorative}
            alt="Decorative element top right"
            className="w-full h-full object-contain"
            loading="eager"
            style={{ display: "block" }}
          />
        </motion.div>

        {/* Logo and Text Container - Top Right on mobile */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 text-right">
          {/* Logo - Appears from right */}
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          >
            <img
              src={logo}
              alt="Wide Horizons Advertising Private Limited"
              className="w-28 sm:w-32 md:w-36 h-auto mb-1 ml-auto"
              loading="eager"
            />
          </motion.div>

          {/* Text below logo - Appears from right */}
          <motion.div
            className="ml-auto"
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          >
            <p className="text-xs sm:text-sm md:text-base font-semibold text-[#3d3533] leading-tight">
              Advertising Private Limited
            </p>
          </motion.div>
        </div>

        {/* Hand Image - Bottom Left - Smaller on mobile */}
        <motion.div
          className="absolute left-0 bottom-0 w-64 h-120 sm:w-48 sm:h-72 md:w-64 md:h-96 z-0"
          initial={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src={images.handClock}
            alt="Hand holding WM logo"
            className="w-full h-full object-contain"
            loading="eager"
          />
        </motion.div>

        {/* Main Content - Center Aligned on mobile, stacked vertically */}
        <div className="relative z-10 text-right space-y-3 sm:space-y-4 md:space-y-5 pt-24 sm:pt-20 md:pt-24 px-2">
          {/* First Line - Appears from bottom */}
          <motion.div
            className="font-semibold text-2xl sm:text-3xl md:text-3xl"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1.1 }}
          >
            <div className="font-courgette">Widest</div>
            <div className="text-sm sm:text-base md:text-lg tracking-wide font-montserrat font-semibold mt-1">
              NETWORK OF MEDIA.
            </div>
          </motion.div>

          {/* Second Line - Appears from bottom after first */}
          <motion.div
            className="font-semibold text-2xl sm:text-3xl md:text-3xl"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1.5 }}
          >
            <div className="font-courgette">Widest</div>
            <div className="text-sm sm:text-base md:text-lg tracking-wide font-montserrat font-semibold mt-1">
              GAMUT OF SERVICES.
            </div>
          </motion.div>

          {/* Third Line - Appears from bottom after second */}
          <motion.div
            className="font-semibold text-2xl sm:text-3xl md:text-3xl"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1.9 }}
          >
            <div className="font-courgette">Widest</div>
            <div className="text-sm sm:text-base md:text-lg tracking-wide font-montserrat font-semibold mt-1">
              REPERTOIRE OF CUSTOMIZATION.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WideHorizonsHero;
