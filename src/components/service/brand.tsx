import React from "react";
import oohImage from "../../assets/brand.png";
import billboardImage from "../../assets/brandin.png";
import Breadcrumb from "../Global/Breadcrumb";
// import Branding from "./Branding";

export const Brand: React.FC = () => {
  return (
    <div className="bg-[#F8F6F5]">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Branding" },
        ]}
      />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Branding </h1>
        <p className="text-gray-700 mb-6">
          Branding that connects, engages, and inspires.
        </p>

        <div className="group relative w-full h-120 overflow-hidden rounded-3xl shadow-lg">
          <img
            src={billboardImage}
            alt="OOH Advertising"
            className="w-full h-120 object-cover rounded-3xl transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-700 group-hover:bg-black/45"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl sm:text-5xl font-bold mb-4">
          Ignite Excitement around your brand
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <img
              src={oohImage}
              alt="Billboard"
              className="rounded-lg w-full h-full"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-start gap-8">
            <h3 className="text-2xl font-semibold">Branding </h3>

            <ul className="space-y-4 text-gray-800">
              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Branding During Festival</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Store Branding</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Inshop Branding </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Office Branding</span>
              </li>
              
            </ul>
          </div>
        </div>
        {/* <Branding /> */}
      </section>

      {/* Why Choose Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Why Choose Brand Activations ?
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            We deliver despites, how your event talend, meretivey accomplishment
          </p> */}

          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
              <div className="p-8 pb-16">
                <h4 className="font-bold text-xl mb-4 text-gray-900">
                  Drive Engagement
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Capture attention with fun interactive brand experiences
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div
                  className="absolute bottom-0 right-0 w-full h-full bg-[#AF9E9E] transform origin-bottom-right"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
              <div className="p-8 pb-16">
                <h4 className="font-bold text-xl mb-4 text-gray-900">
                  Brand Awarness
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Increase your brand visibility and reach a wider audience
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div
                  className="absolute bottom-0 right-0 w-full h-full bg-[#AF9E9E] transform origin-bottom-right"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
              <div className="p-8 pb-16">
                <h4 className="font-bold text-xl mb-4 text-gray-900">
                  Generate Buzz
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Create a shareable moments that get people talking about your
                  brand
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div
                  className="absolute bottom-0 right-0 w-full h-full bg-[#AF9E9E] transform origin-bottom-right"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                ></div>
              </div>
            </div>
          </div> */}

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 sm:p-8 rounded-lg shadow gap-4">
            {/* TEXT */}
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h2 className="text-gray-700 font-medium text-xl sm:text-2xl">
                Give your brand the spotlight it deserves through innovative, high-impact branding
              </h2>
             
            </div>
            {/* BUTTON */}
            <button
              onClick={() => (window.location.href = "/contact-us")}
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
