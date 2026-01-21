import { useEffect, useRef, useState } from "react";
import { easeOut, motion, useInView, AnimatePresence } from "framer-motion";
import aboutUsAnimation from "../../assets/About Us Team.json";
import { Link } from "react-router-dom";

function AboutIntroSection() {
  const lottieContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<any>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [isExpanded, setIsExpanded] = useState(false);

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

  const expandVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: easeOut,
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

          <motion.div
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[#686775] text-lg leading-relaxed mb-4 max-w-xl"
          >
            <p className="mb-4">
              Wide Horizons is a full-service advertising agency delivering
              impactful brand solutions across India. We specialize in OOH
              advertising, corporate events, brand activations, celebrity
              management, public relations (PR), and branding. With a strong
              focus on strategy, creativity, and flawless execution, we help
              brands build visibility, engage audiences, and achieve lasting
              market presence through integrated marketing campaigns.
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  variants={expandVariants}
                  style={{ overflow: "hidden" }}
                >
                  <p className="mb-4">
                    With over two and half years of industry experience, we have
                    grown organically by delivering measurable value to brands
                    while building strong partnerships with media owners and
                    agencies across India. Our integrated approach ensures
                    seamless execution and nationwide reach.
                  </p>

                  <p className="mb-4">
                    Backed by a dedicated team, we provide real-time market
                    intelligence from every region, enabling dynamic, localized,
                    and data-driven advertising strategies tailored for today's
                    India.
                  </p>

                  <p>
                    Driven by deep market understanding and strategic expertise,
                    we create naturally integrated OOH solutions that amplify
                    brand visibility, drive recall, and deliver lasting impact.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#1a1a1a] hover:text-[#FFDA00] cursor-pointer font-semibold mt-2 transition-colors duration-300 flex items-center gap-1"
            >
              {isExpanded ? "Read Less" : "Read More"}
              <span className="text-sm">{isExpanded ? "▲" : "▼"}</span>
            </button>
          </motion.div>

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
