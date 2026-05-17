import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert("Message sent successfully! We'll get back to you soon.");
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: "Visit Us", detail: "123 Fresh Street, Green Valley, Mumbai" },
    { icon: <FaPhoneAlt />, title: "Call Us", detail: "+91 98765 43210" },
    { icon: <FaEnvelope />, title: "Email Us", detail: "hello@verdoramart.com" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 py-24 relative overflow-hidden">
      
      {/* 3D Floating Background Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-orange-400/20 blur-[80px] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-green-400/20 blur-[100px] rounded-full pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-zinc-900 mb-4"
          >
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Connect</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-zinc-600">
            Have a question about our fresh produce? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Left: Contact Info (3D Floating Cards) */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-zinc-100 hover:shadow-orange-500/20 transition-all duration-300 flex items-center gap-6 group"
              >
                <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 text-2xl group-hover:bg-gradient-to-br from-orange-400 to-red-500 group-hover:text-white transition-all duration-500 shadow-inner">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-zinc-800">{info.title}</h3>
                  <p className="text-zinc-500 mt-1">{info.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.5 }}
            className="lg:w-2/3 bg-white p-10 rounded-[40px] shadow-2xl shadow-zinc-200/50 border border-zinc-100 relative"
          >
            <h2 className="text-3xl font-bold text-zinc-800 mb-8">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 relative group">
                  <input 
                    type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-zinc-50 border-2 border-transparent focus:border-orange-400 rounded-2xl px-6 py-4 outline-none transition-all peer" placeholder="Your Name" 
                  />
                </div>
                <div className="flex-1 relative">
                  <input 
                    type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-zinc-50 border-2 border-transparent focus:border-orange-400 rounded-2xl px-6 py-4 outline-none transition-all" placeholder="Your Email" 
                  />
                </div>
              </div>
              
              <div className="relative">
                <textarea 
                  required rows="5" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-zinc-50 border-2 border-transparent focus:border-orange-400 rounded-2xl px-6 py-4 outline-none transition-all resize-none" placeholder="How can we help you today?" 
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={isSubmitting}
                className="w-full md:w-auto self-start bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg shadow-orange-500/30 flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : <><FaPaperPlane /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;