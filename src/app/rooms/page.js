"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Move3D, Bed, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const HotelRoomCards = () => {
  // Room data
  const rooms = [
    {
      id: 1,
      name: "Royal Sapphire Suite",
      price: 300,
      sqFt: 90,
      beds: 1,
      sleeps: 3,
      image: "/images/room1.jpg",
      fallbackImage:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f6ea5718-6b74-4e66-bd4e-02dfc4b019ca.png",
      alt: "Luxury bedroom with golden curtains behind bed, bedside lamp with red glass base, white bedding and elegant wood headboard",
    },
    {
      id: 2,
      name: "Golden Horizon Room",
      price: 200,
      sqFt: 60,
      beds: 2,
      sleeps: 4,
      image: "/images/room0.jpg",
      fallbackImage: "https://placehold.co/600x450?text=Image+Not+Available",
      alt: "Modern hotel room with two wide beds with white linens, beige textured walls, glass shower partition and bedside tables",
    },
    {
      id: 3,
      name: "Pearl Orchid Suite",
      price: 150,
      sqFt: 70,
      beds: 1,
      sleeps: 2,
      image: "/images/room2.jpg",
      fallbackImage: "https://placehold.co/600x450?text=Image+Not+Available",
      alt: "Elegant hotel room with soft lighting, plush bedding, and decorative orchid accents",
    },
    {
      id: 4,
      name: "Eclipse Grand Suite",
      price: 100,
      sqFt: 50,
      beds: 1,
      sleeps: 3,
      image: "/images/room3.jpg",
      fallbackImage:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f6ea5718-6b74-4e66-bd4e-02dfc4b019ca.png",
      alt: "Modern hotel room with eclipse-themed decor, comfortable bedding, and elegant furnishings",
    },
  ];

  return (
    <div className="bg-[#FDF7F3] py-10 px-6 sm:px-10 lg:px-20">
      {/* Page Title */}

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl lg:text-3xl  flex justify-center text-gray-900 mb-16"
        style={{ fontFamily: "Butler, Georgia, serif" }}
      >
       (ROOMS & SUITES)
      </motion.h2>
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl lg:text-6xl  flex justify-center text-gray-900 mb-16"
        style={{ fontFamily: "Butler, Georgia, serif" }}
      >
        Explore Rooms and Suites
      </motion.h1>
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {rooms.map((room) => (
          <HotelRoomCard key={room.id} room={room} />
        ))}
      </main>
    </div>
  );
};

const HotelRoomCard = ({ room }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    // Set initial position to mouse position when entering
    if (imageContainerRef.current) {
      const containerRect = imageContainerRef.current.getBoundingClientRect();
      const x = e.clientX - containerRect.left - 24;
      const y = e.clientY - containerRect.top - 24;

      // Make sure the circle stays within container boundaries
      const maxX = containerRect.width - 48;
      const maxY = containerRect.height - 48;

      const boundedX = Math.max(0, Math.min(x, maxX));
      const boundedY = Math.max(0, Math.min(y, maxY));

      setPosition({ x: boundedX, y: boundedY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Don't reset position - just fade out
  };

  const handleMouseMove = (e) => {
    if (imageContainerRef.current) {
      const containerRect = imageContainerRef.current.getBoundingClientRect();
      const x = e.clientX - containerRect.left - 24; // Subtract half of circle width to center it
      const y = e.clientY - containerRect.top - 24; // Subtract half of circle height to center it

      // Make sure the circle stays within container boundaries
      const maxX = containerRect.width - 48;
      const maxY = containerRect.height - 48;

      const boundedX = Math.max(0, Math.min(x, maxX));
      const boundedY = Math.max(0, Math.min(y, maxY));

      setPosition({ x: boundedX, y: boundedY });
    }
  };

  return (
    <section
      className="rounded-xl overflow-hidden shadow-lg relative group cursor-pointer w-full"
      data-card-id={room.id}
    >
      <div
        className="relative h-100 overflow-hidden"
        ref={imageContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Background Image with Zoom Effect */}
        <Link href={`/room${room.id}`}>
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url(${room.image})`,
              filter: "brightness(0.9)",
              transform: isHovered ? "scale(1.1)" : "scale(1.0)",
              transition: "transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1)",
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          </div>
        </Link>

        {/* Floating "View" Circle */}
        <div
          id={`view-circle-${room.id}`}
          className="absolute w-38 h-38 bg-white text-black text-lg font-bold rounded-full flex items-center justify-center transition-opacity duration-1000 pointer-events-none z-10"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            opacity: isHovered ? 1 : 0,
          }}
        >
          View
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 bg-white text-black font-medium text-sm rounded-lg px-3 py-1 shadow-md select-none">
          ${room.price}
          <span className="font-normal">/Night</span>
        </div>
      </div>

      {/* Info Block */}
      <div className="mt-4 px-2 sm:px-4 pb-4">
        <h2 className="font-serif font-semibold text-lg text-gray-900">
          {room.name}
        </h2>
        <div className="mt-3 flex gap-6 text-gray-700 text-sm select-none">
          <div className="flex items-center gap-1">
            <Move3D className="w-5 h-5" strokeWidth="1.8" />
            {room.sqFt} Sq Ft
          </div>
          <div className="flex items-center gap-1">
            <Bed className="w-5 h-5" strokeWidth="1.8" />
            {room.beds} Bed{room.beds !== 1 ? "s" : ""}
          </div>
          <div className="flex items-center gap-1">
            <img
              src="/images/icons/friendship.png"
              alt="Sleeps icon"
              className="w-5 h-5"
            />
            {room.sleeps} Sleep{room.sleeps !== 1 ? "s" : ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelRoomCards;
