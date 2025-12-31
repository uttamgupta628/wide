import React from "react";
import Marquee from "react-fast-marquee";
import type { ClientsSectionProps } from "../../types";

export const ClientsSection: React.FC<ClientsSectionProps> = ({ clients }) => {
  const mid = Math.ceil(clients.length / 2);
  const topClients = clients.slice(0, mid);
  const bottomClients = clients.slice(mid);

  const ClientCard = ({ img, name }: { img: string; name: string }) => (
    <div className="mx-4 py-6 flex items-center justify-center">
      {/* Fixed-size wrapper prevents layout shift */}
      <div className="bg-white border border-gray-200 rounded-xl px-8 py-6 flex items-center justify-center transition-transform duration-300 ease-out hover:scale-110 hover:cursor-pointer hover:shadow-md">
        <img
          src={img}
          alt={name}
          className="max-h-14 sm:max-h-16 object-contain pointer-events-none"
        />
      </div>
    </div>
  );

  return (
    <section
      id="portfolio"
      className="bg-white px-4 sm:px-6 py-16 sm:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
          Our Happy Clients
        </h2>

        {/* 🔹 TOP ROW — Right ➜ Left */}
        <div className="mb-10 overflow-visible">
          <Marquee
            direction="left"
            speed={40}
            pauseOnHover
            gradient={false}
            className="overflow-visible"
          >
            {topClients.map((c, i) => (
              <ClientCard key={i} img={c.img} name={c.name} />
            ))}
          </Marquee>
        </div>

        {/* 🔹 BOTTOM ROW — Left ➜ Right */}
        <div className="overflow-visible">
          <Marquee
            direction="right"
            speed={30}
            pauseOnHover
            gradient={false}
            className="overflow-visible"
          >
            {bottomClients.map((c, i) => (
              <ClientCard key={i} img={c.img} name={c.name} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
