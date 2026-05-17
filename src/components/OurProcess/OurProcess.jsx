import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaIndustry, FaCheckCircle, FaTruck } from "react-icons/fa";

const OurProcess = () => {
  const steps = [
    {
      id: "1",
      title: "Sourcing",
      desc: "Carefully selecting premium raw materials from trusted global partners.",
      icon: <FaLeaf size={24} />,
    },
    {
      id: "2",
      title: "Manufacturing",
      desc: "Processing materials using state-of-the-art, sustainable technology.",
      icon: <FaIndustry size={24} />,
    },
    {
      id: "3",
      title: "Quality Control",
      desc: "Rigorous testing to ensure every product meets our gold standards.",
      icon: <FaCheckCircle size={24} />,
    },
    {
      id: "4",
      title: "Logistics",
      desc: "Fast, reliable, and safe delivery right to your doorstep.",
      icon: <FaTruck size={24} />,
    },
  ];

  // Framer Motion Variants for Staggered Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays each card's animation slightly
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  };

  return (
    <section className="bg-gray-50 py-20 px-4 overflow-hidden">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Our
          </span>{" "}
          Process
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full origin-left"
        ></motion.div>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Discover the journey of our products from raw materials to final delivery.
        </p>
      </div>

      {/* Steps Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative"
      >
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants} 
            className="relative text-center group cursor-pointer"
          >
            {/* Connecting Line (Hidden on mobile, visible on desktop) */}
            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gray-200 -z-10 group-hover:bg-orange-300 transition-colors duration-500"></div>
            )}

            {/* Icon Wrapper */}
            <div className="relative w-28 h-28 mx-auto mb-6">
              {/* Outer Dashed Circle - Rotates on hover */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 group-hover:border-orange-500 group-hover:rotate-180 transition-all duration-700 ease-in-out"></div>

              {/* Inner Solid Circle & Icon */}
              <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:bg-gradient-to-br from-orange-400 to-red-500 group-hover:text-white text-orange-500 transition-all duration-300 transform group-hover:scale-105">
                {step.icon}
              </div>

              {/* Step Number Badge */}
              <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-gray-50 shadow-sm transition-transform duration-300 group-hover:scale-110">
                {step.id}
              </div>
            </div>

            {/* Text Content */}
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed px-4">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OurProcess;