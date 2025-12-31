import { useRef } from "react";
import { easeOut, motion, useInView } from "framer-motion";
import man from "../../assets/man1.png";
import { Link } from "react-router-dom";

const OurExpertTeamSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const headingVariants = {
    hidden: {
      y: -30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const subHeadingVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
        delay: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: easeOut,
        delay: 0.4 + custom * 0.15,
      },
    }),
  };

  const buttonVariants = {
    hidden: {
      y: 30,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
        delay: 1,
      },
    },
  };

  const teamMembers = [
    { name: "Asif Khan", role: "PR Manager", img: man },
    { name: "Biswanath Sarkar", role: "Accounts", img: man },
    { name: "Pritam Suin", role: "Operations", img: man },
    { name: "Tital Basu", role: "Accounts Manager", img: man },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#fbf6f3] py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h4
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-5xl font-medium text-black mb-2"
        >
          OUR <span className="text-[#FFCD29]">EXPERT</span> TEAM
        </motion.h4>

        <motion.p
          variants={subHeadingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[#686775] font-light text-3xl mb-16"
        >
          The minds driving success at Wide Horizons
        </motion.p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer group"
            >
              {/* Image */}
              <div className="w-full flex justify-center items-center overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="py-4">
                <h3 className="font-semibold text-2xl text-black">
                  {member.name}
                </h3>
                <p className="text-xl font-light text-[#797979]">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <Link to="/contact-us">
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white hover:bg-[#FFCD29] hover:text-black font-medium px-10 py-3 rounded-xl text-xl cursor-pointer hover:opacity-90 transition"
          >
            GET IN TOUCH
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default OurExpertTeamSection;
