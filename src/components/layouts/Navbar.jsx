'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#FDF7F3] shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 cursor-pointer">
              Home
            </a>
            <a href="/about-us" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 cursor-pointer">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 cursor-pointer">
              Rooms
            </a>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center lg:flex-none">
            <div className="text-center cursor-pointer">
              <div className="text-3xl font-serif text-gray-800 tracking-wide">
                 BlinkInn
              </div>
              <div className="flex justify-center mt-1">
                <svg width="120" height="8" viewBox="0 0 120 8" className="text-gray-400">
                  {/* Decorative flourish */}
                  <path 
                    d="M10 4 Q20 1 30 4 Q40 7 50 4 Q60 1 70 4 Q80 7 90 4 Q100 1 110 4" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    fill="none"
                  />
                  <circle cx="15" cy="4" r="1.5" fill="currentColor" />
                  <circle cx="35" cy="4" r="1.5" fill="currentColor" />
                  <circle cx="60" cy="4" r="2" fill="currentColor" />
                  <circle cx="85" cy="4" r="1.5" fill="currentColor" />
                  <circle cx="105" cy="4" r="1.5" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 cursor-pointer">
              Pages
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 cursor-pointer">
              Blog
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 cursor-pointer">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium cursor-pointer">
                Home
              </a>
              <a href="/about-us" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium cursor-pointer">
                About
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium cursor-pointer">
                Rooms
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium cursor-pointer">
                Pages
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium cursor-pointer">
                Blog
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium cursor-pointer">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;