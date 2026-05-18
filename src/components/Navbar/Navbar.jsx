import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch, IoPersonOutline, IoClose } from "react-icons/io5";
import { TbMenu2, TbX, TbChevronDown } from "react-icons/tb";
import logo from "../../assets/icon.png";
import { useCart } from "../../components/context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const { totalItems = 0 } = useCart() || {};
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() === "") {
      alert("Please enter a product name");
      return;
    }
    console.log("Searching for:", search);
    // navigate(`/search?q=${search}`);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setMobileProductsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
        {/* Nav container: tighter on mobile (px-3, h-[68px]), normal on desktop */}
        <nav className="max-w-[1400px] mx-auto h-[68px] sm:h-[80px] md:h-[90px] flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-10">

          {/* LOGO — slightly smaller on xs */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <img
              src={logo}
              alt="Verdora Mart"
              className="w-10 sm:w-12 md:w-14 object-contain transition duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-none">
                <span className="text-green-900">Verdora</span>
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Mart</span>
              </h1>
              <p className="text-[8px] sm:text-[10px] tracking-[3px] sm:tracking-[4px] uppercase text-zinc-500 mt-0.5 sm:mt-1">
                Fresh Grocery
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            <li>
              <Link to="/" className="relative font-medium text-zinc-700 hover:text-orange-500 transition duration-300">
                Home
              </Link>
            </li>
            <li
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 font-medium text-zinc-700 hover:text-orange-500 transition duration-300">
                Products <TbChevronDown className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute top-full left-0 mt-4 w-48 bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 origin-top ${dropdownOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}>
                <ul className="py-2">
                  <li><Link to="/products/fruits" className="block px-4 py-2 text-sm text-zinc-600 hover:bg-orange-50 hover:text-orange-500">Fresh Fruits</Link></li>
                  <li><Link to="/products/vegetables" className="block px-4 py-2 text-sm text-zinc-600 hover:bg-orange-50 hover:text-orange-500">Vegetables</Link></li>
                  <li><Link to="/products/dairy" className="block px-4 py-2 text-sm text-zinc-600 hover:bg-orange-50 hover:text-orange-500">Dairy & Eggs</Link></li>
                  <li><Link to="/products/meat" className="block px-4 py-2 text-sm text-zinc-600 hover:bg-orange-50 hover:text-orange-500">Meat & Seafood</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/about" className="relative font-medium text-zinc-700 hover:text-orange-500 transition duration-300">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="relative font-medium text-zinc-700 hover:text-orange-500 transition duration-300">Contact</Link>
            </li>
          </ul>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">

            {/* Desktop Search */}
            <div className="hidden lg:flex items-center h-11 border border-zinc-300 rounded-full overflow-hidden bg-zinc-50 focus-within:border-orange-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-orange-200 transition-all duration-300">
              <input
                type="text"
                placeholder="Search products..."
                autoComplete="off"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-[200px] h-full px-4 outline-none bg-transparent placeholder:text-zinc-400 text-sm"
              />
              {search && (
                <button onClick={() => setSearch("")} className="text-zinc-400 hover:text-red-500 px-2 transition-colors">
                  <IoClose />
                </button>
              )}
              <button type="button" onClick={handleSearch} className="w-12 h-full flex items-center justify-center bg-orange-500 text-white text-xl hover:bg-orange-600 transition duration-300">
                <IoSearch />
              </button>
            </div>

            {/* Icon buttons — slightly smaller on xs */}
            <Link
              to="/auth"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-zinc-200 flex items-center justify-center text-base sm:text-lg text-zinc-700 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300 active:scale-90"
            >
              <IoPersonOutline />
            </Link>

            <button
              type="button"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-zinc-200 flex items-center justify-center text-lg sm:text-xl text-zinc-700 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300 active:scale-90"
            >
              <IoIosHeart />
            </button>

            <Link
              to="/cart"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-zinc-200 flex items-center justify-center text-lg sm:text-xl text-zinc-700 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300 relative group active:scale-90"
            >
              <HiShoppingBag className="group-hover:animate-bounce" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] sm:text-[10px] font-bold w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Hamburger — only on mobile */}
            <button
              type="button"
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-xl text-zinc-800 ml-0.5 transition-all duration-200 active:scale-90 active:bg-orange-50"
            >
              {menuOpen
                ? <TbX className="text-red-500 text-2xl" />
                : <TbMenu2 className="text-2xl" />
              }
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {/* Dark backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Slide-in drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 z-40 h-full w-[80vw] max-w-[320px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100">
          <span className="font-bold text-green-900 text-lg">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-red-50 hover:text-red-500 transition"
          >
            <IoClose />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="px-5 pt-4 pb-2">
          <div className={`flex items-center h-11 border rounded-xl overflow-hidden transition-all duration-300 ${searchFocused ? "border-orange-500 ring-2 ring-orange-200 bg-white" : "border-zinc-200 bg-zinc-50"}`}>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 h-full px-4 outline-none bg-transparent text-sm placeholder:text-zinc-400"
            />
            {search && (
              <button onClick={() => setSearch("")} className="text-zinc-400 hover:text-red-500 px-2 transition-colors">
                <IoClose size={14} />
              </button>
            )}
            <button
              onClick={handleSearch}
              className="w-11 h-full bg-orange-500 text-white flex justify-center items-center hover:bg-orange-600 transition active:scale-95"
            >
              <IoSearch />
            </button>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-5 py-3 flex flex-col gap-1">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-zinc-700 font-medium text-[15px] hover:bg-orange-50 hover:text-orange-500 active:bg-orange-100 transition-all duration-200"
            >
              {label}
            </Link>
          ))}

          {/* Accordion: Products */}
          <div className="rounded-xl overflow-hidden">
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex items-center justify-between px-3 py-3 text-zinc-700 font-medium text-[15px] hover:bg-orange-50 hover:text-orange-500 active:bg-orange-100 transition-all duration-200 rounded-xl"
            >
              Products
              <TbChevronDown className={`transition-transform duration-300 ${mobileProductsOpen ? "rotate-180 text-orange-500" : ""}`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileProductsOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="ml-3 pl-3 border-l-2 border-orange-100 flex flex-col gap-0.5 py-1">
                {[
                  { to: "/products/fruits", label: "🍎 Fresh Fruits" },
                  { to: "/products/vegetables", label: "🥦 Vegetables" },
                  { to: "/products/dairy", label: "🥛 Dairy & Eggs" },
                  { to: "/products/meat", label: "🥩 Meat & Seafood" },
                ].map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm text-zinc-600 hover:bg-orange-50 hover:text-orange-500 active:bg-orange-100 transition-all duration-200"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Drawer footer: quick actions */}
        <div className="px-5 pb-6 pt-3 border-t border-zinc-100">
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/auth"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-zinc-200 text-zinc-700 text-sm font-medium hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 active:scale-95 transition-all duration-200"
            >
              <IoPersonOutline className="text-base" /> Account
            </Link>
            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 active:scale-95 transition-all duration-200 relative"
            >
              <HiShoppingBag className="text-base" /> Cart
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;