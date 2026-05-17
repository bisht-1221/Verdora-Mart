import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FressFruits from "../../assets/fresh-fruits.png"; 

const Discount = () => {
  const [copied, setCopied] = useState(false);

  // Functional Interactivity: Copies the discount code to the user's clipboard
  const handleCopyCode = () => {
    navigator.clipboard.writeText("WELCOME20");
    setCopied(true);
    
    // Reset the button state after 3 seconds
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <section className="relative overflow-hidden bg-zinc-100 py-16 px-4 md:px-10">
      
      {/* Background Image with continuous floating animation */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-5%] top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-100 bg-right bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: `url(${FressFruits})` }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-[1400px] mx-auto gap-8 md:gap-16">

        {/* Animated 20% Text (Hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -90 }}
          whileInView={{ opacity: 1, x: 0, rotate: -90 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="hidden md:block text-[140px] lg:text-[180px] leading-none text-orange-500/20 font-extrabold transform -rotate-90 select-none drop-shadow-sm"
        >
          20%
        </motion.div>

        {/* Main Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl bg-white/70 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-8 md:p-0 rounded-3xl shadow-xl md:shadow-none border border-white/50 md:border-none"
        >
          <h3 className="text-4xl md:text-5xl text-zinc-800 font-extrabold tracking-tight mb-4">
            First Order <span className="text-orange-500">Discount</span>
          </h3>
          
          <p className="text-zinc-600 text-lg my-6 leading-relaxed">
            Welcome to our store! Enjoy an exclusive <strong className="text-orange-500 text-xl font-bold">20% OFF</strong> on your very first purchase. Start shopping and save big on your favorite fresh products today.
          </p>

          {/* Interactive Promo Code Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            
            {/* Dashed Code Box */}
            <div className="flex items-center justify-center bg-zinc-200/80 rounded-full px-6 py-3.5 border-2 border-dashed border-zinc-400 w-full sm:w-auto relative overflow-hidden">
              <span className="font-mono text-zinc-800 font-bold tracking-widest text-lg relative z-10">
                WELCOME20
              </span>
              {/* Subtle background pulse when copied */}
              <AnimatePresence>
                {copied && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-orange-100"
                  />
                )}
              </AnimatePresence>
            </div>

            {/* ============================================================ */}
            {/* INTERACTIVE BUTTON WITH COLOR CHANGE ON CLICK */}
            {/* ============================================================ */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopyCode}
              layout // Smoothly animates width change if text changes length
              className={`w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white transition-colors duration-300 shadow-lg flex justify-center items-center gap-2 outline-none ring-orange-300 focus:ring-4 ${
                copied 
                  // The color it changes to when clicked (Dark Zinc)
                  ? "bg-zinc-900 shadow-zinc-900/30" 
                  // The default color (Orange Gradient)
                  : "bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-orange-500/40"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    {/* Checkmark Icon */}
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Copied!
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    {/* Copy Icon */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
                    Copy & Shop Now
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Discount;