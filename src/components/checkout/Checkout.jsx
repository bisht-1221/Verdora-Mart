import React, { useState } from "react";
import { useCart } from "../../components/context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault(); // Prevent page refresh
    
    // Simulate API call/Payment processing
    alert(`Payment Successful! Thank you for your order, ${formData.name}.`);
    
    // Clear the global cart
    clearCart();
    
    // Send user back to the home page
    navigate("/");
  };

  // If someone manually types /checkout but has no items
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <h2 className="text-2xl font-bold text-zinc-800">Your cart is empty!</h2>
      </div>
    );
  }

  return (
    <section className="py-20 bg-zinc-50 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-4xl font-bold text-zinc-800 mb-10">Checkout</h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Form Section */}
          <div className="lg:w-2/3 bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
            <h3 className="text-2xl font-bold text-zinc-800 mb-6 border-b border-zinc-100 pb-4">Billing Details</h3>
            
            <form onSubmit={handlePlaceOrder} className="flex flex-col gap-5">
              <div>
                <label className="block text-zinc-600 mb-2 font-medium">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition" 
                  placeholder="John Doe" 
                />
              </div>

              <div>
                <label className="block text-zinc-600 mb-2 font-medium">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition" 
                  placeholder="john@example.com" 
                />
              </div>

              <div>
                <label className="block text-zinc-600 mb-2 font-medium">Shipping Address</label>
                <textarea 
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition" 
                  placeholder="123 Fresh Street..." 
                />
              </div>

              <h3 className="text-xl font-bold text-zinc-800 mt-6 mb-2">Payment Details</h3>
              <div>
                <label className="block text-zinc-600 mb-2 font-medium">Card Number (Simulated)</label>
                <input 
                  type="text" 
                  name="cardNumber"
                  required
                  value={formData.cardNumber}
                  onChange={handleChange}
                  maxLength="16"
                  className="w-full border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition" 
                  placeholder="1234 5678 9101 1121" 
                />
              </div>

              <button 
                type="submit"
                className="mt-6 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
              >
                Place Order (${total.toFixed(2)})
              </button>
            </form>
          </div>

          {/* Checkout Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-3xl shadow-md border border-zinc-100 sticky top-[120px]">
              <h3 className="text-xl font-bold text-zinc-800 mb-6 border-b border-zinc-100 pb-4">Order Review</h3>
              
              <div className="flex flex-col gap-4 mb-6 max-h-[300px] overflow-y-auto">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-zinc-600 text-sm border-b border-zinc-50 pb-2">
                    <span className="truncate pr-4">{item.qty}x {item.name}</span>
                    <span className="font-bold text-zinc-800">${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-200 pt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-zinc-800">Final Total</span>
                <span className="text-2xl font-extrabold text-orange-500">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Checkout;