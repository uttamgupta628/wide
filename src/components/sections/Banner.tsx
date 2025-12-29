import { useEffect, useState } from "react";
import images from "../../assets/images";

const Banner: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      {/* Main Image */}
      <img src={images.banner} alt="Main Visual" style={styles.mainImage} />

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
