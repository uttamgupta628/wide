import React from 'react';
import type { EventsSectionProps } from '../../types';

export const EventsSection: React.FC<EventsSectionProps> = ({ images }) => {
  return (
    <section className="bg-white px-4 sm:px-20 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Our beloved events
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4">

          {/* LEFT COLUMN – 2 images */}
          <div className="grid grid-rows-2 gap-4 h-80 lg:h-150">
            {images.slice(0, 2).map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={`Event ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN – 3 images (vertical) */}
          <div className="grid grid-rows-3 gap-4 h-80 lg:h-150">
            {images.slice(2, 5).map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={`Event ${i + 3}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
