import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import back from "../../assets/testiBg.png";
import Rohit from "../../assets/rohit.png";
import Breadcrumb from "../Global/Breadcrumb";
import { ClientsSection } from "../sections/ClientsSection";
import { clients } from "../../data/clientsData";
import Testimonials from "../../assets/TestimonialsPage.png";
import rupa from "../../assets/rupaceo.png";

type Category =
  | "ALL"
  | "OUTDOOR ADVERTISING"
  | "PR & EVENTS"
  | "BRANDING"
  | "Head Marketing-Outdoor & Branding";

type Testimonial = {
  name: string;
  role: string;
  rating: number;
  message: string;
  category: Category;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rupa & Co Ltd",
    role: "Testimonial from Rupa",
    rating: 5,
    category: "Head Marketing-Outdoor & Branding",
    image: rupa,
    message:
      "Wide Horizons is a trusted partner for all our branding and advertising needs. With multiple successful projects under their belt, they've consistently delivered high-quality work within tight deadlines. They excel at crafting engaging campaigns from complex strategies, leveraging their expertise in event marketing and brand positioning. A reliable choice for impactful branding solutions!",
  },
  {
    name: "Rohit Sharma",
    role: "President, ODI 200",
    rating: 5,
    category: "PR & EVENTS",
    image: Rohit,
    message:
      "Excellent brand integration with renowned pandals, flawless execution, massive visibility, cultural alignment, professional coordination.",
  },
  {
    name: "Rohit Sharma",
    role: "President, ODI 200",
    rating: 5,
    category: "BRANDING",
    image: Rohit,
    message:
      "Excellent brand integration with renowned pandals, flawless execution, massive visibility, cultural alignment, professional coordination.",
  },
  {
    name: "Rohit Sharma",
    role: "President, ODI 200",
    rating: 5,
    category: "OUTDOOR ADVERTISING",
    image: Rohit,
    message:
      "Excellent brand integration with renowned pandals, flawless execution, massive visibility, cultural alignment, professional coordination.",
  },
  {
    name: "Rohit Sharma",
    role: "President, ODI 200",
    rating: 5,
    category: "PR & EVENTS",
    image: Rohit,
    message:
      "Excellent brand integration with renowned pandals, flawless execution, massive visibility, cultural alignment, professional coordination.",
  },
  {
    name: "Rohit Sharma",
    role: "President, ODI 200",
    rating: 5,
    category: "BRANDING",
    image: Rohit,
    message:
      "Excellent brand integration with renowned pandals, flawless execution, massive visibility, cultural alignment, professional coordination.",
  },
  {
    name: "Rohit Sharma",
    role: "President, ODI 200",
    rating: 5,
    category: "OUTDOOR ADVERTISING",
    image: Rohit,
    message:
      "Excellent brand integration with renowned pandals, flawless execution, massive visibility, cultural alignment, professional coordination.",
  },
  {
    name: "Rohit Sharma",
    role: "President, ODI 200",
    rating: 5,
    category: "PR & EVENTS",
    image: Rohit,
    message:
      "Excellent brand integration with renowned pandals, flawless execution, massive visibility, cultural alignment, professional coordination.",
  },
];

const TestimonialsPage: React.FC = () => {
  const [activeCategory] = useState<Category>("ALL");

  const filteredTestimonials =
    activeCategory === "ALL"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  const TestimonialCard = ({ item }: { item: Testimonial }) => (
    <div className="mx-3">
      <div
        className="w-[300px] h-[380px]
             bg-[#3B3533] text-white rounded-2xl border-2 border-[#FFDA00]
             p-6 flex flex-col
             transition-transform duration-300 ease-out
             hover:scale-110 hover:shadow-2xl hover:cursor-pointer"
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
          </div>
        </div>

        <div className="flex gap-1 mb-3 text-[#FFDA00]">
          {Array.from({ length: item.rating }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>

        <div className="flex-1 overflow-hidden">
          <p className="text-sm leading-relaxed line-clamp-[10]">
            <span className="text-[#FFDA00] text-2xl mr-2">"</span>
            {item.message}
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
              Happy <span className="text-black">CLIENTS' TALES</span>
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

      {/* ================= FILTER ================= */}
      <section className="py-10 text-center max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center gap-1 mb-2">⭐⭐⭐⭐⭐</div>

          <h2 className="text-3xl md:text-4xl font-bold uppercase whitespace-nowrap text-black">
            WHAT OUR <span className="text-[#FFDA00]">CLIENTS SAY</span>
          </h2>

          <p className="mt-4 text-sm md:text-base">
            Our clients' feedback speaks for itself. Their stories showcase our
            commitment to building strong brands, creating impactful campaigns,
            and delivering results that truly matter.
          </p>
        </div>
      </section>

      {/* ================= TESTIMONIALS MARQUEE ================= */}
      <section
        className="relative py-20 overflow-hidden px-4 sm:px-8 lg:px-16"
        style={{
          backgroundImage: `url(${back})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <Marquee
          direction="left"
          speed={60}
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