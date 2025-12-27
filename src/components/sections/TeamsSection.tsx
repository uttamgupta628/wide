import React from 'react';
import type { TeamsSectionProps } from '../../types';

export const TeamsSection: React.FC<TeamsSectionProps> = ({ images }) => {
  return (
    <section className="bg-gray-100 px-4 sm:px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Teams</h2>
        <div className="bg-gray-800 rounded-2xl p-8 sm:p-12">
          <div className="flex justify-center items-center gap-4 overflow-x-auto">
            {images.map((img, i) => {
              const isCenter = i === 2;
              return (
                <div key={i} className={`transition-all duration-300 transform ${isCenter ? 'w-64 h-64 scale-110' : 'w-48 h-48 opacity-70'} rounded-lg overflow-hidden shrink-0`}>
                  <img src={img} alt={`Team ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};