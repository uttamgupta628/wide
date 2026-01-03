import { useEffect, useRef, useState } from "react";
import { TrendingUp, Handshake, ThumbsUp } from "lucide-react";

export const CommitmentSection = () => {
  const commitments = [
    {
      icon: <TrendingUp className="w-16 h-16 text-yellow-500" />,
      title: "Customzied Strategies",
      desc: "Bespoke marketing strategies tailored to your brand's unique",
    },
    {
      icon: <Handshake className="w-16 h-16 text-yellow-500" />,
      title: "Transparent Workflow",
      desc: "Clear communication and honest process at every stage",
    },
    {
      icon: <ThumbsUp className="w-16 h-16 text-yellow-500" />,
      title: "Proven Results",
      desc: "Trackable success metrics that demonstrate real impact",
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false); // reset when section leaves viewport
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="px-4 sm:px-6 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Your Brand, Our Commitment
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-sm sm:text-base">
          At Wide Horizons we take ownership of your brand's success as if it
          were our own. From Strategic Planning to flawless execution, we focus
          on delivering results that matter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {commitments.map((c, i) => (
            <div
              key={i}
              className={`
                bg-white rounded-2xl p-8 text-center shadow-lg
                transition-transform duration-300 ease-out
                hover:-translate-y-3 hover:scale-105 hover:shadow-2xl cursor-pointer
                ${visible ? "animate-slide-in" : "opacity-0 translate-x-[-0px]"}
              `}
              style={{
                animationDelay: `${i * 300}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="flex justify-center mb-6">{c.icon}</div>
              <p className="font-bold text-xl mb-4">{c.title}</p>
              <p className="text-gray-600 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes slide-in {
            0% {
              opacity: 0;
              transform: translateX(-400px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-slide-in {
            animation: slide-in 0.8s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};
