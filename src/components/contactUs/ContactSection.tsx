import React, { useRef, useState } from "react";
import { motion, useInView, easeOut } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiBuildingOfficeBold } from "react-icons/pi";

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

  const handleCardClick = (index: number) => {
    switch (index) {
      case 0:
        window.open("https://wa.me/919831047413", "_blank");
        break;
      case 1:
        window.open(
          "https://www.google.com/maps/search/?api=1&query=Godrej+Waterside+Tower+II+12th+Floor+Block+DP+Sector+V+Kolkata+700091",
          "_blank"
        );
        break;
      case 2:
        setShowPhoneOptions(true);
        break;
      case 3:
        window.location.href = "mailto:nirmaly@swidehorizons.co.in";
        break;
    }
  };

  const handlePhoneSelect = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
    setShowPhoneOptions(false);
  };

  const cards = [
    {
      icon: <HiOutlineBuildingOffice2 className="w-12 h-12 text-white" />,
      title: "Registered Office",
      description: "Sector V, Kolkata - 700091",
    },
    {
      icon: <PiBuildingOfficeBold className="w-12 h-12 text-white" />,
      title: "Corporate Office",
      description:
        "Godrej Waterside, Tower-II, 12th Floor, Block-DP, Sector-V, Kolkata - 700091",
    },
    {
      icon: <Phone className="w-12 h-12 text-white" />,
      title: "Phone",
      description: "+91-9831047413 / 9007333399",
    },
    {
      icon: <Mail className="w-12 h-12 text-white" />,
      title: "Email",
      description: "nirmaly@swidehorizons.co.in",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { x: -150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="bg-[#E6E6E6] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-medium text-black mb-2">
            Get in touch with us
          </h2>
          <h3 className="text-3xl md:text-[42px] font-semibold text-[#FFC907]">
            We're here to assist you
          </h3>
        </div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 0 40px 10px rgba(251,191,36,0.35)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => handleCardClick(index)}
              className="bg-[#fff] rounded-2xl p-8 flex flex-col items-center text-center text-black h-full cursor-pointer group"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-[#3D3533] group-hover:bg-[#FFC907] rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                <div className="text-white group-hover:text-black transition-colors duration-300">
                  {card.icon}
                </div>
              </div>

              <h4 className="text-2xl font-medium mb-4">{card.title}</h4>
              <p className="text- md leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Phone Modal */}
      {showPhoneOptions && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setShowPhoneOptions(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-[#48413F] mb-6 text-center">
              Select a number to call
            </h3>

            <div className="space-y-4">
              <button
                onClick={() => handlePhoneSelect("+919831047413")}
                className="w-full bg-[#FFC907] hover:bg-[#e6b506] text-black font-medium py-4 rounded-xl transition-all text-lg"
              >
                +91-9831047413
              </button>
              <button
                onClick={() => handlePhoneSelect("+919007333399")}
                className="w-full bg-[#FFC907] hover:bg-[#e6b506] text-black font-medium py-4 rounded-xl transition-all text-lg"
              >
                +91-9007333399
              </button>
            </div>

            <button
              onClick={() => setShowPhoneOptions(false)}
              className="w-full mt-6 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 rounded-xl transition-all"
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
