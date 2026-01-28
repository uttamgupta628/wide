import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/hederlogo.png";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Hover Effect Styles */}
      <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
          padding: 10px 16px;
          cursor: pointer;
          transition: color 0.4s;
          z-index: 1;
        }

        .nav-link::before {
          content: "";
          position: absolute;
          inset: 0;
          border-top: 2px solid #000;
          border-bottom: 2px solid #000;
          transform: scaleY(2);
          opacity: 0;
          transition: 0.3s;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          inset: 2px 0;
          background-color: #000;
          transform: scaleY(0);
          opacity: 0;
          transition: 0.3s;
          z-index: -1;
        }

        .nav-link:hover {
          color: #fff;
        }

        .nav-link:hover::before,
        .nav-link:hover::after {
          transform: scaleY(1);
          opacity: 1;
        }
      `}</style>

      <header className="bg-[#FFDA00] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <img
              src={logo}
              alt="Wide Horizons Logo"
              className="h-20 sm:h-24 w-auto hover:scale-105 transition-transform duration-200 -my-12"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-2 text-sm font-medium items-center">
            <a href="/" className="nav-link text-black">
              Home
            </a>
            <a href="/about" className="nav-link text-black">
              About
            </a>
            <a href="/services" className="nav-link text-black">
              Services
            </a>
            <a href="/portfolio" className="nav-link text-black">
              Portfolio
            </a>
            {/* <a href="/process" className="nav-link text-black">
              Process
            </a> */}
            <a href="/testimonials" className="nav-link text-black">
              Testimonials
            </a>
            <a href="/contact-us" className="nav-link text-black">
              Contact
            </a>
            {/* <a href="/contact-us" className="nav-link text-black">
              Contact
            </a> */}
          </nav>

          {/* CTA Button */}
          <a
            href="/contact-us"
            className="hidden lg:block bg-black text-white px-5 py-2 rounded-md text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-900 p-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col space-y-3 text-sm font-medium">
            <a
              href="/"
              className="text-black hover:text-gray-700 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="text-black hover:text-gray-700 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/services"
              className="text-black hover:text-gray-700 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="/portfolio"
              className="text-black hover:text-gray-700 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="/process"
              className="text-black hover:text-gray-700 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="/testimonials"
              className="text-black hover:text-gray-700 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="/contact-us"
              className="text-black hover:text-gray-700 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="/request-quote"
              className="bg-gray-900 text-white px-4 py-2 rounded-md w-fit hover:scale-105 transition-transform duration-200 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Quote
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
