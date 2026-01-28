import React, { useRef, useState } from "react";
import { easeOut, motion, useInView } from "framer-motion";
import { Briefcase, Users, TrendingUp, Award, Target, Lightbulb } from "lucide-react";
import Breadcrumb from "../Global/Breadcrumb";
import bgImg from "../../assets/Group 11.png";

const CareerPage: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const isFormInView = useInView(formRef, { once: false, amount: 0.3 });

  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    position: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleSubmit = async () => {
    // Validate required fields
    if (
      !formData.fullName ||
      !formData.emailAddress ||
      !formData.phoneNumber ||
      !formData.position ||
      !formData.experience
    ) {
      setSubmitStatus({
        type: "error",
        message:
          "Please fill in all required fields (Name, Email, Phone, Position, Experience)",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", import.meta.env.VITE_WEB3FORMS_API_KEY);
      formDataToSend.append("name", formData.fullName);
      formDataToSend.append("email", formData.emailAddress);
      formDataToSend.append("phone", formData.phoneNumber);
      formDataToSend.append("subject", `Job Application: ${formData.position}`);
      formDataToSend.append(
        "message",
        `Position: ${formData.position}\nExperience: ${formData.experience} years\n\nCover Letter:\n${formData.coverLetter || "No cover letter provided"}`,
      );
      
      if (formData.resume) {
        formDataToSend.append("attachment", formData.resume);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Application submitted successfully! We'll review your application and get back to you soon.",
        });
        // Reset form
        setFormData({
          fullName: "",
          emailAddress: "",
          phoneNumber: "",
          position: "",
          experience: "",
          coverLetter: "",
          resume: null,
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: "Failed to submit application. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
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

  const benefits = [
    {
      icon: <Lightbulb size={40} />,
      title: "Creative Freedom",
      description: "Express your creativity and bring innovative ideas to life",
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Growth Opportunities",
      description: "Continuous learning and career development programs",
    },
    {
      icon: <Users size={40} />,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive environment",
    },
    {
      icon: <Award size={40} />,
      title: "Recognition & Rewards",
      description: "Your hard work and dedication are valued and celebrated",
    },
    {
      icon: <Target size={40} />,
      title: "Impactful Work",
      description: "Contribute to campaigns that make a real difference",
    },
    {
      icon: <Briefcase size={40} />,
      title: "Work-Life Balance",
      description: "Flexible work arrangements and employee well-being focus",
    },
  ];

  return (
    <div className="w-full bg-white">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      {/* Hero Section with Floating Animation */}
      <section className="bg-gradient-to-r from-[#FFDA00] to-white relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold uppercase text-black mb-6"
            >
              Join Our <span className="text-white">Creative Team</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              Be part of a dynamic team that's shaping the future of branding
              and advertising. We're looking for passionate, creative
              individuals to grow with us.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-black/10 rounded-full blur-3xl"
        />
      </section>

      {/* Why Join Us Section with Stagger Animation */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Why Work With <span className="text-[#FFDA00]">Us?</span>
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          >
            Discover the opportunities and benefits that make Wide Horizons an
            exceptional place to build your career
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#FFDA00] hover:shadow-2xl transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-[#FFDA00] mb-4 group-hover:text-black transition-colors duration-300"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#FFDA00] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Decorative animated circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-[#FFDA00]/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-black/5 rounded-full blur-3xl pointer-events-none"
        />
      </section>

      {/* Application Form Section */}
      <div
        ref={formRef}
        className="relative flex items-center justify-center py-20 px-6 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImg}
            alt="Application Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Form Container */}
        <motion.div
          variants={formVariants}
          initial="hidden"
          animate={isFormInView ? "visible" : "hidden"}
          className="relative z-10 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-3xl"
        >
          {/* Heading */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={
              isFormInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }
            }
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              Apply Now
            </h2>
            <p className="text-gray-600">
              Take the first step towards joining our creative team
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* Full Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <motion.div
                custom={0}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
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
                animate={isFormInView ? "visible" : "hidden"}
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

            {/* Phone Number and Position Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Number */}
              <motion.div
                custom={2}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
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

              {/* Position */}
              <motion.div
                custom={3}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
              >
                <label
                  htmlFor="position"
                  className="block text-base font-medium text-black mb-2"
                >
                  Position Applying For <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="e.g., Graphic Designer"
                  required
                  className="w-full px-4 py-3 border-2 border-black rounded-xl focus:ring-2 focus:ring-[#FFDA00] focus:border-transparent outline-none transition-all duration-300 text-[#686775]"
                />
              </motion.div>
            </div>

            {/* Experience and Resume Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Years of Experience */}
              <motion.div
                custom={4}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
              >
                <label
                  htmlFor="experience"
                  className="block text-base font-medium text-black mb-2"
                >
                  Years of Experience <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g., 3"
                  required
                  className="w-full px-4 py-3 border-2 border-black rounded-xl focus:ring-2 focus:ring-[#FFDA00] focus:border-transparent outline-none transition-all duration-300 text-[#686775]"
                />
              </motion.div>

              {/* Resume Upload */}
              <motion.div
                custom={5}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
              >
                <label
                  htmlFor="resume"
                  className="block text-base font-medium text-black mb-2"
                >
                  Upload Resume (Optional)
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border-2 border-black rounded-xl focus:ring-2 focus:ring-[#FFDA00] focus:border-transparent outline-none transition-all duration-300 text-[#686775] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#FFDA00] file:text-black hover:file:bg-[#e5c500] file:cursor-pointer"
                />
                {formData.resume && (
                  <p className="text-sm text-gray-600 mt-2">
                    Selected: {formData.resume.name}
                  </p>
                )}
              </motion.div>
            </div>

            {/* Cover Letter */}
            <motion.div
              custom={6}
              variants={inputVariants}
              initial="hidden"
              animate={isFormInView ? "visible" : "hidden"}
            >
              <label
                htmlFor="coverLetter"
                className="block text-base font-medium text-black mb-2"
              >
                Cover Letter (Optional)
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Tell us why you're a great fit for this role..."
                rows={5}
                className="w-full px-4 py-3 border-2 border-black rounded-xl focus:ring-2 focus:ring-[#FFDA00] focus:border-transparent outline-none transition-all duration-300 text-[#686775] resize-none"
              />
            </motion.div>

            {/* Status Message */}
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-red-100 text-red-700 border border-red-300"
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={
                isFormInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
              }
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
              className="flex justify-center"
            >
              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`bg-black hover:bg-[#FFC907] cursor-pointer text-white hover:text-black font-medium text-xl px-12 py-3 rounded-lg shadow-lg transition-all duration-300 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerPage;