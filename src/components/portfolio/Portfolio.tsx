import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import n1 from "../../assets/brand1.png";
import n2 from "../../assets/brand2.png";
import n3 from "../../assets/brand3.png";
import n4 from "../../assets/brand4.png";
import n5 from "../../assets/brand5.png";
import n6 from "../../assets/brand6.png";
import n7 from "../../assets/brand7.png";
import e1 from "../../assets/east1.png";
import e2 from "../../assets/east2.png";
import e3 from "../../assets/east3.png";
import e4 from "../../assets/east4.png";
import e5 from "../../assets/east5.png";
import e6 from "../../assets/east6.png";
import e7 from "../../assets/east7.png";
import e8 from "../../assets/east8.png";
import s1 from "../../assets/south1.png";
import s2 from "../../assets/south2.png";
import s3 from "../../assets/south3.png";
import s4 from "../../assets/south4.png";
import m1 from "../../assets/media1.png";
import m2 from "../../assets/media2.png";
import m3 from "../../assets/media3.png";
import m4 from "../../assets/media4.png";
import m5 from "../../assets/media5.png";
import m6 from "../../assets/media6.png";
import d1 from "../../assets/digital.png";
import d2 from "../../assets/digital1.png";
import d3 from "../../assets/digital2.png";
import w1 from "../../assets/wall1.png";
import w2 from "../../assets/wall2.png";
import w3 from "../../assets/wall3.png";
import w4 from "../../assets/wall4.png";
import w5 from "../../assets/wall5.png";
import f1 from "../../assets/fes1.png";
import f2 from "../../assets/fes2.png";
import f3 from "../../assets/fes3.png";
import f4 from "../../assets/fes4.png";
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

const northImages = [n1, n2, n3, n4, n5, n6, n7];
const eastImages = [e1, e2, e3, e4, e5, e6, e7, e8];
const southImages = [s1, s2, s3, s4];
const transitImages = [m1, m2, m3, m4, m5, m6];
const rwaImages = [d1, d2, d3];
const wallWrapImages = [w1, w2, w3, w4, w5];
const festivalImages = [f1, f2, f3, f4];

const Section = ({
  title,
  images,
  index,
}: {
  title: string;
  images: string[];
  index: number;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="mb-24"
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
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent flex items-center gap-3">
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
            className="relative max-w-7xl max-h-[90vh] cursor-default"
          >
            <img
              src={selectedImage}
              alt={title}
              className="w-full h-full object-contain rounded-lg"
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

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf7f4] via-white to-[#f5f5f5] relative overflow-hidden">
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

      <div className="relative z-10 py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#FFDA00] text-black px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg"
            >
              <Sparkles size={18} />
              Our Work
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
            >
              Brand Activations
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Engaging and experimental campaigns designed to bring your brand
              to life and connect with your audience through memorable
              experiences
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FFDA00] to-transparent mx-auto mt-8"
            />
          </motion.div>

          {/* Sections */}
          <Section
            title="Conventional Outdoor - North"
            images={northImages}
            index={0}
          />
          <Section
            title="Conventional Outdoor Campaign - East"
            images={eastImages}
            index={1}
          />
          <Section
            title="Conventional Outdoor Campaign - South"
            images={southImages}
            index={2}
          />
          <Section title="Transit Media" images={transitImages} index={3} />
          <Section
            title="RWA Digital Screens"
            images={rwaImages}
            index={4}
          />
          <Section
            title="Wall Wraps in India"
            images={wallWrapImages}
            index={5}
          />
          <Section
            title="Innovative Branding During Festivals"
            images={festivalImages}
            index={6}
          />
          <Section
            title="Brand Integration with Renowned Pandals"
            images={pandal}
            index={7}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;