import React, { useState } from "react";
import type { TeamsSectionProps } from "../../types";

export const TeamsSection: React.FC<TeamsSectionProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getImageStyle = (index: number) => {
    const diff = (index - activeIndex + images.length) % images.length;

    if (diff === 0) {
      return {
        transform: "translate(-50%, -50%) scale(1.2) translateZ(0)",
        opacity: 1,
        zIndex: 10,
      };
    } else if (diff === 1 || diff === -images.length + 1) {
      return {
        transform:
          "translate(-50%, -50%) translateX(300px) scale(0.75) translateZ(-100px)",
        opacity: 0.5,
        zIndex: 5,
      };
    } else if (diff === images.length - 1 || diff === -1) {
      return {
        transform:
          "translate(-50%, -50%) translateX(-300px) scale(0.75) translateZ(-100px)",
        opacity: 0.5,
        zIndex: 5,
      };
    } else {
      return {
        transform: "translate(-50%, -50%) scale(0.5) translateZ(-200px)",
        opacity: 0,
        zIndex: 1,
      };
    }
  };

  return (
    <section className="bg-gray-100  sm:px-6 py-16 w-full">
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Teams
        </h2>
        <div className="bg-[#3C3533] rounded-2xl p-8 sm:p-12 relative w-full">
          <div
            className="relative h-[90vh]   flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-[30vw] h-[80vh] transition-all duration-600 ease-in-out"
                style={getImageStyle(i)}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src={img}
                    alt={`Team ${i + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                    // style={{ clipPath: "inset(0 round 32px)" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed z-20"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed z-20"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
