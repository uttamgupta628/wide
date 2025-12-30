const OurMissionSection = () => {
  return (
    <section className="w-full bg-[#fbf6f3] py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h4 className="text-[55px] font-semibold text-bold mb-2">
          OUR <span className="text-[#FFCD29]">MISSION</span>
        </h4>

        <h2 className="text-2xl md:text-[42px] font-medium text-black mb-6">
          To Maximize Your Brand’s Reach and Impact
        </h2>

        <p className="text-black text-2xl max-w-5xl mx-auto mb-20 leading-relaxed">
          Our mission is to empower businesses by expanding their reach and
          strengthening their market presence through innovative advertising,
          meaningful audience connections, and strategic creativity that
          elevates brands above the competition and drives lasting growth.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
          {[
            {
              no: "01",
              title: "STRATEGIC ADVERTISING",
              text: "Strategically advertising uses research, creativity, and planning to deliver targeted messages that reach the right audience and achieve measurable business goals.",
            },
            {
              no: "02",
              title: "INNOVATIVE SOLUTIONS",
              text: "Innovative solutions combine creativity, technology, and strategy to solve challenges, improve efficiency, and help businesses grow in competitive markets with long-term sustainability.",
            },
            {
              no: "03",
              title: "MEASURABLE RESULTS",
              text: "Measurable results focus on clear metrics and data-driven insights to track performance, prove success, and guide smarter business decisions.",
            },
          ].map((card) => (
            <div key={card.no} className="relative text-left group h-full">
              {/* STAR + NUMBER */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 text-[#FFCD29] text-xl z-20">
                ★ <span className="text-5xl">{card.no}</span>
              </div>

              {/* CARD */}
              <div className="relative h-full overflow-hidden border-2 border-[#FFCD29] rounded-lg px-4 py-8 bg-white transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl cursor-pointer flex flex-col">
                {/* LIQUID FILL */}
                <div className="absolute inset-0 bg-[#FFCD29] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col h-full transition-colors duration-300 group-hover:text-black">
                  <h3 className="font-semibold text-[28px] mb-4">
                    {card.title}
                  </h3>

                  <p className="text-xl leading-relaxed">{card.text}</p>

                  {/* Spacer (keeps layout stable if you add buttons later) */}
                  <div className="flex-grow" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
