import { useEffect, useRef } from "react";
import { easeOut, motion, useInView } from "framer-motion";
import aboutUsAnimation from "../../assets/About Us Team.json";
import { Link } from "react-router-dom";

function AboutIntroSection() {
  const lottieContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<any>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    // Dynamically load the Lottie player script
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js";
    script.async = true;

    script.onload = () => {
      if (
        lottieContainer.current &&
        window.lottie &&
        !animationInstance.current
      ) {
        animationInstance.current = window.lottie.loadAnimation({
          container: lottieContainer.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: aboutUsAnimation,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid meet",
          },
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Destroy the animation instance on cleanup
      if (animationInstance.current) {
        animationInstance.current.destroy();
        animationInstance.current = null;
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const leftContainerVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
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
        delay: 0.3 + custom * 0.2,
      },
    }),
  };

  const rightContainerVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: easeOut,
        delay: 0.3,
      },
    },
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#F8F3F3] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={leftContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h5
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-black font-semibold text-5xl tracking-wide mb-3"
          >
            ABOUT <span className="text-[#FFDA00]">US</span>
          </motion.h5>

          <motion.h2
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-2xl md:text-[38px] font-semibold text-black leading-tight mb-6"
          >
            GUIDING YOUR{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FFDA00 0%, #998300 100%)",
              }}
            >
              BRAND TO SUCCESS
            </span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[#686775] text-2xl leading-relaxed mb-8 max-w-xl"
          >
            Helping brands connect with their audience through strategic out of
            home advertising and experimental marketing, delivering seamless and
            memorable experiences through expert planning, innovative design,
            and flawless execution—turning ideas into impactful events people
            truly remember.
          </motion.p>
          <Link to="/services">
            <motion.button
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white hover:bg-[#FFCD29] hover:text-black font-semibold px-8 py-3 rounded-xl hover:opacity-90 cursor-pointer transition"
            >
              VIEW OUR SERVICES
            </motion.button>
          </Link>
        </motion.div>

        {/* RIGHT LOTTIE ANIMATION */}
        <motion.div
          variants={rightContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center md:justify-end w-full h-auto"
        >
          <div ref={lottieContainer} className="w-full h-full aspect-auto" />
        </motion.div>
      </div>
    </section>
  );
}

// Type declaration for lottie
declare global {
  interface Window {
    lottie: any;
  }
}

export default AboutIntroSection;
