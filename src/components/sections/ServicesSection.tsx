import { Flag, Calendar, Megaphone, Star, Mic, Edit3 } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    { icon: <Flag className="w-10 h-10" />, title: "OOH" },
    { icon: <Calendar className="w-10 h-10" />, title: "Corporate", sub: "Events" },
    { icon: <Megaphone className="w-10 h-10" />, title: "Brand", sub: "Activations" },
    { icon: <Star className="w-10 h-10" />, title: "Celebrity", sub: "Management" },
    { icon: <Mic className="w-10 h-10" />, title: "Public", sub: "Relations (PR)" },
    { icon: <Edit3 className="w-10 h-10" />, title: "Branding" }
  ];

  return (
    <section id="services" className="bg-gray-50 px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">WHAT WE DO</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm hover:shadow-lg transition text-center group">
              <div className="flex justify-center mb-4 sm:mb-6 text-gray-800 group-hover:text-yellow-500">
                {s.icon}
              </div>
              <h3 className="font-semibold text-base sm:text-lg">
                {s.title}
                {s.sub && <><br />{s.sub}</>}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
