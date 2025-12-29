import { useRef, useEffect } from "react";
import { Shield, DollarSign, Target, Clock, FileText } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({
  feature,
}: {
  feature: { icon: React.ReactNode; title: string; desc: string };
  index: number;
}) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const icon = iconRef.current;
    const text = textRef.current;

    // Set initial state
    gsap.set(card, {
      opacity: 0,
      x: -700,
      scale: 0.5,
    });

    gsap.set(icon, {
      rotation: -360,
      scale: 0,
    });

    gsap.set(text, {
      opacity: 0,
      y: 30,
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    // Animate card entrance
    tl.to(card, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1.8,
      ease: "power3.out",
    })
      // Animate icon
      .to(
        icon,
        {
          rotation: 0,
          scale: 1,
          duration: 1.4,
          ease: "back.out(1.7)",
        },
        "-=1.4"
      )
      // Animate text
      .to(
        text,
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
        },
        "-=1.0"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4"
    >
      <div ref={iconRef}>{feature.icon}</div>
      <div ref={textRef}>
        <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
        <p className="text-gray-600 text-sm">{feature.desc}</p>
      </div>
    </div>
  );
};

export const AboutSection = () => {
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

  return (
    <section
      id="about"
      className="bg-gray-100 px-4 sm:px-6 py-16 sm:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
        <div className="bg-white rounded-3xl shadow-lg p-12 border-4 border-gray-300 max-w-md relative">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            What set
            <br />
            us apart
          </h2>
        </div>
        <div className="space-y-4 relative">
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
