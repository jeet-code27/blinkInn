'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
  // State for managing the active main image
  const [activeImage, setActiveImage] = useState('/images/herofirst.jpg');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Array of hotel images
  const hotelImages = [
    {
      src: '/images/herofirst.jpg',
      alt: 'Hotel room',
      main: '/images/herofirst.jpg'
    },
    {
      src: '/images/herosecond.jpg', 
      alt: 'Hotel lobby',
      main: '/images/herosecond.jpg'
    },
    {
      src: '/images/herofirst.jpg',
      alt: 'Hotel exterior', 
      main: '/images/herofirst.jpg'
    }
  ];

  // Function to handle thumbnail click
  const handleThumbnailClick = (imageSrc, index) => {
    setActiveImage(imageSrc);
    setCurrentIndex(index);
  };

  // Auto-cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % hotelImages.length;
          setActiveImage(hotelImages[nextIndex].main);
          return nextIndex;
        });
        setIsTransitioning(false);
      }, 150);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []); // Remove dependency to avoid recreating interval

  return (
    <div className="bg-[#FDF7F3] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            
            {/* 5-star rating */}
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-700 font-medium text-sm sm:text-base">(5.0)</span>
            </div>

            {/* Main heading */}
            <div className="space-y-2 sm:space-y-4 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-gray-900 leading-tight">
                Welcome to
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-gray-900 leading-tight">
                Luxury Hotel
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              Luxury hotel booking refers the process of reserving accommodations 
              in high-end hotels that offer exceptional quality, comfort, and services. 
              These establishments are often characterized by premium facilities.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="inline-flex cursor-pointer items-center px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-300 text-gray-900 font-semibold text-sm sm:text-base rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group">
                Explore Now
                <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Bottom section with thumbnails and stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-8 pt-6 sm:pt-8">
              
              {/* Interactive Image thumbnails */}
              <div className="flex space-x-3 sm:space-x-4">
                {hotelImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 shadow-sm cursor-pointer transition-all duration-300 hover:scale-105 ${
                      currentIndex === index
                        ? 'border-blue-500 ring-2 ring-blue-200 scale-110' 
                        : 'border-white hover:border-gray-300'
                    }`}
                    onClick={() => handleThumbnailClick(image.main, index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                    {/* Active indicator */}
                    {currentIndex === index && (
                      <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
                     
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">5,000+</div>
                <div className="text-xs sm:text-sm text-gray-600">Our World</div>
                <div className="text-xs sm:text-sm text-gray-600">Wide Satisfied Customer.</div>
              </div>
            </div>
          </div>

          {/* Right Content - Main Hotel Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[600px] xl:h-[700px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              {/* Background image for smooth transition */}
              <div className="absolute inset-0">
                <Image
                  src={activeImage}
                  alt="Luxury hotel interior"
                  fill
                  className={`object-cover transition-opacity duration-300 ease-in-out ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                  priority
                />
              </div>
              
              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Image counter */}
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black/50 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                {currentIndex + 1} / {hotelImages.length}
              </div>
              
              {/* Progress dots */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                {hotelImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    onClick={() => handleThumbnailClick(hotelImages[index].main, index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;