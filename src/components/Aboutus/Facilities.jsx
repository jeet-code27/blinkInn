'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Building2, Wifi, Flower, Car } from 'lucide-react';

const Facilities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const facilities = [
    {
      icon: <Building2 size={32} />,
      title: "Exclusive Suites",
      description: "We prioritize your convenience integrating advanced search filters, real-time availability the updates, and secure payment options. Our dedicated to customer service team is available around clock to assist."
    },
    {
      icon: <Wifi size={32} />,
      title: "Free Wi-Fi",
      description: "We prioritize your convenience integrating advanced search filters, real-time availability the updates, and secure payment options. Our dedicated to customer service team is available around clock to assist."
    },
    {
      icon: <Flower size={32} />,
      title: "Spa & Wellness",
      description: "We prioritize your convenience integrating advanced search filters, real-time availability the updates, and secure payment options. Our dedicated to customer service team is available around clock to assist."
    },
    {
      icon: <Building2 size={32} />,
      title: "Premium Dining",
      description: "We prioritize your convenience integrating advanced search filters, real-time availability the updates, and secure payment options. Our dedicated to customer service team is available around clock to assist."
    },
    {
      icon: <Wifi size={32} />,
      title: "Business Center",
      description: "We prioritize your convenience integrating advanced search filters, real-time availability the updates, and secure payment options. Our dedicated to customer service team is available around clock to assist."
    },
    {
  icon: <Car size={32} />,
  title: "Free Parking",
  description: "Enjoy hassle-free stays with our secure and spacious parking facilities, ensuring your vehicle is safe and easily accessible at all times."
}
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(facilities.length / getItemsPerSlide()));
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, facilities.length]);

  const getItemsPerSlide = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1280) return 3; // xl
    if (window.innerWidth >= 768) return 2;  // md
    return 1; // sm
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
      setCurrentSlide(0); // Reset to first slide on resize
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(facilities.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return facilities.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0E1825' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm font-medium tracking-wider uppercase mb-4">
            (HOTEL FACILITIES)
          </p>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl text-white font-normal"
            style={{ fontFamily: 'Butler, Georgia, serif' }}
          >
            Why Choose Blink Inn
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group cursor-pointer"
            disabled={totalSlides <= 1}
          >
            <ChevronLeft size={24} className="text-white group-hover:text-gray-200" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group cursor-pointer"
            disabled={totalSlides <= 1}
          >
            <ChevronRight size={24} className="text-white group-hover:text-gray-200" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`grid gap-6 ${
                    itemsPerSlide === 1 ? 'grid-cols-1' :
                    itemsPerSlide === 2 ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                  }`}>
                    {facilities
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((facility, index) => (
                        <div
                          key={slideIndex * itemsPerSlide + index}
                          className="bg-white rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer"
                        >
                          {/* Icon */}
                          <div className="mb-6">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:bg-gray-800 transition-colors duration-300">
                              {facility.icon}
                            </div>
                          </div>

                          {/* Title */}
                          <h3 
                            className="text-2xl sm:text-3xl text-gray-900 font-normal mb-6 leading-tight"
                            style={{ fontFamily: 'Butler, Georgia, serif' }}
                          >
                            {facility.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-600 leading-relaxed text-base">
                            {facility.description}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-12 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Progress Bar (Optional) */}
        {isAutoPlaying && totalSlides > 1 && (
          <div className="mt-8 max-w-md mx-auto">
            <div className="w-full bg-white/20 rounded-full h-1">
              <div 
                className="bg-white h-1 rounded-full transition-all duration-100 ease-linear"
                style={{ 
                  width: `${((currentSlide + 1) / totalSlides) * 100}%`,
                  animation: isAutoPlaying ? 'progress 4s linear infinite' : 'none'
                }}
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Facilities;