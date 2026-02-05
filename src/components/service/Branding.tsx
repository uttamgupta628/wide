import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "../ui/moving-border";
import p1 from "../../assets/pan1.png";
import p2 from "../../assets/pan2.png";
import p3 from "../../assets/pan3.png";
import p4 from "../../assets/pan4.png";
import p5 from "../../assets/pan5.png";
import p6 from "../../assets/pan6.png";
import p7 from "../../assets/pan7.png";
import p8 from "../../assets/pan8.png";
import p9 from "../../assets/pan9.png";
import p10 from "../../assets/pan10.png";
import p11 from "../../assets/pan11.png";
import p12 from "../../assets/pan12.png";
import p13 from "../../assets/pan13.png";
import p14 from "../../assets/pan14.png";
import p15 from "../../assets/pan15.png";
import p16 from "../../assets/pan16.png";

const pandal = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
];

const Section = ({
  title,
  images,
  index,
  id,
}: {
  title: string;
  images: string[];
  index: number;
  id: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <motion.section
        id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="mb-8 scroll-mt-24 mt-8"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10 group"
        >
          <motion.div
            whileHover={{ scaleY: 1.2 }}
            className="w-1.5 h-16 bg-gradient-to-b from-[#FFDA00] to-[#FFA500] rounded-full"
          />
          <div className="relative">
            <div className="bg-gradient-to-r from-white to-gray-50 px-8 py-4 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
              <h2 className="!text-lg font-bold uppercase tracking-wide bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent flex items-center gap-3">
                {title}
                <ChevronRight
                  size={24}
                  className="text-[#FFDA00] group-hover:translate-x-2 transition-transform duration-300"
                />
              </h2>
            </div>
            {/* Decorative element */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-3 -top-3 w-6 h-6 bg-[#FFDA00] rounded-full blur-sm"
            />
          </div>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((img, imgIndex) => (
            <motion.div
              key={imgIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: imgIndex * 0.05,
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(imgIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedImage(img)}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <motion.img
                  src={img}
                  alt={`${title} - ${imgIndex + 1}`}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === imgIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"
                />

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#FFDA00]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Bottom accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: imgIndex * 0.05 + 0.2 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-[#FFDA00] via-[#FFA500] to-[#FFDA00] origin-left"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[90vh] cursor-default"
          >
            <img
              src={selectedImage}
              alt={title}
              className="w-full h-full max-h-[90vh] object-contain rounded-lg"
            />
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFDA00] transition-colors duration-300 shadow-lg"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const Branding: React.FC = () => {
  const location = useLocation();

  // Handle smooth scrolling to sections based on hash
  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-[#FFDA00]/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-40 left-20 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 pt-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* OOH Main Section */}
          <div className="" id="ooh-section">
            {/* OOH Main Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center scroll-mt-24"
            >
              <Button
                borderRadius="999px"
                className="
      px-20 py-4
      bg-white
      text-gray-900
      text-lg sm:text-2xl
      font-bold
      border-neutral-200
      shadow-md
      hover:shadow-lg
      transition-all
    "
                containerClassName="border-[#FFDA00]"
                borderClassName="bg-[radial-gradient(#FFDA00_60%,transparent_80%)]"
                duration={6000}
              >
                Branding
              </Button>
            </motion.div>

            {/* Branding Subsections */}

            <Section
              title="Brand Integration with Renowned Pandals"
              images={pandal}
              index={7}
              id="pandals"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
