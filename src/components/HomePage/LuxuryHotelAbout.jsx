import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const LuxuryHotelAbout = () => {
  return (
    <section className="min-h-screen bg-[#FDF7F3] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury Hotel Interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-amber-400/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 bg-stone-400/20 rounded-full blur-lg"></div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            
            {/* Subtitle */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-stone-600 bg-stone-100/80 px-3 sm:px-4 py-2 rounded-full">
                About Our Story
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-stone-900">
                <span className="font-light block" style={{fontFamily: 'Butler, Georgia, serif'}}>
                  Streamlining Your
                </span>
                <span className="font-normal block" style={{fontFamily: 'Butler, Georgia, serif'}}>
                  Luxury Hotel Stays
                </span>
                <span className="font-light block" style={{fontFamily: 'Butler, Georgia, serif'}}>
                  Effortlessly
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4 sm:space-y-6 text-stone-700">
              <p className="text-base sm:text-lg leading-relaxed" style={{fontFamily: 'Arial, sans-serif'}}>
                Our platform connects you with the finest luxury in the new accommodations worldwide, offering unparalleled comfort, elegance personalized services to suit every occasion.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed" style={{fontFamily: 'Arial, sans-serif'}}>
                We prioritize your convenience by integrating advanced search filters, real-time availability updates.
              </p>
            </div>



            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-stone-900 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 transform hover:-translate-y-1">
                <span style={{fontFamily: 'Arial, sans-serif'}} className="text-sm sm:text-base">
                  More About
                </span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHotelAbout;