import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom"; // IMPORT LINK

const Footer = () => {
  // Define our links so they are easy to map through
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  // We map these to the exact names used in your Product.jsx tabs
  const categoryLinks = [
    { name: "Fruits", tab: "Fruits" },
    { name: "Vegetables", tab: "Vegetables" },
    { name: "Dairy Products", tab: "Dairy" },
    { name: "Ice Cream", tab: "Icecream" },
    { name: "Chocolates", tab: "Chocolate" }
  ];

  return (
    <footer className="bg-zinc-100 text-zinc-800 pt-16 pb-6 px-4">
      <div className="max-w-[1400px] mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <Link to="/" className="block mb-2">
              <h2 className="text-3xl font-extrabold">
                <span className="text-green-600">Verdora</span>
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Mart
                </span>
              </h2>
            </Link>

            <p className="text-[10px] tracking-[4px] uppercase text-zinc-500 mb-4">
              Fresh Grocery
            </p>

            <p className="text-zinc-600 text-sm leading-relaxed">
              Farm-fresh groceries delivered daily. Premium quality fruits,
              vegetables, dairy and more — right to your doorstep.
            </p>

            {/* Social Icons (External links use normal <a> tags) */}
            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="https://google.com" // Replace with your actual social links
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:bg-orange-500 hover:text-white transition duration-300 shadow-sm"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-zinc-900 relative inline-block after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:bg-orange-500 after:rounded-full">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    // Scroll to top when clicking a footer link
                    onClick={() => window.scrollTo(0, 0)} 
                    className="text-zinc-600 hover:text-orange-500 transition duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[2px] bg-orange-500 transition-all duration-300 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-zinc-900 relative inline-block after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:bg-orange-500 after:rounded-full">
              Categories
            </h4>

            <ul className="space-y-3">
              {categoryLinks.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to="/products"
                    // Pass the category state to the Products page just like the View All button!
                    state={{ category: cat.tab }}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-zinc-600 hover:text-orange-500 transition duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[2px] bg-orange-500 transition-all duration-300 rounded-full"></span>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-zinc-900 relative inline-block after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:bg-orange-500 after:rounded-full">
              Contact Us
            </h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-600 text-sm">
                <MdLocationOn className="text-orange-500 text-lg flex-shrink-0 mt-0.5" />
                <span>123 Fresh Street, Haldwani,Uttrakhand 263623</span>
              </li>

              <li className="flex items-center gap-3 text-zinc-600 text-sm">
                <MdPhone className="text-orange-500 text-lg flex-shrink-0" />
                <a
                  href="tel:+9317403921"
                  className="hover:text-orange-500 transition"
                >
                  +91 98765 43210
                </a>
              </li>

              <li className="flex items-center gap-3 text-zinc-600 text-sm">
                <MdEmail className="text-orange-500 text-lg flex-shrink-0" />
                <a
                  href="mailto:hello@verdoramart.com"
                  className="hover:text-orange-500 transition"
                >
                  hello@verdoramart.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-zinc-600 text-sm mb-3">
                Subscribe for fresh deals:
              </p>

              <form onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }} className="flex overflow-hidden rounded-full border border-zinc-300 bg-white shadow-sm focus-within:border-orange-500 transition duration-300">
                <input
                  type="email"
                  required
                  placeholder="Your email..."
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-zinc-700 outline-none placeholder:text-zinc-400"
                />

                <button type="submit" className="bg-orange-500 px-5 text-sm font-semibold text-white hover:bg-orange-600 transition cursor-pointer">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-300 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
          <p>© 2026 VerdoraMart. All rights reserved.</p>

          <div className="flex gap-6">
            {/* These link to home for now, but you can create dedicated pages later! */}
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-orange-500 transition">
              Privacy Policy
            </Link>

            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-orange-500 transition">
              Terms of Service
            </Link>

            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-orange-500 transition">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;