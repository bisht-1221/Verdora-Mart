import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch, IoPersonOutline } from "react-icons/io5"; // ADDED IoPersonOutline
import { TbMenu2, TbX } from "react-icons/tb";
import logo from "../../assets/icon.png";
import { useCart } from "../../components/context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  
  const { totalItems } = useCart();

  const handleSearch = () => {
    if (search.trim() === "") {
      alert("Please enter product name");
      return;
    }
    console.log("Searching for:", search);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-lg" : "bg-white"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto h-[90px] flex items-center justify-between px-4 md:px-6 lg:px-10">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Verdora Mart" className="w-14 object-contain transition duration-300 hover:scale-105" />
          <div>
            <h1 className="text-2xl lg:text-3xl font-extrabold leading-none">
              <span className="text-green-900">Verdora</span>
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Mart</span>
            </h1>
            <p className="text-[10px] tracking-[4px] uppercase text-zinc-500 mt-1">Fresh Grocery</p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          <li>
            <Link to="/" className="relative font-medium text-zinc-700 hover:text-orange-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="relative font-medium text-zinc-700 hover:text-orange-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="relative font-medium text-zinc-700 hover:text-orange-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/blog" className="relative font-medium text-zinc-700 hover:text-orange-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="relative font-medium text-zinc-700 hover:text-orange-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </Link>
          </li>
        </ul>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3">

          {/* SEARCH BAR */}
          <div className="hidden lg:flex items-center h-12 border-2 border-orange-400 rounded-full overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Search products..."
              autoComplete="off"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-[220px] h-full px-4 outline-none placeholder:text-zinc-400"
            />
            <button type="button" onClick={handleSearch} className="w-12 h-full flex items-center justify-center bg-gradient-to-b from-red-500 to-orange-500 text-white text-2xl leading-none hover:opacity-90 transition duration-300">
              <IoSearch />
            </button>
          </div>

          {/* AUTH / LOGIN BUTTON (NEW) */}
          <Link
            to="/auth"
            className="w-11 h-11 rounded-full border border-zinc-200 flex items-center justify-center text-xl text-zinc-700 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300"
            title="Login / Register"
          >
            <IoPersonOutline />
          </Link>

          {/* WISHLIST */}
          <button type="button" className="w-11 h-11 rounded-full border border-zinc-200 flex items-center justify-center text-2xl text-zinc-700 hover:bg-orange-500 hover:text-white transition duration-300">
            <IoIosHeart />
          </button>

          {/* CART BUTTON WITH BADGE */}
          <Link
            to="/cart"
            className="w-11 h-11 rounded-full border border-zinc-200 flex items-center justify-center text-2xl text-zinc-700 hover:bg-orange-500 hover:text-white transition duration-300 relative"
          >
            <HiShoppingBag />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {totalItems}
              </span>
            )}
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button type="button" aria-label="Toggle Menu" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl text-zinc-800">
            {menuOpen ? <TbX /> : <TbMenu2 />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-screen" : "max-h-0"}`}>
        <div className="bg-white border-t border-zinc-100 shadow-xl px-6 py-8">
          <ul className="flex flex-col gap-6">
            <li>
                <Link to="/" onClick={() => setMenuOpen(false)} className="text-zinc-700 font-medium hover:text-orange-500 transition duration-300">
                  Home
                </Link>
            </li>
            <li>
                <Link to="/products" onClick={() => setMenuOpen(false)} className="text-zinc-700 font-medium hover:text-orange-500 transition duration-300">
                  Products
                </Link>
            </li>
            <li>
                <Link to="/about" onClick={() => setMenuOpen(false)} className="text-zinc-700 font-medium hover:text-orange-500 transition duration-300">
                  About Us
                </Link>
            </li>
            <li>
                <Link to="/blog" onClick={() => setMenuOpen(false)} className="text-zinc-700 font-medium hover:text-orange-500 transition duration-300">
                  Blog
                </Link>
            </li>
            <li>
                <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-zinc-700 font-medium hover:text-orange-500 transition duration-300">
                  Contact
                </Link>
            </li>
             <li>
                <Link to="/auth" onClick={() => setMenuOpen(false)} className="text-orange-500 font-bold transition duration-300 flex items-center gap-2">
                  <IoPersonOutline /> Login / Register
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;