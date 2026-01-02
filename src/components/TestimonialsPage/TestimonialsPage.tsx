import React, { useState, useRef, useEffect } from "react";
import back from "../../assets/testiBg.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Rohit from "../../assets/rohit.png";
import Breadcrumb from "../Global/Breadcrumb";
import { ClientsSection } from "../sections/ClientsSection";
import { clients } from "../../data/clientsData";
import Testimonials from "../../assets/TestimonialsPage.png";

type Category = "ALL" | "OUTDOOR ADVERTISING" | "PR & EVENTS" | "BRANDING";

type Testimonial = {
  name: string;
  role: string;
  rating: number;
  message: string;
  category: Category;
};

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
  const [activeCategory] = useState<Category>("ALL");
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredTestimonials =
    activeCategory === "ALL"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  // Autoplay testimonials carousel - scroll by 3 cards (1104px = 360px * 3 + 24px gap * 2)
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = 360;
    const gap = 24;

    const startAutoplay = () => {
      // Clear existing interval (safety)
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }

      autoScrollRef.current = setInterval(() => {
        const scrollAmount = (cardWidth + gap) * 3;

        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }, 3000);
    };

    startAutoplay();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };
  }, [activeCategory]); // ✅ ONLY restart when category changes

  const scrollRight = () => {
    const cardWidth = 360;
    const gap = 24;
    const scrollAmount = (cardWidth + gap) * 3; // Scroll by 3 cards
    sliderRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollLeft = () => {
    const cardWidth = 360;
    const gap = 24;
    const scrollAmount = (cardWidth + gap) * 3; // Scroll by 3 cards
    sliderRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  return (
    <div className=" w-full bg-white">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />
      <section className="bg-gradient-to-r from-[#FFDA00] to-white pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 items-center">
          <div className="hidden lg:block" />

          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center gap-1 mb-2">⭐⭐⭐⭐⭐</div>

            <h2 className="text-3xl md:text-4xl font-bold uppercase whitespace-nowrap text-white">
              Happy <span className="text-black">CLIENTS TELL</span>
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
      </section>

      {/* ================= FILTER ================= */}
      <section className="py-10 text-center max-w-7xl mx-auto">
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
          className="max-w-[1175px] mx-auto px-6 flex gap-6 overflow-x-hidden scroll-smooth"
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
