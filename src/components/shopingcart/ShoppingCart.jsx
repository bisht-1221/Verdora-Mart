import React from "react";
import { useCart } from "../../components/context/CartContext";
import { Link, useNavigate } from "react-router-dom"; // ADDED useNavigate

const ShoppingCart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate(); // Initialize navigate

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add some items before checking out.");
      return;
    }
    // Redirect to the checkout page
    navigate('/checkout');
  };

  return (
    <section className="py-20 bg-zinc-50 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-4xl font-bold text-zinc-800">Your Cart</h2>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white p-10 rounded-3xl shadow-sm text-center border border-zinc-100 py-20">
            <h3 className="text-2xl font-bold text-zinc-700 mb-4">Your cart is empty</h3>
            <p className="text-zinc-500 mb-8">Looks like you haven't added any fresh groceries yet.</p>
            <Link to="/products" className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-500/30 hover:scale-105 transition-all inline-block">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Cart Items List */}
            <div className="lg:w-2/3 flex flex-col gap-5">
              {cart.map((item) => (
                <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border border-zinc-100 flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-24 h-24 bg-zinc-50 rounded-xl flex items-center justify-center p-2 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain drop-shadow-sm" />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-bold text-zinc-800">{item.name}</h3>
                    <p className="text-zinc-500 text-sm">{item.category}</p>
                    <p className="text-orange-500 font-extrabold text-lg mt-1">${item.price}</p>
                  </div>
                  
                  {/* Qty Controls */}
                  <div className="flex items-center gap-4 bg-zinc-50 rounded-full px-2 py-1 border border-zinc-200">
                    <button 
                      onClick={() => decreaseQty(item.id)} 
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-zinc-600 hover:text-orange-500 shadow-sm transition font-bold"
                    >
                      -
                    </button>
                    <span className="font-bold w-6 text-center text-zinc-800">{item.qty}</span>
                    <button 
                      onClick={() => increaseQty(item.id)} 
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-zinc-600 hover:text-orange-500 shadow-sm transition font-bold"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="mt-4 sm:mt-0 px-4 py-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition font-bold text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-3xl shadow-md border border-zinc-100 sticky top-[120px]">
                <h3 className="text-2xl font-bold text-zinc-800 mb-6 border-b border-zinc-100 pb-4">Order Summary</h3>
                
                <div className="flex justify-between text-zinc-600 mb-4">
                  <span>Subtotal ({cart.length} items)</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-600 mb-4">
                  <span>Delivery</span>
                  <span className="font-bold text-green-500">Free</span>
                </div>
                
                <div className="border-t border-zinc-200 mt-6 pt-6 flex justify-between items-center mb-8">
                  <span className="text-xl font-bold text-zinc-800">Total</span>
                  <span className="text-3xl font-extrabold text-orange-500">${total.toFixed(2)}</span>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/30 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShoppingCart;