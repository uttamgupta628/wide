import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// images
import ooh from "../../assets/ooh.png";
import corporate from "../../assets/corporate_event.png";
import activation from "../../assets/brand_advertising.png";
import celebrity from "../../assets/celebrity.png";
import pr from "../../assets/public.png";
import branding from "../../assets/branding.png";

const services = [
  {
    title: "Out-of-Home Advertising (OOH)",
    image: ooh,
    sectionId: "ooh-section", // Links to OOH main section
  },
  {
    title: "CORPORATE EVENTS",
    image: corporate,
    sectionId: "corporate-events-section", // Links to Corporate Events main section
  },
  {
    title: "BRAND ACTIVATIONS",
    image: activation,
    sectionId: "brand-activations-section", // Links to Brand Activations main section
  },
  {
    title: "CELEBRITY MANAGEMENT",
    image: celebrity,
    sectionId: "celebrity-management-section", // Links to Celebrity Management main section
  },
  {
    title: "PUBLIC RELATION (PR) & NEWSPAPER RELEASE",
    image: pr,
    sectionId: "public-relations-section", // Links to Public Relations main section
  },
  {
    title: "BRANDING",
    image: branding,
    sectionId: "branding-section", // Links to Branding main section
  },
];

export default function EventsSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(
              entry.target as HTMLDivElement,
            );
            if (index !== -1) {
              setTimeout(() => {
                (entry.target as HTMLDivElement).classList.add("animate");
              }, index * 80);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            Campaigns Successfully Executed
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/portfolio#${service.sectionId}`}
              className="group flex flex-col gap-4 cursor-pointer"
            >
              {/* CARD */}
              <div
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="
                  sector-card
                  relative overflow-hidden
                  aspect-[578/324]
                  bg-white
                  transition-all duration-500 ease-out
                  shadow-[0px_4px_38.6px_-7px_rgba(127,117,117,0.25)]
                  group-hover:shadow-[0_0_40px_10px_rgba(251,191,36,0.35)]
                  group-hover:-translate-y-2
                "
              >
                {/* TOP GRADIENT LINE */}
                <span
                  className="
                    absolute top-0 left-0 h-[4px] w-full
                    bg-gradient-to-r from-[#4c1818] to-[#e04545]
                    scale-x-0 origin-left
                    transition-transform duration-300
                    group-hover:scale-x-100
                    z-20
                  "
                />
                {/* IMAGE */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    w-full h-full object-cover 
                    transition-transform duration-500 ease-out
                    group-hover:scale-105
                  "
                />
              </div>
              {/* TITLE */}
              <p
                className="
                  text-[#2c2c2c]
                  font-semibold
                  text-lg
                  text-center
                  tracking-wide
                  transition-all duration-300
                  group-hover:text-yellow-500
                  group-hover:tracking-wider
                "
              >
                {service.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
