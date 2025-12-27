import React from "react";
import { Facebook, Instagram } from "lucide-react";
import footerlogo from "../../assets/footerLogo.jpeg";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#3D3533] px-4 sm:px-6 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo + Social */}
        <div className="flex flex-col items-center sm:items-start">
          <img
            src={footerlogo}
            alt="Wide Horizons - An Anthera Private Limited"
            className="h-20 sm:h-16 md:h-36 w-auto object-contain"
          />

          <div className="flex gap-4 mt-6">
            <Facebook className="w-6 h-6 text-gray-400 hover:text-white transition cursor-pointer" />
            <div className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white transition cursor-pointer text-sm font-semibold">
              𝕏
            </div>
            <Instagram className="w-6 h-6 text-gray-400 hover:text-white transition cursor-pointer" />
          </div>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-white font-semibold mb-4">Pages</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About us", "Services", "Portfolio", "Process"].map(
              (item) => (
                <li
                  key={item}
                  className="text-gray-300 hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Contact us", "Privacy Policy", "Terms & Condition"].map(
              (item) => (
                <li
                  key={item}
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact us</h4>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="hover:text-white transition cursor-pointer">
              +91-9831047413 / 8910665795
            </div>
            <div className="hover:text-white transition cursor-pointer">
              nirmalya@widehorizons.co.in
            </div>
            <div className="text-gray-400 leading-relaxed">
              Godrej Waterside, Tower-II, 12th Floor
              <br />
              Block-DP, Sector-V, Kolkata – 700091
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-xs mt-14 pt-6 border-t border-gray-700">
        © 2025 Wide Horizons. All rights reserved.
      </div>
    </footer>
  );
};
