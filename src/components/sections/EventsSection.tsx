import React, { useEffect, useState } from 'react';
import type { EventsSectionProps } from '../../types';

export const EventsSection: React.FC<EventsSectionProps> = ({ images }) => {
  const [imgOrder, setImgOrder] = useState(images.slice(0, 5));
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Wait for fade out, then rotate images
      setTimeout(() => {
        setImgOrder((prev) => [prev[4], prev[0], prev[1], prev[2], prev[3]]);
        setIsTransitioning(false);
      }, 500); // Half of transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white px-4 sm:px-20 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8">
          Our Achievement
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4">
          {/* LEFT COLUMN – 2 images */}
          <div className="grid grid-rows-2 gap-4 h-80 lg:h-[800px]">
            {[imgOrder[0], imgOrder[1]].map((img, i) => (
              <div
                key={`${img}-${i}`}
                className={`overflow-hidden rounded-lg shadow-lg transition-all duration-1000 ease-in-out transform ${
                  isTransitioning 
                    ? 'opacity-0 scale-95' 
                    : 'opacity-100 scale-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Event ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
          {/* RIGHT COLUMN – 3 images (vertical) */}
          <div className="grid grid-rows-3 gap-4 h-80 lg:h-[800px]">
            {[imgOrder[2], imgOrder[3], imgOrder[4]].map((img, i) => (
              <div
                key={`${img}-${i + 2}`}
                className={`overflow-hidden rounded-lg shadow-lg transition-all duration-1000 ease-in-out transform ${
                  isTransitioning 
                    ? 'opacity-0 scale-95' 
                    : 'opacity-100 scale-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Event ${i + 3}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};