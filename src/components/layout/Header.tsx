import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';


export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      

      {/* Header */}
      <header className="bg-yellow-400 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <div className="text-xl sm:text-2xl font-black leading-none text-white">
              WIDE
            </div>
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-white">
              HORIZONS
            </div>
          </div>

          <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-sm font-medium">
           <Link to="/" className="text-blue-600">Home</Link>
<Link to="/about" className="text-blue-600">About</Link>

            <a href="#services" className="text-blue-600 hover:text-blue-800">
              Services
            </a>
            <a href="#portfolio" className="text-blue-600 hover:text-blue-800">
              Portfolio
            </a>
            <a href="#process" className="text-blue-600 hover:text-blue-800">
              Process
            </a>
            <a href="#contact" className="text-blue-600 hover:text-blue-800">
              Contact
            </a>
          </nav>

          <button className="hidden lg:block bg-gray-900 text-white px-5 py-2 rounded text-sm font-medium hover:bg-gray-800">
            Contact us
          </button>

          <button
            className="lg:hidden text-gray-900 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col space-y-3">
            <a href="#" className="text-black">Home</a>
            <a href="#about" className="text-black">About</a>
            <a href="#services" className="text-black">Services</a>
            <a href="#portfolio" className="text-black">Portfolio</a>
            <a href="#process" className="text-black">Process</a>
            <a href="#contact" className="text-black">Contact</a>
          </nav>
        )}
      </header>
    </>
  );
};