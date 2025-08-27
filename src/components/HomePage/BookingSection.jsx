'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    arrivalDate: '',
    departureDate: '',
    numberOfPeople: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const peopleOptions = [
    '1 Person',
    '2 People',
    '3 People',
    '4 People',
    '5+ People'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
  };

  return (
    <div className="relative py-16 lg:py-20 bg-cover bg-center bg-no-repeat ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/booking.jpg" 
          alt="Luxury Hotel Interior"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70 bg-opacity-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="text-white space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-normal leading-tight mb-4" style={{ fontFamily: 'Butler, Georgia, serif' }}>
                  Ready to Experience<br />
                  Luxury?
                </h2>
                <p className="text-base text-gray-200 leading-relaxed max-w-lg">
                  Book your stay with us and discover unparalleled comfort, exceptional service, and memorable experiences that will exceed your expectations.
                </p>
              </div>

              {/* Explore Now Button */}
              <button className="group inline-flex items-center space-x-3 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                <span className="text-base font-medium">Explore Our Rooms</span>
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </button>
            </div>

            {/* Right Side - Booking Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-xl p-6 shadow-2xl max-w-sm w-full">
                {/* Form Header */}
                <div className="mb-6">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    (ROOM & SUITE)
                  </p>
                  <h3 className="text-4xl text-gray-900" style={{ fontFamily: 'Butler, Georgia, serif' }}>
                    Booking Form
                  </h3>
                </div>

                {/* Booking Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Arrival Date */}
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.arrivalDate}
                      onChange={(e) => handleInputChange('arrivalDate', e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-700 text-sm"
                      placeholder="Arrival Date"
                    />
                    {/* <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" /> */}
                    <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                      Arrival Date
                    </label>
                  </div>

                  {/* Departure Date */}
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) => handleInputChange('departureDate', e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-700 text-sm"
                      placeholder="Departure Date"
                    />
                    {/* <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" /> */}
                    <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                      Departure Date
                    </label>
                  </div>

                  {/* Number of People Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-left text-gray-700 flex items-center justify-between text-sm"
                    >
                      <span className={formData.numberOfPeople ? 'text-gray-900' : 'text-gray-500'}>
                        {formData.numberOfPeople || 'Number of People'}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                      Number of People
                    </label>

                    {/* Dropdown Options */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        {peopleOptions.map((option, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              handleInputChange('numberOfPeople', option);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg text-sm"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 text-sm"
                  >
                    Book a Room
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;