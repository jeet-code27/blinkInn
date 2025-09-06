'use client';
import React, { useState, useRef, useCallback } from 'react';
import { ArrowRight, Move3D, Bed, Users } from 'lucide-react';
import Link from 'next/link';

const HotelRooms = () => {
  const [hoveredRoom, setHoveredRoom] = useState(null);
  const roomRefs = useRef({});
  const rafRef = useRef(null);

  const rooms = [
    {
      id: 1,
      name: "Royal Sapphire Suite",
      price: 300,
      size: "90 Sq Ft",
      beds: "1 Bed",
      sleeps: "3 Sleeps",
      image: "/images/room.jpg",
      slug: 'room1'
    },
    {
      id: 2,
      name: "Golden Horizon Room",
      price: 200,
      size: "60 Sq Ft",
      beds: "2 Beds",
      sleeps: "4 Sleeps",
      image: "/images/room2.jpg",
      slug: 'room2'
    },
    {
      id: 3,
      name: "Pearl Orchid Suite",
      price: 150,
      size: "70 Sq Ft",
      beds: "1 Bed",
      sleeps: "2 Sleeps",
      image: "/images/room3.jpg",
      slug: 'room3'
    },
    {
      id: 4,
      name: "Eclipse Grand Suite",
      price: 100,
      size: "50 Sq Ft",
      beds: "1 Bed",
      sleeps: "3 Sleeps",
      image: "/images/room5.jpg",
      slug: 'room4'
    }
  ];

  // Throttled mouse move handler using requestAnimationFrame
  const handleMouseMove = useCallback((e, roomId) => {
    if (!roomRefs.current[roomId]) return;
    
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      const rect = roomRefs.current[roomId].getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const viewButton = roomRefs.current[roomId].querySelector('.view-button');
      if (viewButton) {
        viewButton.style.left = `${x}px`;
        viewButton.style.top = `${y}px`;
      }
    });
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 py-8 sm:py-12 bg-[#FDF7F3] min-h-screen" style={{fontFamily: 'Butler, Georgia, serif'}}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 sm:mb-16 max-w-7xl mx-auto space-y-6 sm:space-y-0">
        <div className="flex-1">
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-2 sm:mb-3 font-medium">
            (ROOMS & SUITES)
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-800 leading-tight">
            Explore Rooms and Suites
          </h1>
        </div>
        
        {/* Desktop Button - Original perfect alignment */}
        <div className="hidden sm:flex justify-end">
          <Link href="/rooms">
          <button className="group cursor-pointer flex items-center bg-white hover:bg-[#C8A882] border border-gray-300 rounded-lg hover:shadow-md transition-all duration-300 p-1">
            <span className="text-black font-medium text-base px-5 py-2">
              View All Rooms
            </span>
            <div className="flex items-center justify-center w-10 h-10 bg-[#C8A882] group-hover:bg-white transition-all duration-300 rounded-md ml-2">
              <ArrowRight className="w-4 h-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </button>
          </Link>
        </div>
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {rooms.map((room) => (
          <div key={room.id} className="group relative">
            {/* Image Container */}
            <div 
              ref={el => roomRefs.current[room.id] = el}
              className="relative h-64 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-xl sm:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl sm:hover:shadow-3xl"
              onMouseMove={(e) => handleMouseMove(e, room.id)}
              onMouseEnter={() => setHoveredRoom(room.id)}
              onMouseLeave={() => setHoveredRoom(null)}
            >
              {/* Background Image with Zoom Effect */}
              <Link href={`/room${room.id}`}>
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${room.image})`,
                  filter: 'brightness(0.9)',
                  transform: hoveredRoom === room.id ? 'scale(1.1)' : 'scale(1.0)',
                  transition: 'transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1)'
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>
              </Link>
              {/* Floating View Button - Hidden on mobile for better UX */}
              <div 
                className="view-button absolute pointer-events-none z-20 transition-all duration-200 opacity-0 group-hover:opacity-100 hidden sm:block"
                style={{
                  transform: 'translate(-50%, -50%)',
                  left: '50%',
                  top: '50%'
                }}
              >
                <div className="bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-2xl">
                  <span className="text-gray-800 font-semibold text-xs sm:text-sm">View</span>
                </div>
              </div>

              {/* Price Tag */}
              <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 z-10">
                <div className="bg-white/95 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                  <span className="text-gray-900 font-bold text-lg sm:text-2xl">${room.price}</span>
                  <span className="text-gray-600 text-xs sm:text-sm font-medium">/Night</span>
                </div>
              </div>
            </div>

            {/* Room Details - Outside Image */}
            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 px-2 sm:px-0">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-800 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                {room.name}
              </h3>
              
              {/* Room Features */}
              <div className="flex items-center flex-wrap gap-4 sm:gap-6 text-gray-600">
                <div className="flex items-center space-x-2 group/feature hover:text-gray-800 transition-colors duration-200">
                  <Move3D className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-medium whitespace-nowrap">{room.size}</span>
                </div>
                
                <div className="flex items-center space-x-2 group/feature hover:text-gray-800 transition-colors duration-200">
                  <Bed className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-medium whitespace-nowrap">{room.beds}</span>
                </div>
                
                <div className="flex items-center space-x-2 group/feature hover:text-gray-800 transition-colors duration-200">
                  <Users className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-medium whitespace-nowrap">{room.sleeps}</span>
                </div>
              </div>
            </div>

            {/* Card Glow Effect - Reduced on mobile */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-400/10 sm:from-blue-400/20 to-purple-400/10 sm:to-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 transform scale-105 h-64 sm:h-96"></div>
          </div>
        ))}
      </div>

      {/* Mobile Button - Positioned below all rooms */}
      <div className="flex justify-center mt-8 sm:mt-12 sm:hidden max-w-7xl mx-auto">
        <button className="group cursor-pointer flex items-center bg-white hover:bg-[#C8A882] border border-gray-300 rounded-lg hover:shadow-md transition-all duration-300 p-1 w-full max-w-xs">
          <span className="text-black font-medium text-sm px-3 py-2 flex-1 text-center">
            View All Rooms
          </span>
          <div className="flex items-center justify-center w-8 h-8 bg-[#C8A882] group-hover:bg-white transition-all duration-300 rounded-md ml-2 flex-shrink-0">
            <ArrowRight className="w-3 h-3 text-black transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default HotelRooms;