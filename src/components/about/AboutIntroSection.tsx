import { useEffect, useRef } from "react";
import aboutUsAnimation from "../../assets/About Us Team.json";

function AboutIntroSection() {
  const lottieContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<any>(null);

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

  return (
    <section className="w-full bg-[#F8F3F3] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h5 className="text-black font-semibold text-5xl tracking-wide mb-3">
            ABOUT <span className="text-[#FFDA00]">US</span>
          </h5>

          <h2 className="text-2xl md:text-[38px] font-semibold text-black leading-tight mb-6">
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
          </h2>

          <p className="text-[#686775] text-2xl leading-relaxed mb-8 max-w-xl">
            Helping brands connect with their audience through strategic out of
            home advertising and experimental marketing, delivering seamless and
            memorable experiences through expert planning, innovative design,
            and flawless execution—turning ideas into impactful events people
            truly remember.
          </p>

          <button className="bg-[#FFCD29] text-black font-semibold px-8 py-3 rounded-full hover:opacity-90 cursor-pointer transition">
            VIEW OUR SERVICES
          </button>
        </div>

        {/* RIGHT LOTTIE ANIMATION */}
        <div className="flex justify-center md:justify-end w-full h-auto">
          <div ref={lottieContainer} className="w-full h-full aspect-auto" />
        </div>
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
