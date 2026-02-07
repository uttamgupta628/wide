import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import back from "../../assets/testiBg.png";
import Breadcrumb from "../Global/Breadcrumb";
import { ClientsSection } from "../sections/ClientsSection";
import { clients } from "../../data/clientsData";
import Testimonials from "../../assets/TestimonialsPage.png";
import rupa from "../../assets/rupaceo.png";
import moople from "../../assets/mooplein.png";

type Category =
  | "ALL"
  | "OUTDOOR ADVERTISING"
  | "PR & EVENTS"
  | "BRANDING"
  | "Head Marketing-Outdoor & Branding";

type Testimonial = {
  name: string;
  company: string;
  role: string;
  rating: number;
  message: string;
  category: Category;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Susant Kumar Singh",
    company: "Rupa & Co Ltd.",
    role: "Head Marketing-Outdoor & Branding",
    rating: 5,
    category: "Head Marketing-Outdoor & Branding",
    image: rupa,
    message:
      "Wide Horizons is a trusted partner for all our branding and advertising needs. With multiple successful projects under their belt, they've consistently delivered high-quality work within tight deadlines. They excel at crafting engaging campaigns from complex strategies, leveraging their expertise in event marketing and brand positioning. A reliable choice for impactful branding solutions!",
  },
  {
    name: "Pritish Das",
    company: "Moople Institute.",
    role: "AGM – Marketing",
    rating: 5,
    category: "Head Marketing-Outdoor & Branding",
    image: moople,
    message:
      "Wide Horizon has been a dependable partner in strengthening Moople Institute’s outdoor & PR presence. From selecting prime hoarding sites to ensuring flawless installation, their team works with genuine dedication. PR deliverables in line with our strategies was also ensured with aplomb. I always value agencies who understand our brand objectives, and Wide Horizons does exactly that. Their service quality, responsiveness, and attention to detail are commendable. Highly recommended!",
  },
];

const TestimonialsPage: React.FC = () => {
  const [activeCategory] = useState<Category>("ALL");
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [speed, setSpeed] = useState(60);

  const filteredTestimonials =
    activeCategory === "ALL"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  const handleScrollLeft = () => {
    setDirection("right");
    setSpeed(80); // Temporarily increase speed for visible effect
    setTimeout(() => setSpeed(60), 500);
  };

  const handleScrollRight = () => {
    setDirection("left");
    setSpeed(80); // Temporarily increase speed for visible effect
    setTimeout(() => setSpeed(60), 500);
  };

 const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <div className="mx-3">
    <div
      className="w-[350px] h-[520px]
           bg-[#3B3533] text-white rounded-2xl border-2 border-[#FFDA00]
           p-6 flex flex-col
           transition-transform duration-300 ease-out
           hover:scale-105 hover:shadow-2xl hover:cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-4">
        <img
          src={item.image}
          alt="user"
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        />
        <div className="min-w-0">
          <h4 className="font-semibold text-sm truncate">{item.name}</h4>
          <p className="text-xs opacity-70 truncate">{item.role}</p>
          <p className="text-xs opacity-90 text-[#FFDA00] truncate mt-1">
            {item.company}
          </p>
        </div>
      </div>

      <div className="flex gap-1 mb-4 text-[#FFDA00]">
        {Array.from({ length: item.rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      <div className="flex-1">
        <p className="text-sm leading-relaxed">
          <span className="text-[#FFDA00] text-2xl mr-1">"</span>
          {item.message}
          <span className="text-[#FFDA00] text-2xl ml-1">"</span>
        </p>
      </div>
    </div>
  </div>
);

  return (
    <div className="w-full bg-white">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />
      <section className="bg-gradient-to-r from-[#FFDA00] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto py-18 px-6 h-full flex items-center justify-center">
          {/* Center Content */}
          <div className="text-center max-w-xl">
            <div className="flex justify-center gap-1 mb-2">⭐⭐⭐⭐⭐</div>

            <h2 className="text-3xl md:text-4xl font-bold uppercase text-white">
              Happy <span className="text-black">CLIENTELE</span>
            </h2>

            <p className="mt-4 text-sm md:text-base">
              We take pride in the success stories shared by our valued clients.
              Here's what they have to say about partnering with us to boost
              their brand visibility and achieve their marketing goals.
            </p>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block absolute right-8 bottom-0">
            <img
              src={Testimonials}
              alt="Client Review"
              className="w-[260px] xl:w-[300px]"
            />
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS MARQUEE WITH NAVIGATION ================= */}
      <section
        className="relative py-20 overflow-hidden px-4 sm:px-8 lg:px-16"
        style={{
          backgroundImage: `url(${back})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        {/* Left Navigation Button */}
        <button
          onClick={handleScrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 
                     bg-[#FFDA00] hover:bg-[#FFE44D] text-black 
                     w-12 h-12 rounded-full flex items-center justify-center
                     shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Right Navigation Button */}
        <button
          onClick={handleScrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 
                     bg-[#FFDA00] hover:bg-[#FFE44D] text-black 
                     w-12 h-12 rounded-full flex items-center justify-center
                     shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <Marquee
          direction={direction}
          speed={speed}
          pauseOnHover
          gradient={false}
          className="overflow-visible"
        >
          {filteredTestimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </Marquee>
      </section>

      <ClientsSection clients={clients} />
    </div>
  );
};

export default TestimonialsPage;