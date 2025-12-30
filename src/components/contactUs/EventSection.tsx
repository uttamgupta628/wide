import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import contact1 from "../../assets/image 53.png";

const EventSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div className="bg-[#FFDA00AB] flex items-center justify-center py-12 px-6">
      <div
        ref={ref}
        className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12"
      >
        {/* Image Section - Animate from Left */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={contact1}
              alt="Royal Enfield Riders Event"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content Section - Animate from Right */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-semibold text-black leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: 0.5,
            }}
          >
            The ultimate platform for planning and promoting successful events
          </motion.h1>

          <motion.p
            className="text-black text-lg leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: 0.7,
            }}
          >
            The ultimate platform for planning and promoting successful events,
            bringing tools, insights, and audiences together to simplify
            coordination, boost visibility, drive engagement, and deliver
            memorable experiences every time, globally effortlessly.
          </motion.p>

          <motion.button
            className="cursor-pointer bg-black text-[#FFCD29] px-8 py-2 rounded-xl text-base font-medium hover:bg-[#FFCD29] hover:text-black transition-colors duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: 0.9,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default EventSection;
