import { Flag, Calendar, Megaphone, Star, Mic, Edit3 } from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesSection = () => {
  const services = [
    {
      icon: <Flag className="w-10 h-10" />,
      title: "OOH",
      path: "/services/ooh",
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Corporate",
      sub: "Events",
      path: "/services/corporate",
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Brand",
      sub: "Activations",
      path: "/services/branding",
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "Celebrity",
      sub: "Management",
      path: "/services/management",
    },
    {
      icon: <Mic className="w-10 h-10" />,
      title: "Public",
      sub: "Relations (PR)",
      path: "/services/pr",
    },
    {
      icon: <Edit3 className="w-10 h-10" />,
      title: "Branding",
      path: "/services/branding",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <Link key={i} to={s.path} className="block">
              <div
                className="bg-white p-8 sm:p-10 rounded-2xl
             shadow-sm
             transform-gpu
             transition-all duration-500 ease-out
             hover:shadow-[0_0_40px_10px_rgba(251,191,36,0.35)]
             hover:-translate-y-2
             text-center group cursor-pointer
             h-56 sm:h-60
             flex flex-col items-center justify-center"
              >
                <div
                  className="flex justify-center mb-4 sm:mb-6 
                                text-gray-800 
                                transition-colors duration-300
                                group-hover:text-yellow-500"
                >
                  {s.icon}
                </div>

                <p className="font-semibold text-base sm:text-lg">
                  {s.title}
                  {s.sub && (
                    <>
                      <br />
                      {s.sub}
                    </>
                  )}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
