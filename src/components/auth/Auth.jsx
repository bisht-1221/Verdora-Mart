import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaArrowRight } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext'; // IMPORT CONTEXT

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { loginUser, registerUser } = useAuth(); // GET FUNCTIONS

  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFlip = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
    // Clear inputs when flipping
    setName(''); setEmail(''); setPassword('');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const result = loginUser(email, password);
    if (result.success) {
      alert("Successfully Logged In! Welcome back.");
      navigate('/');
    } else {
      alert(result.message);
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const result = registerUser(name, email, password);
    if (result.success) {
      alert("Registration Successful! Welcome to VerdoraMart.");
      navigate('/');
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center py-20 px-4 relative overflow-hidden">
      
      {/* Decorative 3D Background Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-96 h-96 bg-orange-400/20 blur-[100px] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-green-400/20 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="w-full max-w-md relative z-10" style={{ perspective: '2000px' }}>
        <motion.div
          className="w-full h-[600px] relative"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isLogin ? 0 : 180 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 15 }}
        >
          
          {/* ==================== FRONT: LOGIN ==================== */}
          <div className="absolute inset-0 w-full h-full bg-white/80 backdrop-blur-xl rounded-[40px] p-10 shadow-2xl border border-white" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
            <div className="h-full flex flex-col justify-center">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-extrabold text-zinc-900 mb-2">Welcome Back</h2>
                <p className="text-zinc-500">Sign in to continue shopping fresh.</p>
              </div>

              <form onSubmit={handleLoginSubmit} className="flex flex-col gap-5 flex-1">
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-orange-500 transition-colors"><FaEnvelope /></span>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full bg-zinc-50/50 border-2 border-zinc-100 focus:border-orange-500 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all" />
                </div>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-orange-500 transition-colors"><FaLock /></span>
                  <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full bg-zinc-50/50 border-2 border-zinc-100 focus:border-orange-500 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all" />
                </div>
                <div className="text-right">
                  <a href="#" className="text-sm text-orange-500 font-bold hover:underline">Forgot Password?</a>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold text-lg py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all flex justify-center items-center gap-2 mt-2">
                  Login <FaArrowRight className="text-sm" />
                </button>
              </form>

              <p className="text-center text-zinc-600 mt-6">
                Don't have an account? <button type="button" onClick={handleFlip} className="text-orange-500 font-bold hover:underline">Register</button>
              </p>
            </div>
          </div>

          {/* ==================== BACK: REGISTER ==================== */}
          <div className="absolute inset-0 w-full h-full bg-white/80 backdrop-blur-xl rounded-[40px] p-10 shadow-2xl border border-white" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <div className="h-full flex flex-col justify-center">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-extrabold text-zinc-900 mb-2">Create Account</h2>
                <p className="text-zinc-500">Join us for fresh daily deliveries.</p>
              </div>

              <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-5 flex-1">
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-orange-500 transition-colors"><FaUser /></span>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="w-full bg-zinc-50/50 border-2 border-zinc-100 focus:border-orange-500 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all" />
                </div>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-orange-500 transition-colors"><FaEnvelope /></span>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full bg-zinc-50/50 border-2 border-zinc-100 focus:border-orange-500 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all" />
                </div>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-orange-500 transition-colors"><FaLock /></span>
                  <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create Password" className="w-full bg-zinc-50/50 border-2 border-zinc-100 focus:border-orange-500 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all" />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg py-4 rounded-2xl shadow-lg shadow-green-500/30 hover:scale-[1.02] active:scale-95 transition-all flex justify-center items-center gap-2 mt-4">
                  Sign Up <FaArrowRight className="text-sm" />
                </button>
              </form>

              <p className="text-center text-zinc-600 mt-8">
                Already have an account? <button type="button" onClick={handleFlip} className="text-green-600 font-bold hover:underline">Login</button>
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Auth;