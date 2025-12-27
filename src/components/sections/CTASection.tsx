export const CTASection = () => {
  return (
    <section className="px-4 sm:px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-linear-to-r from-yellow-200 to-yellow-100 rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-full bg-yellow-400 transform -skew-x-12"></div>
          <div className="relative z-10 flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to make an impact in the real world?</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              At Wide Horizons we take ownersing of your brand's success us if it were our own. From strategic planning to flawless execution, we are dedicated to delivering results that matter
            </p>
          </div>
          <button className="relative z-10 bg-gray-900 text-yellow-400 px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition">
            Start your Campaign
          </button>
        </div>
      </div>
    </section>
  );
};