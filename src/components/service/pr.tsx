import React from "react";
import oohImage from "../../assets/publicrelation.png";
import billboardImage from "../../assets/public2.png";
import Breadcrumb from "../Global/Breadcrumb";

export const Pr: React.FC = () => {
  return (
    <div className="bg-[#F8F6F5]">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Public relations (PR) & News Paper Release" },
        ]}
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Public relations (PR) & News Paper Release
        </h1>
        <p className="text-gray-700 mb-6">
          Strategic public realtions services to enhance your brand ‘s
          reputation and build meaningful connections with your audience
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
          Enhance your brand with strategic public relations
        </h2>
        {/* <p className="text-gray-700 mb-8 sm:text-2xl ">
          Effective PR is key to building credibility , managing your public
          image , and ensuring your brand’s narrative is seen and heard in the
          best possible light
        </p> */}

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <img
              src={oohImage}
              alt="Billboard"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-start gap-8">
            <h3 className="text-2xl font-semibold">
              Our Public Relations services
            </h3>

            <ul className="space-y-4 text-gray-800">
              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Press Realeases </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Crisis Management</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Event PR</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-black text-lg">✓</span>
                <span>Press Meet</span>
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
            Why Choose Celebrity Management ?
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            We deliver despites, how your event talend, meretivey accomplishment
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {/* High Visibility Card */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
              <div className="p-8 pb-16">
                <h4 className="font-bold text-xl mb-4 text-gray-900">
                  Media Expertise
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Building strong realtionships with journalists and media
                  outlets
                </p>
              </div>
              {/* Diagonal accent */}
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div
                  className="absolute bottom-0 right-0 w-full h-full bg-[#AF9E9E] transform origin-bottom-right"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                ></div>
              </div>
            </div>

            {/* Targeted Reach Card */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
              <div className="p-8 pb-16">
                <h4 className="font-bold text-xl mb-4 text-gray-900">
                  Reputation Management
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Protecting and enhance your brand’s public image
                </p>
              </div>
              {/* Diagonal accent */}
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div
                  className="absolute bottom-0 right-0 w-full h-full bg-[#AF9E9E] transform origin-bottom-right"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                ></div>
              </div>
            </div>

            {/* Cost Effective Card */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
              <div className="p-8 pb-16">
                <h4 className="font-bold text-xl mb-4 text-gray-900">
                  Crisis Management
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Navigation crisis with effective and timely communication
                </p>
              </div>
              {/* Diagonal accent */}
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div
                  className="absolute bottom-0 right-0 w-full h-full bg-[#AF9E9E] transform origin-bottom-right"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                ></div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 sm:p-8 rounded-lg shadow gap-4">
            {/* TEXT */}
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h2 className="text-gray-700 font-medium text-xl sm:text-2xl">
                Craft stories that resonate, inspire, and elevate your brand
                presence
              </h2>
              <p className="text-gray-600">
                Contact us today to start your impactful pr campaign
              </p>
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
