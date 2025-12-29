import React, { useRef, useEffect, useState } from "react";
import type { ClientsSectionProps } from "../../types";

export const ClientsSection: React.FC<ClientsSectionProps> = ({ clients }) => {
  const topRowRef = useRef<HTMLDivElement | null>(null);
  const bottomRowRef = useRef<HTMLDivElement | null>(null);

  const [topOffset, setTopOffset] = useState(0);
  const [bottomOffset, setBottomOffset] = useState(0);

  useEffect(() => {
    if (!topRowRef.current || !bottomRowRef.current) return;

    const getTotalWidth = (container: HTMLDivElement) => {
      const children = Array.from(container.children);
      const halfChildren = children.slice(0, children.length / 2);
      return halfChildren.reduce((sum, child) => {
        const el = child as HTMLElement;
        return sum + el.offsetWidth + 24; // gap between cards
      }, 0);
    };

    const speed = 1; // pixels per frame
    let animationFrame: number;

    const animate = () => {
      if (topRowRef.current) {
        const totalTopWidth = getTotalWidth(topRowRef.current);
        setTopOffset((prev) => {
          let newOffset = prev + speed;
          if (newOffset >= totalTopWidth) newOffset = 0;
          return newOffset;
        });
      }

      if (bottomRowRef.current) {
        const totalBottomWidth = getTotalWidth(bottomRowRef.current);
        setBottomOffset((prev) => {
          let newOffset = prev - speed; 
          if (Math.abs(newOffset) >= totalBottomWidth) newOffset = 0;
          return newOffset;
        });
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [clients]);

  const mid = Math.ceil(clients.length / 2);
  const topClients = clients.slice(0, mid);
  const bottomClients = clients.slice(mid);

  const renderRow = (
    rowClients: typeof clients,
    offset: number,
    ref: React.RefObject<HTMLDivElement | null>
  ) => (
    <div className="relative w-full overflow-hidden h-36 sm:h-44 mb-6">
      <div
        ref={ref}
        className="flex gap-6 absolute top-0 left-0"
        style={{
          transform: `translateX(${offset}px)`,
          transition: "transform 0.016s linear",
        }}
      >
        {/* Duplicate items for seamless loop */}
        {rowClients.concat(rowClients).map((c, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 flex items-center justify-center hover:shadow-lg transition min-h-25 sm:min-h-30 shrink-0"
          >
            <img src={c.img} alt={c.name} className="max-h-12 sm:max-h-16 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="bg-white px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Clients</h2>

        {/* Top Row: Moves from right to left (positive offset increases) */}
        {renderRow(topClients, -topOffset, topRowRef)}

        {/* Bottom Row: Moves from left to right (negative offset increases) */}
        {renderRow(bottomClients, bottomOffset, bottomRowRef)}
      </div>
    </section>
  );
};