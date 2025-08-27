import React from 'react';
import Image from 'next/image';

const HotelFacilities = () => {
  const facilities = [
    {
      title: "Exclusive Suites",
      description: "Spacious rooms are a hallmark of a luxury hotels, designed to provide guests with ample space to relax.",
      iconSrc: "/images/icons/exclusive-suites.svg" // Dummy path
    },
    {
      title: "Free Wi-Fi",
      description: "Spacious rooms are a hallmark of a luxury hotels, designed to provide guests with ample space to relax.",
      iconSrc: "/images/icons/wifi.svg" // Dummy path
    },
    {
      title: "Infinity Pools",
      description: "Spacious rooms are a hallmark of a luxury hotels, designed to provide guests with ample space to relax.",
      iconSrc: "/images/icons/pool.svg" // Dummy path
    },
    {
      title: "Spa & Wellness",
      description: "Spacious rooms are a hallmark of a luxury hotels, designed to provide guests with ample space to relax.",
      iconSrc: "/images/icons/spa.svg" // Dummy path
    },
    {
      title: "Luxury Transport",
      description: "Spacious rooms are a hallmark of a luxury hotels, designed to provide guests with ample space to relax.",
      iconSrc: "/images/icons/transport.svg" // Dummy path
    },
    {
      title: "24/7 Hotel Staff",
      description: "Spacious rooms are a hallmark of a luxury hotels, designed to provide guests with ample space to relax.",
      iconSrc: "/images/icons/staff.svg" // Dummy path
    }
  ];

  return (
    <div className="bg-[#FDF7F3] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 font-medium">
            (HOTEL FACILITIES)
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#0E1825] mb-4 sm:mb-6 leading-tight px-2 sm:px-0" style={{ fontFamily: 'Butler, Georgia, serif' }}>
            Our Luxorefi Hotel Facilities
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xs sm:max-w-md mx-auto leading-relaxed px-4 sm:px-0">
            This luxury hotel services as the perfect retreat<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>for both leisure and business guests.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-[#0E1825] rounded-lg p-6 sm:p-8 text-white hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full flex items-center justify-center mb-4 sm:mb-6 relative overflow-hidden bg-white/10">
                <Image
                  src={facility.iconSrc}
                  alt={facility.title}
                  width={50}
                  height={50} 
                  className="object-cover sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px]"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Butler, Georgia, serif' }}>
                {facility.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelFacilities;