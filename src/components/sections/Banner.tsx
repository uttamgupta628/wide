import { useEffect, useState } from "react";
import { easeOut, motion } from "framer-motion";
import images from "../../assets/images";

const Banner: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const textVariants = {
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
        delay: 0.5 + custom * 0.3,
      },
    }),
  };

  const texts = [
    "WIDEST gamut of services.",
    "WIDEST network of media.",
    "WIDEST repertoire of customization.",
  ];

  return (
    <div style={styles.container}>
      {/* Main Image */}
      <img src={images.banner} alt="Main Visual" style={styles.mainImage} />

      {/* TEXT CONTENT */}
      <div style={styles.textContainer}>
        {texts.map((text, index) => {
          const [widest, ...rest] = text.split(" ");
          return (
            <motion.h1
              key={index}
              custom={index}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              style={styles.textLine}
            >
              <span style={styles.yellowText}>{widest}</span>{" "}
              <span style={styles.blackText}>{rest.join(" ")}</span>
            </motion.h1>
          );
        })}
      </div>

      {/* First Truck */}
      <img
        src={images.truck1}
        alt="Truck 1"
        style={{
          ...styles.truck,
          ...(startAnimation ? styles.truckFly1 : {}),
          width: "766px", // different width
          height: "304px", // different height
        }}
      />

      {/* Second Truck */}
      <img
        src={images.truck2}
        alt="Truck 2"
        style={{
          ...styles.truck,
          ...(startAnimation ? styles.truckFly2 : {}),
          width: "314px", // different width
          height: "248px", // different height
        }}
      />

      {/* Aeroplane */}
      <img
        src={images.airplane}
        alt="Aeroplane"
        style={{
          ...styles.airplane,
          ...(startAnimation ? styles.planeFly : {}),
        }}
      />

      {/* Keyframes */}
      <style>
        {`
    /* Truck animation - downward non-linear */
    @keyframes moveTruckDown {
      0% {
        transform: translateX(-120vw) translateY(0);
      }
      40% {
        transform: translateX(-40vw) translateY(20px);
      }
      70% {
        transform: translateX(20vw) translateY(40px);
      }
      100% {
        transform: translateX(120vw) translateY(120px);
      }
    }

    /* Airplane animation stays untouched */
    @keyframes flyPlane {
      from {
        transform: translateX(0) translateY(0) rotate(0deg);
      }
      to {
        transform: translateX(-120vw) translateY(-200px) rotate(-15deg);
      }
    }
  `}
      </style>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#000",
  },

  mainImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  /* Text Container */
  textContainer: {
    position: "absolute",
    top: "50%",
    left: "5%",
    transform: "translateY(-50%)",
    zIndex: 5,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  textLine: {
    fontSize: "clamp(2rem, 5vw, 4rem)",
    fontWeight: "bold",
    margin: "0",
    lineHeight: "1.2",
  },

  yellowText: {
    color: "#FFCD29",
  },

  blackText: {
    color: "#fff",
  },

  /* Trucks */
  truck: {
    position: "absolute",
    bottom: "4%",
    objectFit: "contain",
    opacity: 0, // 👈 hidden initially
    transform: "translateX(-140vw)", // 👈 start off-screen
  },

  truckFly1: {
    opacity: 1,
    animation: "moveTruckDown 20s ease-in-out forwards",
  },

  truckFly2: {
    opacity: 1,
    animation: "moveTruckDown 20s ease-in-out forwards",
    animationDelay: "5s",
  },

  /* Airplane */
  airplane: {
    position: "absolute",
    top: "12%",
    right: "-200px",
    width: "160px",
    opacity: 0,
  },

  planeFly: {
    opacity: 1,
    animation: "flyPlane 20s ease-in-out forwards",
  },
};

export default Banner;
