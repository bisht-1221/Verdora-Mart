import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import Productlist from '../productlist/products';
import Card from '../cards/Card';
import Button from '../Button/Button';

const Product = () => {
    const categories = [
        'All', 'Fruits', 'Vegetables', 'Dairy', 'Icecream', 'Chocolate'
    ];

    const navigate = useNavigate();
    const location = useLocation();

    // Check if we are currently on the Home page or the full Products page
    const isHomePage = location.pathname === '/';

    // Initialize the active tab. If we navigated here from the Home page button, 
    // it will grab the category we passed through the router state!
    const [activeTab, setActiveTab] = useState(location.state?.category || "All");
    const [wishlist, setWishlist] = useState([]);

    // Listen for routing changes (just in case the state updates)
    useEffect(() => {
        if (location.state?.category) {
            setActiveTab(location.state.category);
        }
    }, [location.state]);

    const toggleWishlist = (id) => {
        setWishlist((prevWishlist) => {
            if (prevWishlist.includes(id)) {
                return prevWishlist.filter(item => item !== id);
            }
            return [...prevWishlist, id];
        });
    };

    const filteredItems = activeTab === "All"
        ? Productlist
        : Productlist.filter(item => item.category === activeTab);

    // If on the Home page, show only 8 items. If on the Products page, show all of them!
    const displayedItems = isHomePage ? filteredItems.slice(0, 8) : filteredItems;

    // The function that runs when "View All" is clicked
    const handleViewAll = () => {
        // Redirect to /products and pass the currently selected tab in the state
        navigate('/products', { state: { category: activeTab } });
        // Scroll to the top of the page smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className={`py-20 bg-zinc-50 ${isHomePage ? '' : 'min-h-screen pt-32'}`}>
            <div className='max-w-[1400px] mx-auto px-5'>
                
                {/* Heading */}
                <div className='text-center'>
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-4xl md:text-5xl font-bold text-zinc-800 inline-block relative'
                    >
                        Our Products
                        <span className='absolute left-0 -bottom-3 w-full h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-red-500'></span>
                    </motion.h2>
                </div>

                {/* Category Buttons */}
                <div className='flex flex-wrap justify-center gap-4 mt-14'>
                    {categories.map((category) => (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-6 py-2.5 rounded-full text-lg font-semibold transition-colors duration-300 ${
                                activeTab === category
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30'
                                    : 'bg-white border border-zinc-200 hover:border-orange-300 text-zinc-600'
                            }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Animated Cards Grid */}
                <motion.div 
                    layout
                    className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16'
                >
                    <AnimatePresence mode='popLayout'>
                        {displayedItems.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                key={product.id}
                            >
                                <Card
                                    product={product}
                                    liked={wishlist.includes(product.id)}
                                    toggleLike={() => toggleWishlist(product.id)}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All Button - ONLY shows up on the Home Page */}
                {isHomePage && (
                    <div className='flex justify-center mt-16'>
                        <Button 
                            content={`View All ${activeTab === 'All' ? 'Products' : activeTab}`} 
                            onClick={handleViewAll} 
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Product;