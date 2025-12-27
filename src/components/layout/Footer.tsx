import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#3D3533] px-4 sm:px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-black text-white">WIDE</div>
          <div className="text-xs font-bold tracking-[0.3em] text-white">
            HORIZONS
          </div>
          <div className="text-[10px] text-gray-400 mt-1">
            AN ANTHERA PRIVATE LIMITED
          </div>
          <div className="flex gap-4 mt-6">
            <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            <div className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer">
              𝕏
            </div>
            <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Pages</h4>
          <div className="space-y-2 text-yellow-400 text-sm">
            <div>Home</div>
            <div>About us</div>
            <div>Services</div>
            <div>Portfolio</div>
            <div>Process</div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <div className="space-y-2 text-gray-400 text-sm">
            <div>Contact us</div>
            <div>Privacy Policy</div>
            <div>Terms & Condition</div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Contact us</h4>
          <div className="space-y-2 text-yellow-400 text-sm">
            <div>+91-9831047413/8910665795</div>
            <div>nirmalya@widehorizons.co.in</div>
            <div className="text-gray-400">
              Godrej Waterside, Tower -II, 12th Floor
              <br />
              Block-DP, Sector-V, Kolkata - 700091
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-400 text-sm mt-12 pt-8 border-t border-gray-700">
        All rights to reserved @ 2025
      </div>
    </footer>
  );
};