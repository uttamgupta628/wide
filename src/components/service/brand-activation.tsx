import React from "react";
import oohImage from "../../assets/Ohh.png";
import billboardImage from "../../assets/ooh1.jpg";

export const Branding: React.FC = () => {
  return (
    <div className="bg-[#F8F6F5] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#3C3533] text-white text-sm px-6 py-2">
        Home &gt; Services &gt; Branding
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Brand Activations</h1>
        <p className="text-gray-700 mb-6">
          Engaging and experimental campaigns designed to bring  your brand to life and contact with your audience 
        </p>

        <div className="w-full h-64 bg-gray-300 rounded-lg mb-12">
          {/* Placeholder for hero image */}
          <img
            src={billboardImage}
            alt="OOH Advertising"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl sm:text-5xl font-bold mb-4">
          Ignite Excitement around your brand
        </h2>
        <p className="text-gray-700 mb-8 sm:text-2xl ">
          Brand activations are powerful in creating immersive, memorable experiences that allow consumers to connect with
your brand in uniques and exciting ways
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <img
              src={oohImage}
              alt="Billboard"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-start gap-8">
            <h3 className="text-2xl font-semibold">Our brand activation services</h3>

            <ul className="space-y-4 text-gray-800">
              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Product Sampling </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Experimental Marketing</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Pop up events</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Event sponshership</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
          Why Choose Brand Activations  ?
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          We deliver despites, how your event talend, meretivey accomplishment
        </p>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {/* High Visibility Card */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
            <div className="p-8 pb-16">
              <h4 className="font-bold text-xl mb-4 text-gray-900">Creative Plannning</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reach a vast number of consumers in strategic locations
              </p>
            </div>
            {/* Diagonal accent */}
            <div className="absolute bottom-0 right-0 w-32 h-32">
              <div className="absolute bottom-0 right-0 w-full h-full bg-[#AF9E9E] transform origin-bottom-right" 
                   style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}>
              </div>
            </div>
          </div>

          {/* Targeted Reach Card */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
            <div className="p-8 pb-16">
              <h4 className="font-bold text-xl mb-4 text-gray-900">Seamless Execution</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Effectively reach  specific demographics and geographics areas
              </p>
            </div>
            {/* Diagonal accent */}
            <div className="absolute bottom-0 right-0 w-32 h-32">
              <div className="absolute bottom-0 right-0 w-full h-full bg-[#AF9E9E] transform origin-bottom-right" 
                   style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}>
              </div>
            </div>
          </div>

          {/* Cost Effective Card */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
            <div className="p-8 pb-16">
              <h4 className="font-bold text-xl mb-4 text-gray-900">Exceptional Results</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Collborate secristeing your competitior cost in advanced
              </p>
            </div>
            {/* Diagonal accent */}
            <div className="absolute bottom-0 right-0 w-32 h-32">
              <div className="absolute bottom-0 right-0 w-full h-full bg-[#AF9E9E] transform origin-bottom-right" 
                   style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 sm:p-8 rounded-lg shadow gap-4">
          {/* TEXT */}
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h2 className="text-gray-700 font-medium text-xl sm:text-2xl">
              Ready to amplify your brand with OOH Advertising
            </h2>
            <p className="text-gray-600">
              Contact us today to start your impactful outdoor advertising campaign
            </p>
          </div>
          {/* BUTTON */}
          <button
            onClick={() => window.location.href = '/contact-us'}
            className="bg-[#3C3533] text-white px-6 py-3 rounded-md hover:bg-gray-800 transition whitespace-nowrap"
          >
            Contact us
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};
