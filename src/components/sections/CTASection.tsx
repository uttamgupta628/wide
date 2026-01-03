export const CTASection = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden  px-8 py-10 sm:px-12 sm:py-12
          bg-gradient-to-r from-[#FFEB77] to-[#FFFBE2]
          flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          {/* Left diagonal stripe */}
          <div
            className="absolute top-0 left-0 h-full w-32 bg-[#FFD900]"
            style={{
              clipPath: "polygon(0 40%, 100% 0, 0 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3">
              Ready to make an impact in the real world?
            </h3>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              At Wide Horizons we take ownership of your brand’s success as if
              it were our own. From strategic planning to flawless execution, we
              are dedicated to delivering results that matter
            </p>
          </div>

          {/* Button */}
          <div className="relative z-10">
            <button
              className="bg-black text-[#FFD900] font-semibold
  px-6 py-3 rounded-md
  transition-all duration-300
  hover:bg-[#FFD900] hover:text-black"
            >
              Start your Campaign
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
