import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItem =
    "text-black transition-transform duration-200 hover:scale-110";

  return (
    <header className="bg-[#FFDA00] px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Wide Horizons Logo"
            className="h-10 sm:h-12 w-auto hover:scale-105 transition-transform duration-200"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-sm font-medium items-center">
          <Link to="/" className={navItem}>Home</Link>
          <Link to="/about" className={navItem}>About</Link>
          <Link to="/services" className={navItem}>Services</Link>
          <Link to="/portfolio" className={navItem}>Portfolio</Link>
          <Link to="/process" className={navItem}>Process</Link>
          <Link to="/testimonials" className={navItem}>Testimonials</Link>
          <Link to="/contact-us" className={navItem}>Contact</Link>
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact-us"
          className="hidden lg:block bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:scale-105 transition-transform duration-200"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="lg:hidden mt-4 pb-4 flex flex-col space-y-3 text-sm font-medium">
          <Link to="/" className={navItem} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className={navItem} onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/services" className={navItem} onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/portfolio" className={navItem} onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
          <Link to="/process" className={navItem} onClick={() => setMobileMenuOpen(false)}>Process</Link>
          <Link to="/blog" className={navItem} onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link to="/contact-us" className={navItem} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link
            to="/request-quote"
            className="bg-gray-900 text-white px-4 py-2 rounded-md w-fit hover:scale-105 transition-transform duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Request Quote
          </Link>
        </nav>
      )}
    </header>
  );
};
