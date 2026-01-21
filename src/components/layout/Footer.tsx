import React from "react";
import { Facebook, Instagram } from "lucide-react";
import footerlogo from "../../assets/footerLogo.png";
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  // { name: "Process", path: "/process" },
];
const quickLinks = [
  { name: "Contact us", path: "/contact-us" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Condition", path: "/terms-condition" },
];

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#3D3533] px-4 sm:px-6 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + Social */}
        <div className="flex flex-col items-center sm:items-start">
          <img
            src={footerlogo}
            alt="Wide Horizons - An Anthera Private Limited"
            className="h-20 sm:h-16 md:h-28 w-auto object-cover"
          />

          <div className="flex gap-4 mt-6 pl-4">
            <Facebook className="w-6 h-6 text-gray-400 hover:text-white transition cursor-pointer" />
            <div className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white transition cursor-pointer text-sm font-semibold">
              𝕏
            </div>
            <Instagram className="w-6 h-6 text-gray-400 hover:text-white transition cursor-pointer" />
          </div>
        </div>

        {/* Pages */}

        <div>
          <p className="text-white font-semibold mb-4">Pages</p>

          <ul className="space-y-2 text-sm">
            {pages.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-[#FFDA00] transition cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-white font-semibold mb-4">Quick Links</p>

          <ul className="space-y-2 text-sm">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-gray-400 hover:text-[#FFDA00] transition cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-semibold mb-4">Contact us</p>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="hover:text-[#FFDA00] transition cursor-pointer">
              +91-9831047413 / 9007333399
            </div>
            <div className="hover:text-[#FFDA00] transition cursor-pointer">
              info@widehorizons.co.in
            </div>
            <div className="text-gray-400 leading-relaxed hover:text-[#FFDA00] cursor-pointer">
              Godrej Waterside, Tower-II, 12th Floor
              <br />
              Block-DP, Sector-V, Kolkata – 700091
            </div>
            <div className="text-gray-400 leading-relaxed hover:text-[#FFDA00] cursor-pointer">
              203C/B, Lake Town, Block-B, Kolkata-700089
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-xs mt-14 pt-6 border-t border-gray-700">
        © 2026 Wide Horizons. All rights reserved.
      </div>
    </footer>
  );
};
