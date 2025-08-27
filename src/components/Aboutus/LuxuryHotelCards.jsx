'use client';
import React, { useState, useEffect } from 'react';

const LuxuryHotelCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardAnimations, setCardAnimations] = useState([false, false, false]);

  // Hotel room images data - 3 vertical cards
  const hotelCards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
      delay: 0.2
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
      delay: 0.4
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
      delay: 0.6
    }
  ];

  useEffect(() => {
    // Trigger the main visibility
    const timer1 = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Trigger individual card animations with staggered delays
    hotelCards.forEach((card, index) => {
      setTimeout(() => {
        setCardAnimations(prev => {
          const newAnimations = [...prev];
          newAnimations[index] = true;
          return newAnimations;
        });
      }, 800 + (card.delay * 1000));
    });

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF7F3] flex items-center justify-center p-4 sm:p-6 lg:p-8" style={{ fontFamily: 'Butler, Georgia, serif' }}>
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <div className={`text-center mb-8 sm:mb-10 lg:mb-12 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 font-medium">
            (ABOUT US)
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black leading-tight px-4 sm:px-8 lg:px-12">
            <span className="block mb-2 sm:mb-4">Streamlining in Your Luxury</span>
            <span className="block">Hotel Stays Effortlessly</span>
          </h1>
        </div>

        {/* Cards Container - Responsive fanned overlapping layout */}
        <div className="flex items-center justify-center perspective-[1000px] md:pl-64 pl-10">
          <div className="relative w-full max-w-5xl h-64 sm:h-80 md:h-96 lg:h-[420px] xl:h-[480px] flex items-center justify-center">
            {hotelCards.map((card, index) => (
              <div
                key={card.id}
                className={`absolute w-44 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] transition-all duration-1000 ease-out transform-gpu ${
                  cardAnimations[index] 
                    ? getCardFinalPosition(index)
                    : 'translate-x-0 translate-y-0 rotate-0 scale-100'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  zIndex: index === 1 ? 10 : (index === 2 ? 8 : 6), // Center card on top
                  left: '18%',
                  top: '5%',
                  transform: cardAnimations[index] 
                    ? `translate(-50%, -50%) ${getCardFinalPosition(index)}`
                    : 'translate(-50%, -50%) translate-x-0 translate-y-0 rotate-0 scale-100'
                }}
              >
                <div 
                  className={`w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl bg-cover bg-center transition-all duration-1000 ${
                    cardAnimations[index] ? 'shadow-xl sm:shadow-2xl lg:shadow-3xl' : 'shadow-md sm:shadow-xl'
                  }`}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.1)), url(${card.image})`,
                    aspectRatio: '4/5'
                  }}
                >
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story Section */}
        <div className={`text-center mt-16 sm:mt-20 lg:mt-24 px-4 sm:px-8 lg:px-12 transition-all duration-1000 delay-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-6 sm:mb-8 font-medium">
            (OUR STORY)
          </p>
          <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-medium text-black leading-tight max-w-5xl mx-auto pb-20">
           Our Platform Connect With Finest Luxury in The New Accommodations to Worldwide,
           Offering Unparalleled Comfort, Elegance
         Services to Suit Every Occasion
          </h2>
        </div>
      </div>
    </div>
  );
};

// Helper function to determine final card positions - responsive playing cards spread
const getCardFinalPosition = (index) => {
  // Mobile-first approach with responsive adjustments
  const positions = [
    // Card 1 - Left card (rotated left)
    'translate-x-[-60px] sm:translate-x-[-80px] md:translate-x-[-100px] lg:translate-x-[-120px] xl:translate-x-[-150px] -rotate-[15deg] sm:-rotate-[15deg] md:-rotate-[15deg] lg:-rotate-[15deg]',
    // Card 2 - Center card (slight rotation)
    'translate-x-0 rotate-[1deg] sm:rotate-[2deg] scale-105',
    // Card 3 - Right card (rotated right)
    'translate-x-[60px] sm:translate-x-[80px] md:translate-x-[100px] lg:translate-x-[120px] xl:translate-x-[150px] rotate-[15deg] sm:rotate-[15deg] md:rotate-[15deg] lg:rotate-[15deg]'
  ];
  
  return positions[index] || '';
};

export default LuxuryHotelCards;