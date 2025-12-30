import { useRef } from "react";
import { easeOut, motion, useInView } from "framer-motion";
import topwave from "../../assets/top-wave.svg";
import bottomwave from "../../assets/bottom-wave.svg";

const EmpoweringSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const topImageVariants = {
    hidden: {
      x: 100,
      y: -50,
      opacity: 0,
      rotate: 10,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: easeOut,
      },
    },
  };

  const bottomImageVariants = {
    hidden: {
      x: -100,
      y: 50,
      opacity: 0,
      rotate: -10,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: easeOut,
      },
    },
  };

  const headingVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: easeOut,
        delay: 0.3,
      },
    },
  };

  const paragraphVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: easeOut,
        delay: 0.6,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F8F3F3] py-28 overflow-hidden"
    >
      {/* TOP RIGHT IMAGE */}
      <motion.img
        src={topwave}
        alt="Top Decoration"
        variants={topImageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute top-0 right-0 w-[320px] md:w-[500px]"
      />

      {/* BOTTOM LEFT IMAGE */}
      <motion.img
        src={bottomwave}
        alt="Bottom Decoration"
        variants={bottomImageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute bottom-0 left-0 w-[320px] md:w-[500px]"
      />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-clip-text text-transparent text-[42px] font-medium"
          style={{
            backgroundImage: "linear-gradient(90deg, #FFDA00 0%, #998300 100%)",
          }}
        >
          Empowering Your brand for Unmatched Growth
        </motion.h2>

        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-black text-2xl leading-relaxed"
        >
          Our mission is to empower businesses by expanding their reach and
          enhancing their market presence. We achieve this through innovative
          advertising that connects with your audience and elevates your brand
          above the competition.
        </motion.p>
      </div>
    </section>
  );
};

export default EmpoweringSection;
