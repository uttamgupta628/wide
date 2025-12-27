import React from 'react';
import type { ClientsSectionProps } from '../../types';

export const ClientsSection: React.FC<ClientsSectionProps> = ({ clients }) => {
  return (
    <section id="portfolio" className="bg-white px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Clients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {clients.map((c, i) => (
            <div 
              key={i} 
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 flex items-center justify-center hover:shadow-lg transition min-h-25 sm:min-h-30"
            >
              <img 
                src={c.img} 
                alt={c.name} 
                className="max-h-12 sm:max-h-16 object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};