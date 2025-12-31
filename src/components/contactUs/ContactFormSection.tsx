import React, { useRef, useState } from "react";
import { easeOut, motion, useInView } from "framer-motion";
import bgImg from "../../assets/Group 11.png";

const ContactFormSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.fullName || !formData.emailAddress || !formData.phoneNumber) {
      alert(
        "Please fill in all required fields (Full Name, Email, Phone Number)"
      );
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Hello! I'm interested in your services.

*Name:* ${formData.fullName}
*Email:* ${formData.emailAddress}
*Phone:* ${formData.phoneNumber}
${formData.message ? `*Message:* ${formData.message}` : ""}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp number (remove any spaces or special characters)
    const whatsappNumber = "919831047613"; // Added country code 91 for India

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");
  };

  const formVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: easeOut,
      },
    },
  };

  const inputVariants = {
    hidden: {
      x: -30,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
        delay: custom * 0.15,
      },
    }),
  };

  return (
    <div className="relative flex items-center justify-center py-16 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImg}
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Form Container */}
      <motion.div
        ref={ref}
        variants={formVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-8 w-full max-w-2xl"
      >
        {/* Heading */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-black text-center mb-12"
        >
          Contact us
        </motion.h2>

        <div className="space-y-6">
          {/* Full Name and Email Address Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <motion.div
              custom={0}
              variants={inputVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <label
                htmlFor="fullName"
                className="block text-base font-medium text-black mb-2"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 border-2 border-black rounded-xl focus:ring-2 focus:ring-[#FFDA00] focus:border-transparent outline-none transition-all duration-300 text-[#686775]"
              />
            </motion.div>

            {/* Email Address */}
            <motion.div
              custom={1}
              variants={inputVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <label
                htmlFor="emailAddress"
                className="block text-base font-medium text-black mb-2"
              >
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 border-2 border-black rounded-xl focus:ring-2 focus:ring-[#FFDA00] focus:border-transparent outline-none transition-all duration-300 text-[#686775]"
              />
            </motion.div>
          </div>

          {/* Phone Number */}
          <motion.div
            custom={2}
            variants={inputVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <label
              htmlFor="phoneNumber"
              className="block text-base font-medium text-black mb-2"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="w-full px-4 py-3 border-2 border-black rounded-xl focus:ring-2 focus:ring-[#FFDA00] focus:border-transparent outline-none transition-all duration-300 text-[#686775]"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            custom={3}
            variants={inputVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <label
              htmlFor="message"
              className="block text-base font-medium text-black mb-2"
            >
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={5}
              className="w-full px-4 py-3 border-2 border-black rounded-xl focus:ring-2 focus:ring-[#FFDA00] focus:border-transparent outline-none transition-all duration-300 text-[#686775]"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={handleSubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-[#FFC907] cursor-pointer text-white hover:text-black font-medium text-xl px-12 py-3 rounded-lg shadow-lg transition-all duration-300"
            >
              Send us
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactFormSection;
