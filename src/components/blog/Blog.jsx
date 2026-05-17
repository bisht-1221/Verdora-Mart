import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  // Mock Blog Data
  const posts = [
    {
      id: 1,
      title: "10 Reasons to Switch to Organic Produce Today",
      excerpt: "Discover the hidden health benefits of eating organic, and why your body will thank you for making the switch.",
      date: "May 12, 2026",
      category: "Health",
      image: "https://images.unsplash.com/photo-1490818387583-1b5f22229fd9?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "How to Store Vegetables to Make Them Last Longer",
      excerpt: "Tired of your greens wilting in two days? Try these incredibly simple storage hacks to extend their life.",
      date: "May 08, 2026",
      category: "Tips & Tricks",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "The Journey of Our Strawberries: Farm to Table",
      excerpt: "Take a behind-the-scenes look at how we source our premium strawberries directly from local farmers.",
      date: "May 01, 2026",
      category: "Our Story",
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "5 Delicious Summer Smoothies to Beat the Heat",
      excerpt: "Cool down this summer with these quick, easy, and nutrient-packed fruit smoothie recipes.",
      date: "April 28, 2026",
      category: "Recipes",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Why Knowing Your Farmer Matters",
      excerpt: "Community-supported agriculture isn't just a buzzword. It's the key to a sustainable future.",
      date: "April 20, 2026",
      category: "Community",
      image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Superfoods You Need in Your Pantry Right Now",
      excerpt: "Boost your immune system and your energy levels with these easily accessible superfoods.",
      date: "April 15, 2026",
      category: "Health",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-24">
      <div className="max-w-[1400px] mx-auto px-5">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-zinc-900 mb-4"
          >
            Fresh <span className="text-orange-500">Insights</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-zinc-600">
            Recipes, farm stories, and tips for a healthier lifestyle.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <motion.div 
          variants={containerVariants} initial="hidden" animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {posts.map((post) => (
            <motion.article 
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 cursor-pointer flex flex-col group border border-zinc-100"
            >
              {/* Image Container with 3D Image Zoom */}
              <div className="h-60 w-full overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-orange-500 shadow-sm">
                  {post.category}
                </div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Box */}
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-sm text-zinc-400 font-medium mb-3 block">{post.date}</span>
                <h3 className="text-2xl font-bold text-zinc-800 mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-zinc-600 mb-6 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Simulated 3D Button */}
                <div className="mt-auto inline-flex items-center text-orange-500 font-bold group-hover:translate-x-2 transition-transform duration-300">
                  Read Article 
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Blog;