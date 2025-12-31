import { useRef } from "react";
import { easeOut, motion, useInView } from "framer-motion";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import { Link } from "react-router-dom";

export const AboutCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const circleVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: easeOut,
      },
    },
  };

  const textVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
        delay: 0.6 + custom * 0.2,
      },
    }),
  };

  const leftImageVariants = {
    hidden: {
      x: -80,
      opacity: 0,
      rotate: -10,
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: easeOut,
        delay: 0.4,
      },
    },
  };

  const rightImageVariants = {
    hidden: {
      x: 80,
      opacity: 0,
      rotate: 10,
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: easeOut,
        delay: 0.6,
      },
    },
  };

  const handleContactClick = () => {
    // Add your navigation logic here
    // Example: window.location.href = '/contact-us';
    console.log("Navigate to contact page");
  };

  return (
    <section
      ref={sectionRef}
      className="bg-linear-to-r from-[#FFEB77] to-[#FFFBE2] px-6 py-10 lg:py-12"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 items-center">
        {/* Left Content */}
        <div className="relative">
          <motion.div
            variants={circleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#FFEB77] rounded-full w-80 h-80 flex flex-col justify-center items-start pl-6"
          >
            <motion.h3
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-3xl font-semibold leading-tight mb-4 whitespace-nowrap"
            >
              Let's Get Your Brand Notice
            </motion.h3>
            <Link to="/contact-us">
              <motion.button
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                onClick={handleContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="underline font-semibold text-[28px] hover:text-gray-800 transition-colors duration-300 cursor-pointer bg-transparent border-none"
              >
                Contact us
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-end items-center pr-6">
          {/* Overlapping Image - Left */}
          <motion.img
            src={about2}
            alt="Brand showcase"
            variants={leftImageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              scale: 1.05,
              rotate: -2,
              zIndex: 20,
              transition: { duration: 0.3 },
            }}
            className="w-72 h-96 object-cover absolute right-48 z-10 shadow-xl cursor-pointer"
          />

          {/* Base Image - Right */}
          <motion.img
            src={about3}
            alt="Brand showcase"
            variants={rightImageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 },
            }}
            className="w-72 h-96 object-cover shadow-xl cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};
