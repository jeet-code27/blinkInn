"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#FDF7F3] shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-40 text-2xl ">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-25">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900  transition-colors duration-200 cursor-pointer font-bold"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-gray-900 font-bold transition-colors duration-200 cursor-pointer"
            >
              About
            </Link>
            <Link
              href="/rooms"
              className="text-gray-700 hover:text-gray-900 font-bold transition-colors duration-200 cursor-pointer"
            >
              Rooms
            </Link>
          </div>

          {/* Logo */}
          <div className="flex-1  flex ml-2 justify-right lg:flex-none">
            <div className="flex items-center justify-center">
              <Link href="/">
                <Image
                  src="/images/logo-removebg-preview.png"
                  alt="Blink Inn Logo"
                  width={100} // Set a fixed width for the logo
                  height={35} // Adjust height to maintain aspect ratio
                  className="w-24 h-auto sm:w-32 sm:h-auto" // Responsive sizing
                />
              </Link>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-25">
            <Link
              href="/gallery"
              className="text-gray-700 hover:text-gray-900 font-bold transition-colors duration-200 cursor-pointer"
            >
              Gallery
            </Link>
            <Link
              href="/blogs"
              className="text-gray-700 hover:text-gray-900 font-bold transition-colors duration-200 cursor-pointer"
            >
              Blog
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-700 hover:text-gray-900 font-bold transition-colors duration-200 cursor-pointer"
            >
              Contact
            </Link>
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
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium cursor-pointer"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium cursor-pointer"
              >
                About
              </Link>
              <Link
                href="/rooms"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium cursor-pointer"
              >
                Rooms
              </Link>
              <Link
                href="/gallery"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium cursor-pointer"
              >
                Gallery
              </Link>
              <Link
                href="/blogs"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium cursor-pointer"
              >
                Blog
              </Link>
              <Link
                href="/contact-us"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
