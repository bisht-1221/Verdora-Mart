import React from 'react';
import { FaHeart, FaStar, FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useCart } from '../../components/context/CartContext'; 

const Card = ({ product, liked, toggleLike }) => {
    const { cart, addToCart, removeFromCart } = useCart();

    // Check if the product is already in the global cart
    const inCart = cart.some(item => item.id === product.id);

    // Toggle function: Adds if missing, Removes if present
    const handleCartToggle = () => {
        if (inCart) {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
    };

    return (
        <div className='bg-white p-5 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden border border-zinc-100 flex flex-col h-full'>

            {/* Top section */}
            <div className='flex justify-between items-center mb-4'>

                {/* Wishlist Button */}
                <button
                    onClick={toggleLike}
                    className={`text-2xl transition-all duration-300 cursor-pointer 
                    ${liked ? 'text-red-500 scale-110' : 'text-zinc-300 hover:text-red-400'}
                    `}
                >
                    <FaHeart />
                </button>
            </div>

            {/* Image section */}
            <div className='w-full h-[180px] overflow-hidden rounded-2xl bg-zinc-50 relative -mt-4 pt-4 mb-4 flex-shrink-0'>
                <img
                    src={product.image}
                    alt={product.name}
                    className='w-4/5 h-4/5 object-contain mx-auto group-hover:scale-110 transition-all duration-500 drop-shadow-md'
                />
            </div>

            {/* Content section */}
            <div className='text-center mt-2 flex-1 flex flex-col justify-end'>

                <div className='flex justify-center items-center gap-1 text-yellow-400 mb-3 text-sm'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-zinc-300" />
                </div>

                <h3 className='text-xl font-bold text-zinc-800 mb-1 line-clamp-1'>
                    {product.name}
                </h3>

                <p className='text-2xl font-extrabold text-orange-500 mb-5'>
                    ${Number(product.price).toFixed(2)}
                </p>

                {/* DYNAMIC ADD / REMOVE BUTTON */}
                <button
                    onClick={handleCartToggle}
                    className={`w-full py-3 rounded-xl text-white font-bold text-md cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-95
                        ${inCart 
                            // RED STYLE FOR 'REMOVE'
                            ? 'bg-gradient-to-r from-red-400 to-red-500 shadow-red-500/30' 
                            // ORANGE STYLE FOR 'ADD'
                            : 'bg-gradient-to-b from-orange-400 to-orange-500 shadow-orange-500/30 hover:to-orange-600'
                        }`}
                >
                    {inCart ? (
                        <>
                            <FaTrash className="text-sm" /> Remove
                        </>
                    ) : (
                        <>
                            <FaShoppingCart className="text-sm" /> Add to Cart
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}

export default Card;