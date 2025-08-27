'use client';
import React, { useState } from 'react';

const LuxuryAccommodation = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const accommodations = [
    {
      id: 1,
      title: "Luxury Room",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 2,
      title: "Premium Suite",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "Executive Suite",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      title: "Presidential Villa",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-slate-400">
              (ACCOMMODATION)
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white max-w-4xl mx-auto px-4" style={{fontFamily: 'Butler, Georgia, serif'}}>
            <span className="font-light">Every Detail Reflects Our</span>
            <br />
            <span className="font-light">Passion for </span>
            <span className="font-normal">Luxury</span>
          </h2>
        </div>

        {/* Grid Layout */}
      {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
          
          {/* First Box */}
          <div className="lg:col-span-2 relative group">
            <div 
              className="relative h-[250px] lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              onMouseEnter={() => setHoveredBox(1)}
              onMouseLeave={() => setHoveredBox(null)}
            >
              <img
                src={accommodations[0].image}
                alt="Luxury Room"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Hover Text */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                hoveredBox === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white text-center px-4" style={{fontFamily: 'Butler, Georgia, serif'}}>
                  {accommodations[0].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Second Box */}
          <div className="relative group">
            <div 
              className="relative h-[250px] lg:h-[350px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              onMouseEnter={() => setHoveredBox(2)}
              onMouseLeave={() => setHoveredBox(null)}
            >
              <img
                src={accommodations[1].image}
                alt="Premium Suite"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Hover Text */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                hoveredBox === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <h3 className="text-2xl sm:text-2xl lg:text-3xl font-light text-white text-center px-4" style={{fontFamily: 'Butler, Georgia, serif'}}>
                  {accommodations[1].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Third and Fourth Boxes - Different layout for mobile vs desktop */}
          <div className="lg:grid lg:grid-rows-2 lg:gap-4 lg:gap-6">
            
            {/* Third Box */}
            <div className="relative group mb-4 sm:mb-6 lg:mb-0">
              <div 
                className="relative h-[250px] lg:h-[165px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                onMouseEnter={() => setHoveredBox(3)}
                onMouseLeave={() => setHoveredBox(null)}
              >
                <img
                  src={accommodations[2].image}
                  alt="Executive Suite"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Hover Text */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  hoveredBox === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <h3 className="text-2xl lg:text-2xl font-light text-white text-center px-2" style={{fontFamily: 'Butler, Georgia, serif'}}>
                    {accommodations[2].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Fourth Box */}
            <div className="relative group">
              <div 
                className="relative h-[250px] lg:h-[165px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                onMouseEnter={() => setHoveredBox(4)}
                onMouseLeave={() => setHoveredBox(null)}
              >
                <img
                  src={accommodations[3].image}
                  alt="Presidential Villa"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Hover Text */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  hoveredBox === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <h3 className="text-2xl lg:text-2xl font-light text-white text-center px-2" style={{fontFamily: 'Butler, Georgia, serif'}}>
                    {accommodations[3].title}
                  </h3>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryAccommodation;