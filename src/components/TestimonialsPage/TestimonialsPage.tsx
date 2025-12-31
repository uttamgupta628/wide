import React, { useState, useRef, useEffect } from "react";
import back from "../../assets/background.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Rohit from "../../assets/rohit.png";
import Breadcrumb from "../Global/Breadcrumb";
import { ClientsSection } from "../sections/ClientsSection";
import { clients } from "../../data/clientsData";

type Category = "ALL" | "OUTDOOR ADVERTISING" | "PR & EVENTS" | "BRANDING";

type Testimonial = {
  name: string;
  role: string;
  rating: number;
  message: string;
  category: Category;
};

const categories: Category[] = [
  "ALL",
  "OUTDOOR ADVERTISING",
  "PR & EVENTS",
  "BRANDING",
];

const testimonials: Testimonial[] = [
  {
    name: "Rohit Sharma",
    role: "President, ODI 200",
    rating: 5,
    category: "OUTDOOR ADVERTISING",
    message:
      "Excellent brand integration with renowned pandals, flawless execution, massive visibility, cultural alignment, professional coordination.",
  },
  {
    name: "Rohit Sharma",
    role: "President, ODI 200",
    rating: 5,
    category: "PR & EVENTS",
    message:
      "Excellent brand integration with renowned pandals, flawless execution, massive visibility, cultural alignment, professional coordination.",
  },
  {
    name: "Rohit Sharma",
    role: "President, ODI 200",
    rating: 5,
    category: "BRANDING",
    message:
      "Excellent brand integration with renowned pandals, flawless execution, massive visibility, cultural alignment, professional coordination.",
  },
  {
    name: "Rohit Sharma",
    role: "President, ODI 200",
    rating: 5,
    category: "OUTDOOR ADVERTISING",
    message:
      "Excellent brand integration with renowned pandals, flawless execution, massive visibility, cultural alignment, professional coordination.",
  },
  {
    name: "Rohit Sharma",
    role: "President, ODI 200",
    rating: 5,
    category: "PR & EVENTS",
    message:
      "Excellent brand integration with renowned pandals, flawless execution, massive visibility, cultural alignment, professional coordination.",
  },
  {
    name: "Rohit Sharma",
    role: "President, ODI 200",
    rating: 5,
    category: "BRANDING",
    message:
      "Excellent brand integration with renowned pandals, flawless execution, massive visibility, cultural alignment, professional coordination.",
  },
  {
    name: "Rohit Sharma",
    role: "President, ODI 200",
    rating: 5,
    category: "OUTDOOR ADVERTISING",
    message:
      "Excellent brand integration with renowned pandals, flawless execution, massive visibility, cultural alignment, professional coordination.",
  },
  {
    name: "Rohit Sharma",
    role: "President, ODI 200",
    rating: 5,
    category: "PR & EVENTS",
    message:
      "Excellent brand integration with renowned pandals, flawless execution, massive visibility, cultural alignment, professional coordination.",
  },
];

const TestimonialsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredTestimonials =
    activeCategory === "ALL"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  // Autoplay testimonials carousel
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const autoScroll = setInterval(() => {
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollBy({ left: 380, behavior: "smooth" });
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(autoScroll);
  }, [filteredTestimonials]);

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 380, behavior: "smooth" });
  };

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -380, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />
      {/* ================= HEADER ================= */}
      {/* <section className="bg-gradient-to-r from-[#FFDA00] to-white pb-16 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 items-center">
          <div className="hidden lg:block" />

          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center gap-1 mb-2">⭐⭐⭐⭐⭐</div>

            <h2 className="text-3xl md:text-4xl font-bold uppercase whitespace-nowrap text-white">
              WHAT OUR <span className="text-black">CLIENTS SAY</span>
            </h2>

            <p className="mt-4 text-sm md:text-base">
              We take pride in the success stories shared by our valued clients.
              Here's what they have to say about partnering with us to boost
              their brand visibility and achieve their marketing goals.
            </p>
          </div>

          <div className="hidden lg:flex justify-end">
            <img
              src={Testimonials}
              alt="Client Review"
              className="w-[260px] xl:w-[300px]"
            />
          </div>
        </div>
      </section> */}

      {/* ================= FILTER ================= */}
      <section className="py-10 text-center">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center gap-1 mb-2">⭐⭐⭐⭐⭐</div>

          <h2 className="text-3xl md:text-4xl font-bold uppercase whitespace-nowrap text-black">
            WHAT OUR <span className="text-[#FFDA00]">CLIENTS SAY</span>
          </h2>

          <p className="mt-4 text-sm md:text-base">
            We take pride in the success stories shared by our valued clients.
            Here's what they have to say about partnering with us to boost their
            brand visibility and achieve their marketing goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
          {categories.map((cat, index) => (
            <React.Fragment key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-semibold cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#FFDA00] text-black rounded-lg"
                    : "bg-white text-black"
                }`}
              >
                {cat}
              </button>

              {/* Separator */}
              {index !== categories.length - 1 && (
                <span className="text-gray-400 font-semibold select-none">
                  |
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS SLIDER WITH AUTOPLAY ================= */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: `url(${back})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div
          ref={sliderRef}
          className="max-w-6xl mx-auto px-6 flex gap-6 overflow-x-hidden scroll-smooth"
        >
          {filteredTestimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[360px] max-w-[360px] bg-[#3B3533] text-white rounded-2xl border-2 border-[#FFDA00] p-8 flex-shrink-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={Rohit}
                  alt="user"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-xs opacity-70">{item.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3 text-[#FFDA00]">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className="text-sm leading-relaxed">
                <span className="text-[#FFDA00] text-2xl mr-2">"</span>
                {item.message}
              </p>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-10 top-1/2 -translate-y-1/2 bg-[#FFDA00] w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <ArrowLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-10 top-1/2 -translate-y-1/2 bg-[#FFDA00] w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <ArrowRight />
        </button>
      </section>
      <ClientsSection clients={clients} />
    </div>
  );
};

export default TestimonialsPage;
