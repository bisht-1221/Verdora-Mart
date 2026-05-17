import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaUsers, FaStore, FaAward } from 'react-icons/fa';

const About = () => {
  // Animation Variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Mock Data
  const stats = [
    { id: 1, icon: <FaStore />, count: "15+", label: "Store Locations" },
    { id: 2, icon: <FaUsers />, count: "50k+", label: "Happy Customers" },
    { id: 3, icon: <FaLeaf />, count: "100%", label: "Organic Sourced" },
    { id: 4, icon: <FaAward />, count: "25+", label: "Local Farm Partners" },
  ];

  const team = [
    { id: 1, name: "Shyam Singh", role: "Founder & CEO", image: " " },
    { id: 2, name: "Vansh & Gourav ", role: "Head of Operations", image: "" },
    { id: 3, name: "Vishal ", role: "Quality Assurance", image: "" },
  ];

  return (
    <div className="bg-zinc-50 min-h-screen overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 lg:py-32 bg-white">
        {/* Background Decorative Blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-5 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              Welcome to VerdoraMart
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-zinc-900 mb-6">
              Nourishing Communities, <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">One Basket at a Time.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              We believe that everyone deserves access to fresh, high-quality, and sustainably sourced food. We're more than just a grocery store; we're your neighborhood partner in healthy living.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="py-20 max-w-[1400px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="lg:w-1/2 relative group"
          >
            <div className="absolute inset-0 bg-orange-500 rounded-3xl translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop" 
              alt="Fresh produce market" 
              className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
            />
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="lg:w-1/2"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-zinc-800 mb-6 relative inline-block">
              Our Roots
              <span className="absolute left-0 -bottom-2 w-1/2 h-1.5 bg-orange-500 rounded-full"></span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-zinc-600 mb-5 leading-relaxed text-lg">
              Started in 2020 out of a small garage, VerdoraMart was born from a simple frustration: it was too hard to find genuinely fresh, chemical-free produce without paying exorbitant premium prices.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-zinc-600 leading-relaxed text-lg mb-8">
              We started connecting directly with local farmers, cutting out the middlemen, and ensuring that produce went from farm to table in less than 24 hours. Today, that same garage-startup ethos drives everything we do.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-zinc-100 border-l-4 border-l-green-500">
                <h4 className="font-bold text-zinc-800 text-lg mb-1">Sustainability</h4>
                <p className="text-zinc-500 text-sm">Zero-waste packaging initiatives.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-zinc-100 border-l-4 border-l-orange-500">
                <h4 className="font-bold text-zinc-800 text-lg mb-1">Community</h4>
                <p className="text-zinc-500 text-sm">Supporting local agriculture.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. ANIMATED STATS SECTION */}
      <section className="bg-zinc-900 py-16 mt-10">
        <div className="max-w-[1400px] mx-auto px-5">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
          >
            {stats.map((stat) => (
              <motion.div key={stat.id} variants={fadeInUp} className="flex flex-col items-center">
                <div className="text-orange-500 text-4xl mb-4 p-4 bg-white/10 rounded-full">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-extrabold text-white mb-2">{stat.count}</h3>
                <p className="text-zinc-400 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="py-24 max-w-[1400px] mx-auto px-5 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4"
        >
          Meet The <span className="text-orange-500">Team</span>
        </motion.h2>
        <p className="text-zinc-600 mb-16 max-w-xl mx-auto">The passionate individuals working tirelessly to bring the best to your table.</p>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {team.map((member) => (
            <motion.div 
              key={member.id} 
              variants={fadeInUp} 
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="h-[400px] w-full overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              {/* Interactive Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-orange-400 font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
};

export default About;