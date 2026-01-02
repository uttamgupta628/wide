import React from "react";
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
const pandal = [ p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16];


const northImages = [n1 , n2, n3, n4, n5, n6, n7];

const eastImages = [ e1, e2, e3, e4, e5, e6, e7, e8];

const southImages = [ s1, s2, s3, s4];

const transitImages = [ m1, m2, m3, m4, m5, m6];

const rwaImages = [ d1, d2, d3];

const wallWrapImages = [ w1, w2, w3, w4, w5];

const festivalImages = [ f1, f2, f3, f4];

const Section = ({
  title,
  images,
}: {
  title: string;
  images: string[];
}) => {
  return (
    <section className="mb-20">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-1 h-10 bg-yellow-400" />
        <div className="bg-white px-6 py-3 rounded-lg shadow-sm text-xs sm:text-sm font-semibold uppercase tracking-wide">
          {title}
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const Portfolio: React.FC = () => {
  return (
    <div className="bg-[#faf7f4] min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-3">Brand Activations</h1>
        <p className="text-gray-600 max-w-2xl mb-16">
          Engaging and experimental campaigns designed to bring your brand to
          life and contact with your audience
        </p>

        <Section title="Conventional Outdoor - North" images={northImages} />
        <Section
          title="Conventional Outdoor Campaign - East"
          images={eastImages}
        />
        <Section
          title="Conventional Outdoor Campaign - South"
          images={southImages}
        />
        <Section title="Transit Media" images={transitImages} />
        <Section title="RWA Digital Screens" images={rwaImages} />
        <Section title="Wall Wraps in India" images={wallWrapImages} />
        <Section title="INNOVATIVE BRANDING DURING FESTIVALS" images={festivalImages} />
        <Section title="BRAND INTEGRATION WITH THE RENOWNED PANDALS" images={pandal} />
      </div>
    </div>
  );
};

export default Portfolio;
