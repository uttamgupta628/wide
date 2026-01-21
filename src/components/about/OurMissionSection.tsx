import { useRef } from "react";
import { easeOut, motion, useInView } from "framer-motion";

const OurMissionSection = () => {
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

  const paragraphVariants = {
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
        delay: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
        delay: 0.6 + custom * 0.2,
      },
    }),
  };

  const cards = [
    {
      no: "01",
      title: "STRATEGIC ADVERTISING",
      text: "We develop insight-led advertising strategies that combine research, planning, and creativity to deliver targeted messages at the right place and time, ensuring maximum visibility and measurable business outcomes.",
    },
    {
      no: "02",
      title: "INNOVATIVE SOLUTIONS",
      text: "By blending creativity with technology and market intelligence, we design innovative advertising solutions that solve real challenges, improve campaign efficiency, and support long-term brand growth.",
    },
    {
      no: "03",
      title: "MEASURABLE RESULTS",
      text: "We focus on performance-driven execution supported by clear metrics and actionable insights, enabling brands to track success, optimize campaigns, and make smarter business decisions.",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#fbf6f3] py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h4
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[55px] font-semibold text-bold mb-2"
        >
          OUR <span className="text-[#FFCD29]">MISSION</span>
        </motion.h4>

        <motion.h2
          variants={subHeadingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-2xl md:text-[42px] font-medium text-black mb-6"
        >
          To Maximize Your Brand's Reach and Impact
        </motion.h2>

        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-black text-2xl max-w-5xl mx-auto mb-20 leading-relaxed"
        >
          Our mission is to help brands stand out in the real world by expanding
          their reach and strengthening market presence through strategic
          thinking, creative excellence, and data-driven advertising solutions.
          We create meaningful audience connections that elevate brands above
          the competition and drive sustainable growth.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
          {cards.map((card, index) => (
            <motion.div
              key={card.no}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative text-left group h-full"
            >
              {/* STAR + NUMBER */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 text-[#FFCD29] text-xl z-20">
                ★ <span className="text-5xl">{card.no}</span>
              </div>

              {/* CARD */}
              <div className="relative h-full overflow-hidden border-2 border-[#FFCD29] rounded-lg px-4 py-8 bg-white transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl cursor-pointer flex flex-col">
                {/* LIQUID FILL */}
                <div className="absolute inset-0 bg-[#FFCD29] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col h-full transition-colors duration-300 group-hover:text-black">
                  <p className="font-semibold text-[28px] mb-4">{card.title}</p>

                  <p className="text-xl leading-relaxed">{card.text}</p>

                  {/* Spacer (keeps layout stable if you add buttons later) */}
                  <div className="flex-grow" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
