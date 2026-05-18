import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch, IoPersonOutline, IoClose } from "react-icons/io5"; 
import { TbMenu2, TbX } from "react-icons/tb"; // Removed TbChevronDown
import logo from "../../assets/icon.png";
import { useCart } from "../../components/context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  
  const { totalItems = 0 } = useCart() || {};

  const handleSearch = () => {
    if (search.trim() === "") {
      alert("Please enter a product name");
      return;
    }
    console.log("Searching for:", search);
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto h-[70px] sm:h-[90px] flex items-center justify-between px-4 md:px-6 lg:px-10">

        {/* LOGO */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <img src={logo} alt="Verdora Mart" className="w-10 sm:w-14 object-contain transition duration-300 group-hover:scale-110 group-hover:rotate-3" />
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-none">
              <span className="text-green-900">Verdora</span>
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Mart</span>
            </h1>
            <p className="text-[8px] sm:text-[10px] tracking-[2px] sm:tracking-[4px] uppercase text-zinc-500 mt-1">Fresh Grocery</p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 h-full">
          <li className="h-full flex items-center">
            <Link to="/" className="relative font-medium text-zinc-700 hover:text-orange-500 transition duration-300">
              Home
            </Link>
          </li>
          
          {/* SIMPLIFIED PRODUCTS LINK */}
          <li className="h-full flex items-center">
            <Link to="/products" className="relative font-medium text-zinc-700 hover:text-orange-500 transition duration-300">
              Products
            </Link>
          </li>

          <li className="h-full flex items-center">
            <Link to="/about" className="relative font-medium text-zinc-700 hover:text-orange-500 transition duration-300">
              About Us
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link to="/contact" className="relative font-medium text-zinc-700 hover:text-orange-500 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* RIGHT SECTION (ICONS) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">

          {/* DESKTOP SEARCH */}
          <div className="hidden lg:flex items-center h-11 border border-zinc-300 rounded-full overflow-hidden bg-zinc-50 focus-within:border-orange-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-orange-200 transition-all duration-300">
            <input
              type="text"
              placeholder="Search products..."
              autoComplete="off"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-[200px] xl:w-[250px] h-full px-4 outline-none bg-transparent placeholder:text-zinc-400 text-sm transition-all"
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

          {/* PROFILE BUTTON */}
          <Link to="/auth" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-200 flex items-center justify-center text-lg sm:text-xl text-zinc-700 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300">
            <IoPersonOutline />
          </Link>

          {/* CART BUTTON WITH BADGE */}
          <Link to="/cart" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-200 flex items-center justify-center text-xl text-zinc-700 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300 relative group">
            <HiShoppingBag className="group-hover:animate-bounce" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] sm:text-[10px] font-bold w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full border-2 border-white">
                {totalItems}
              </span>
            )}
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button type="button" aria-label="Toggle Menu" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl text-zinc-800 p-1 sm:p-2 ml-1">
            {menuOpen ? <TbX className="text-red-500" /> : <TbMenu2 />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div 
        className={`md:hidden grid transition-all duration-300 ease-in-out ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden bg-white shadow-inner">
          <div className="px-6 py-4 flex flex-col gap-4">
            
            {/* MOBILE SEARCH */}
            <div className="flex items-center h-12 border border-zinc-300 rounded-lg overflow-hidden focus-within:border-orange-500 w-full mb-2">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1 h-full px-4 outline-none text-sm"
              />
              <button onClick={handleSearch} className="w-12 h-full bg-orange-500 text-white flex justify-center items-center hover:bg-orange-600 transition">
                <IoSearch />
              </button>
            </div>

            <Link to="/" onClick={closeMenu} className="text-zinc-700 font-medium hover:text-orange-500 text-lg">Home</Link>
            
            {/* SIMPLIFIED MOBILE PRODUCTS LINK */}
            <Link to="/products" onClick={closeMenu} className="text-zinc-700 font-medium hover:text-orange-500 text-lg">Products</Link>
            
            <Link to="/about" onClick={closeMenu} className="text-zinc-700 font-medium hover:text-orange-500 text-lg">About Us</Link>
            <Link to="/contact" onClick={closeMenu} className="text-zinc-700 font-medium hover:text-orange-500 text-lg">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;