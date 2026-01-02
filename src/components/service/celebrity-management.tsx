import React from "react";

/* ================== IMAGE IMPORTS ================== */
import heroImg from "../../assets/cele1.png";

// Celebrities
import madhumita from "../../assets/cele2.png";
import shiboprosad from "../../assets/cele3.png";
import trina from "../../assets/cele4.png";
import oindrila from "../../assets/cele5.png";

// Press Meets
import pressMain from "../../assets/cele6.png";
import press1 from "../../assets/cele7.png";
import press2 from "../../assets/cele8.png";

// Meet & Greet
import meet1 from "../../assets/cele9.png";
import meet2 from "../../assets/cele10.png";
import meet3 from "../../assets/cele11.png";
import meet4 from "../../assets/cele12.png";
import meet5 from "../../assets/cele13.png";

/* ================================================== */

const Management: React.FC = () => {
  return (
    <div className="bg-[#faf7f4] py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ================= HEADER ================= */}
        <section>
          <h1 className="text-3xl font-bold mb-2">Celebrity management</h1>
          <p className="text-gray-600 max-w-3xl">
            Expert management of celebrity partnerships and appearances to boost
            your brand’s impact and visibility
          </p>
        </section>

        {/* ================= HERO SECTION ================= */}
        <section className="bg-[#D0D0D0] rounded-xl p-12 sm:p-20 grid md:grid-cols-2 gap-2 items-center justify-between">
          <div className="relative w-fit">
            <div className="absolute -left-4 -top-4  h-full w-50 bg-yellow-400 rounded-bl-[120px]" />
            <img
              src={heroImg}
              alt="Celebrity"
              className="relative z-10 rounded-bl-[120px] rounded-tr-xl max-w-70"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              The ultimate platform for planning and promoting successful events
            </h2>
            <p className="text-gray-700 max-w-xl">
              The ultimate platform for planning and promoting successful events,
              bringing tools, insights, and audiences together to simplify
              coordination, boost visibility, drive engagement, and deliver
              memorable experiences every time, globally effortlessly.
            </p>
          </div>
        </section>

        {/* ================= CELEBRITY GRID ================= */}
        <section className="grid sm:grid-cols-2 gap-14">
          {[
            { img: madhumita, name: "Madhumita Sarkar" },
            { img: shiboprosad, name: "Shiboprosad Mukherjee" },
            { img: trina, name: "Trina Saha" },
            { img: oindrila, name: "Oindrila Sen" },
          ].map((celeb, i) => (
            <div key={i} className="flex items-center gap-6">
              <img
                src={celeb.img}
                className="w-44 h-60 object-cover rounded-xl"
                alt={celeb.name}
              />
              <div className="flex items-center gap-3">
                <div className="w-1 h-12 bg-yellow-400" />
                <div className="bg-white px-6 py-3 rounded-lg shadow text-sm font-medium">
                  {celeb.name}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ================= PRESS MEETS ================= */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Press Meets</h2>
          <p className="text-gray-600 max-w-3xl mb-8">
            Press meets are organized media briefings where officials share news,
            answer questions, and shape public communication with journalists.
          </p>

          <div className="mb-8">
            <img
              src={pressMain}
              alt="Press Meet"
              className="rounded-xl w-full object-cover"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <img src={press1} className="rounded-xl" alt="Press" />
            <img src={press2} className="rounded-xl" alt="Press" />
          </div>
        </section>

        {/* ================= MEET & GREET ================= */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-10 bg-yellow-400" />
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm text-sm font-semibold uppercase">
              Meet & Greet with Celebrity
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[meet1, meet2, meet3, meet4, meet5].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Meet & Greet"
                className="rounded-xl h-44 w-full object-cover hover:scale-105 transition"
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Management;
