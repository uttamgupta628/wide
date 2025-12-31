
import { Award, Network, Settings, ThumbsUp } from "lucide-react";
const items = [
    {
      icon: <Award className="w-10 h-10 text-[#FFDA00]" />,
      title: "Proven Expertise",
      desc: "Demonstrated experience delivering consistently successful events with precision and professionalism",
    },
    {
      icon: <Network className="w-10 h-10 text-[#FFDA00]" />,
      title: "Broad Network",
      desc: "Extensive nationwide connections enabling seamless coordination, reach, and impactful event execution",
    },
    {
      icon: <Settings className="w-10 h-10 text-[#FFDA00]" />,
      title: "Custom Solutions",
      desc: "Tailored event solutions designed to meet unique brand and client needs",
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-[#FFDA00]" />,
      title: "Client Satisfaction",
      desc: "Delivering exceptional experiences that exceed expectations and ensure complete client satisfaction",
    },
  ];
const Choseus = () => {
  return (
    <div>
      <section className="bg-[#F6F2EF] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-2">
          WHY CHOOSE US
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Delivering Success for our Clients
        </p>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-center px-6 relative"
            >
              {/* Vertical Divider */}
              {index !== items.length - 1 && (
                <div className="hidden lg:block absolute top-0 right-0 h-full w-px bg-gray-300" />
              )}

              <div className="flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg mb-4">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Choseus
