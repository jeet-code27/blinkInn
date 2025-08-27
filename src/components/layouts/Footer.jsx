'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-white py-20 px-8" style={{ fontFamily: 'Butler, Georgia, serif' }}>
      {/* Animated Background with Blue Overlay */}
      <div className="absolute inset-0">
        {/* Background Image with Zoom Animation */}
        <div className="absolute inset-0">
          <Image
            src="/images/herofirst.jpg" // Dummy path
            alt="Hotel background"
            fill
            className="object-cover animate-pulse"
            style={{
              animation: 'zoomOut 20s ease-in-out infinite alternate'
            }}
            priority={false}
            sizes="100vw"
          />
        </div>
        
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#19232F]/95 to-[#0D1825]/95" />
        
        {/* Additional Pattern Overlay for Texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand Section */}
          <div className="space-y-8">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-4 group">
                <h2 className="text-3xl font-bold tracking-wider text-white drop-shadow-lg group-hover:text-blue-200 transition-colors duration-300">
                  BlinkInn
                </h2>
              </Link>
            </div>
            
            {/* Enhanced Brand Description */}
            <div className="space-y-3 text-blue-100 leading-relaxed text-lg">
              <p className="drop-shadow-sm">Discover elegance beyond compare,</p>
              <p className="drop-shadow-sm">Where every detail is extraordinary,</p>
              <p className="drop-shadow-sm">Your luxury escape begins here.</p>
            </div>
            
            {/* Enhanced Social Icons */}
            <div className="flex space-x-5 pt-4">
              {[
                { name: 'IG', label: 'Instagram', href: 'https://instagram.com/blinkinn' },
                { name: 'TW', label: 'Twitter', href: 'https://twitter.com/blinkinn' },
                { name: 'FB', label: 'Facebook', href: 'https://facebook.com/blinkinn' },
                { name: 'WS', label: 'WhatsApp', href: 'https://wa.me/1234567890' }
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 border border-white/50 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/10 hover:bg-white hover:text-blue-900 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="text-sm font-semibold">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Pages Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-10 tracking-wider text-white drop-shadow-lg">Pages</h3>
            <nav className="space-y-6">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about-us' },
                { name: 'Rooms', path: '/' },
                { name: 'Blog', path: '/' },
                { name: 'Contact', path: '/' }
              ].map((page) => (
                <Link
                  key={page.name}
                  href={page.path}
                  className="block text-blue-100 hover:text-white transition-all duration-300 text-lg hover:translate-x-2 drop-shadow-sm hover:drop-shadow-md"
                >
                  {page.name}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* CMS Pages Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-10 tracking-wider text-white drop-shadow-lg">Services</h3>
            <nav className="space-y-6">
              {[
                { name: 'Room Service', path: '/services/room-service' },
                { name: 'Spa & Wellness', path: '/services/spa' },
                { name: 'Restaurant', path: '/services/restaurant' },
                { name: 'Events', path: '/services/events' },
                { name: 'Business Center', path: '/services/business' }
              ].map((page) => (
                <Link
                  key={page.name}
                  href={page.path}
                  className="block text-blue-100 hover:text-white transition-all duration-300 text-lg hover:translate-x-2 drop-shadow-sm hover:drop-shadow-md"
                >
                  {page.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-white/30 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-blue-200 text-base">
            <p className="drop-shadow-sm">
              Copyright © {new Date().getFullYear()} BlinkInn
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <Link 
                href="/privacy-policy" 
                className="hover:text-white transition-colors duration-300 drop-shadow-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="hover:text-white transition-colors duration-300 drop-shadow-sm"
              >
                Terms of Service
              </Link>
            </div>
            <p className="drop-shadow-sm">
              Powered by{' '}
              <Link 
                href="https://seocialmedia.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                SEOcial Media Solutions
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* CSS Keyframes for Animation */}
      <style jsx>{`
        @keyframes zoomOut {
          0% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1.0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;