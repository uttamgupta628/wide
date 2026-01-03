import { useRef, useEffect, useState } from "react";
import { Shield, DollarSign, Target, Clock, FileText } from "lucide-react";

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const features = [
    {
      icon: <Shield className="w-12 h-12 text-yellow-500 shrink-0" />,
      title: "Extremely Stringent Quality Standards",
      desc: "We uphold the highest quality standards to exceptional results",
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-500 shrink-0" />,
      title: "Right Budget for Right Execution",
      desc: "We deliver results within the optimal budget for unmatched value",
    },
    {
      icon: <Target className="w-12 h-12 text-purple-500 shrink-0" />,
      title: "Highly Skilled, Efficient & Experienced Planning & Buying Team",
      desc: "Our team comprised seasoned professionals adapt in strategic planning and procurement",
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-500 shrink-0" />,
      title: "Stringent Timeline Meetups",
      desc: "We adhere to strict timelines, ensuring timely delivery of all projects",
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-800 shrink-0" />,
      title: "High Quality Post Production Documentation & Reporting",
      desc: "We provide detailed and accurate post production documentation and reporting",
    },
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.5 &&
            !hasAnimated.current
          ) {
            setIsVisible(true);
            hasAnimated.current = true;
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-gray-100 px-4 sm:px-6 py-16 sm:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
        <div
          className="
  bg-white rounded-3xl shadow-lg p-12 
  border-4 border-gray-300 max-w-md relative
  transform-gpu
  transition-all duration-500 ease-out
  hover:shadow-[0_0_40px_10px_rgba(251,191,36,0.35)]
  hover:border-amber-400
  hover:-translate-y-2
"
        >
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight  ">
            What set
            <br />
            us apart
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 auto-rows-fr">
          {features.map((f, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl p-6 shadow-md flex items-start gap-4 transition-all duration-[1600ms] ease-out   hover:-translate-y-2
 ${
   isVisible
     ? "opacity-100 translate-x-0 scale-100"
     : "opacity-0 -translate-x-[700px] scale-50"
 }`}
              style={{
                transitionDelay: isVisible ? `${i * 400}ms` : "0ms",
              }}
            >
              <div
                className={`transition-all duration-[1400ms] ease-out ${
                  isVisible ? "rotate-0 scale-100" : "-rotate-[360deg] scale-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${i * 400 + 200}ms` : "0ms",
                  transitionTimingFunction:
                    "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                }}
              >
                {f.icon}
              </div>
              <div
                className={`transition-all duration-[1200ms] ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${i * 400 + 300}ms` : "0ms",
                }}
              >
                <p className="font-bold text-lg mb-2">{f.title}</p>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
