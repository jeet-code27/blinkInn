'use client';
import Image from 'next/image';
import { useState } from 'react';

const HotelGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Images' },
    { id: 'rooms', name: 'Rooms & Suites' },
    { id: 'dining', name: 'Dining' },
    { id: 'amenities', name: 'Amenities' },
    { id: 'exterior', name: 'Exterior' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: '/images/herofirst.jpg',
      alt: 'Deluxe Room with City View',
      category: 'rooms',
      title: 'Deluxe Room',
      gridClass: 'md:col-span-2 md:row-span-2' // Large featured image
    },
    {
      id: 2,
    //   src: '/images/gallery/lobby-entrance.jpg',
    src: '/images/herofirst.jpg',
      alt: 'Grand Lobby Entrance',
      category: 'exterior',
      title: 'Grand Lobby',
      gridClass: ''
    },
    {
      id: 3,
    //   src: '/images/gallery/restaurant-dining.jpg',
 src: '/images/herofirst.jpg',
      alt: 'Fine Dining Restaurant',
      category: 'dining',
      title: 'Restaurant',
      gridClass: ''
    },
    {
      id: 4,
    //   src: '/images/gallery/presidential-suite.jpg',
    src: '/images/herofirst.jpg',
      alt: 'Presidential Suite Living Area',
      category: 'rooms',
      title: 'Presidential Suite',
      gridClass: 'md:col-span-2'
    },
    {
      id: 5,
    //   src: '/images/gallery/spa-wellness.jpg',
    src: '/images/herofirst.jpg',
      alt: 'Spa and Wellness Center',
      category: 'amenities',
      title: 'Spa & Wellness',
      gridClass: 'md:col-span-2'
    },
    {
      id: 6,
    //   src: '/images/gallery/rooftop-pool.jpg',
    src: '/images/herofirst.jpg',
      alt: 'Rooftop Swimming Pool',
      category: 'amenities',
      title: 'Rooftop Pool',
      gridClass: ''
    },
    {
      id: 7,
    //   src: '/images/gallery/conference-room.jpg',
    src: '/images/herofirst.jpg',
      alt: 'Executive Conference Room',
      category: 'amenities',
      title: 'Conference Room',
      gridClass: ''
    },
    {
      id: 8,
    //   src: '/images/gallery/bar-lounge.jpg',
    src: '/images/herofirst.jpg',
      alt: 'Premium Bar and Lounge',
      category: 'dining',
      title: 'Bar & Lounge',
      gridClass: 'md:col-span-2'
    },
    {
      id: 9,
    //   src: '/images/gallery/executive-suite.jpg',
    src: '/images/herofirst.jpg',
      alt: 'Executive Suite Bedroom',
      category: 'rooms',
      title: 'Executive Suite',
      gridClass: ''
    },
    {
      id: 10,
    //   src: '/images/gallery/hotel-exterior.jpg',
    src: '/images/herofirst.jpg',
      alt: 'Hotel Blink Inn Exterior View',
      category: 'exterior',
      title: 'Hotel Exterior',
      gridClass: 'md:row-span-2'
    },
    {
      id: 11,
    //   src: '/images/gallery/breakfast-buffet.jpg',
    src: '/images/herofirst.jpg',
      alt: 'Gourmet Breakfast Buffet',
      category: 'dining',
      title: 'Breakfast Buffet',
      gridClass: ''
    },
    {
      id: 12,
    //   src: '/images/gallery/fitness-center.jpg',
    src: '/images/herofirst.jpg',
      alt: 'Modern Fitness Center',
      category: 'amenities',
      title: 'Fitness Center',
      gridClass: 'md:col-span-2'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openPreview = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDF7F3', fontFamily: 'Butler, Georgia, serif' }}>
      {/* Header Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-600 tracking-wide uppercase mb-4">
            (HOTEL GALLERY)
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 leading-tight mb-6">
            Hotel Blink Inn
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the elegance and luxury that awaits you at Hotel Blink Inn. 
            From our beautifully appointed rooms to our world-class amenities, 
            every detail is designed to provide an unforgettable experience.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg transform scale-105'
                    : 'bg-white/70 text-gray-700 hover:bg-white hover:shadow-md hover:scale-105'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${image.gridClass}`}
                onClick={() => openPreview(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-center text-white">
                      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <p className="text-sm font-medium">{image.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-500 cursor-pointer"
          onClick={closePreview}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Container */}
            <div className="relative w-full h-full max-w-5xl max-h-[90vh] animate-in zoom-in duration-700">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg px-6 py-4 inline-block">
                <h3 className="text-white text-xl font-medium mb-1" style={{ fontFamily: 'Butler, Georgia, serif' }}>
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 text-sm" style={{ fontFamily: 'Butler, Georgia, serif' }}>
                  {selectedImage.alt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelGallery;