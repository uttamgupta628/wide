import React, { useState, useEffect, useRef } from "react";
import type { TeamsSectionProps } from "../../types";

export const TeamsSection: React.FC<TeamsSectionProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setActiveIndex((prev) => (prev + 1) % images.length);

        setTimeout(() => setIsAnimating(false), 600);
      }
    }, 500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, isAnimating, images.length]);

  const getImageStyle = (index: number) => {
    const diff = (index - activeIndex + images.length) % images.length;

    if (diff === 0) {
      return {
        transform: "translate(-50%, -50%) scale(1.15)",
        opacity: 1,
        zIndex: 10,
      };
    }

    if (diff === 1) {
      return {
        transform: "translate(-50%, -50%) translateX(420px) scale(0.75)",
        opacity: 0.5,
        zIndex: 5,
        filter: "grayscale(100%)",
      };
    }

    if (diff === images.length - 1) {
      return {
        transform: "translate(-50%, -50%) translateX(-420px) scale(0.75)",
        opacity: 0.5,
        zIndex: 5,
        filter: "grayscale(100%)",
      };
    }

    return {
      opacity: 0,
      zIndex: 1,
    };
  };

  return (
    <section className="bg-gray-100 py-16 w-full">
      <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>

      <div className="bg-[#3C3533] rounded-2xl p-12 relative">
        <div
          className="relative h-[80vh] flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="absolute top-1/2 left-1/2 w-[30vw] h-[70vh] transition-all duration-700 ease-in-out"
              style={getImageStyle(i)}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                <img
                  src={img.src}
                  alt={img.name}
                  className="w-full h-[85%] object-cover"
                />

                <div className="p-4 text-center bg-white">
                  <h3 className="text-lg font-semibold">{img.name}</h3>
                  <p className="text-sm text-gray-500">{img.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
