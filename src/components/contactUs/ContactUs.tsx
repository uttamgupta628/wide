import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-[#FAF7F5]  pb-4">
      <div className="bg-[#3C3533] text-white text-sm px-6 py-4 mb-12 tracking-wide w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
  Home &gt; Contact Us
</div>

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-10">
          Get in touch with us. We’re here to <br /> assist you
        </h2>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold mb-4">Contact us</h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Message <span className="text-gray-400">(Optional)</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFC907] text-black font-semibold py-3 rounded-md hover:bg-yellow-500 transition"
              >
                Send us
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-[#E6E6E6] rounded-xl p-6">
            <h3 className="font-semibold mb-6">Contact info.</h3>

            <div className="space-y-6 text-sm">
              <div>
                <p className="font-medium mb-1">Email address</p>
                <p className="text-gray-700">
                  nirmaly@widehorizons.co.in
                </p>
              </div>

              <div>
                <p className="font-medium mb-1">Office Locations</p>
                <p className="text-gray-700">
                  Godrej Waterside, Tower – II, 12th Floor <br />
                  Block-DP, Sector-V, Kolkata – 700091
                </p>
              </div>

              <div>
                <p className="font-medium mb-1">Mobile Number</p>
                <p className="text-gray-700">
                  +91-9831047413 / 8910655795
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
