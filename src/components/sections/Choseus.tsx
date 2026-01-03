import { Award, Network, Settings, ThumbsUp } from "lucide-react";
import { motion, useInView, easeOut } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    icon: <Award className="w-10 h-10 text-[#FFDA00]" />,
    title: "Proven Expertise",
    desc: "Demonstrated experience delivering consistently successful events with precision and professionalism",
  },
  {
    icon: <Network className="w-10 h-10 text-[#FFDA00]" />,
    title: "Broad Network",
    desc: "Extensive nationwide connections enabling seamless coordination, reach, and impactful event execution",
  },
  {
    icon: <Settings className="w-10 h-10 text-[#FFDA00]" />,
    title: "Custom Solutions",
    desc: "Tailored event solutions designed to meet unique brand and client needs",
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-[#FFDA00]" />,
    title: "Client Satisfaction",
    desc: "Delivering exceptional experiences that exceed expectations and ensure complete client satisfaction",
  },
];

const Choseus = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

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
        delay: 0.2,
      },
    },
  };

  const subheadingVariants = {
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
        delay: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: easeOut,
        delay: 0.6 + index * 0.2,
      },
    }),
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    visible: (index: number) => ({
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: easeOut,
        delay: 0.8 + index * 0.2,
      },
    }),
  };

  return (
    <div ref={sectionRef}>
      <section className="bg-[#F6F2EF] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl font-bold text-center mb-2"
          >
            Why Choose Us
          </motion.h2>

          <motion.p
            variants={subheadingVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center text-gray-600 mb-16"
          >
            Delivering Success for our Clients
          </motion.p>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="text-center px-6 relative"
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {/* Vertical Divider */}
                {index !== items.length - 1 && (
                  <div className="hidden lg:block absolute top-0 right-0 h-full w-px bg-gray-300" />
                )}

                <motion.div
                  className="flex justify-center mb-6"
                  custom={index}
                  variants={iconVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {item.icon}
                </motion.div>

                <p className="font-semibold text-lg mb-4">{item.title}</p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choseus;
