"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const scrollRef = useRef(null);

const testimonials = [
  {
    id: 1,
    text: "I came across the booking website, its elegant and user-friendly interface immediately caught my eye. Browsing through the site felt effortless, thanks to it's a responsive design that worked seamlessly on both my laptop and phone. The booking process was straightforward.",
    author: "Jessica Adams",
    rating: 5.0
  },
  {
    id: 2,
    text: "I came across the booking website, its elegant and user-friendly interface immediately caught my eye. Browsing through the site felt effortless, thanks to its responsive design that worked perfectly on both my laptop and phone. The booking process was simple.",
    author: "Steven Phillips",
    rating: 5.0
  },
  {
    id: 3,
    text: "The transparency pricing ensured there were no hidden fees, which greatly built trust. Additionally multi language support made accessible for international travelers like myself. The dynamic",
    author: "Michael Johnson",
    rating: 5.0
  },
  {
    id: 4,
    text: "I stayed at Hotel Blink Inn during my Jaipur trip and had a wonderful experience. The rooms were clean, staff was very polite, and the location was perfect for exploring the city. The booking through the website was smooth and hassle-free. Highly recommended!",
    author: "Rahul Mehta",
    rating: 4.8
  }
];


  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollSpeed = 0.5; // Pixels per frame

    const animate = () => {
      if (scrollContainer.scrollTop >= scrollContainer.scrollHeight / 2) {
        scrollContainer.scrollTop = 0;
      } else {
        scrollContainer.scrollTop += scrollSpeed;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="bg-[#FDF7F3] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">
            (TESTIMONIALS)
          </p>
          <h2 className="text-5xl text-gray-900 leading-tight" style={{ fontFamily: 'Butler, Georgia, serif' }}>
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2  items-start ">
          
          {/* Left Side - Hotel Image */}
          <div className="relative">
            <div className=" rounded-l-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/girl4.jpg" // Dummy path
                alt="Luxury Hotel Room"
                width={600}
                height={600}
                className="object-cover w-full h-[400px] lg:h-[700px]"
              />
            </div>
          </div>

          {/* Right Side - Scrolling Testimonials */}
          <div className='md:border-t md:border-r md:border-b md:pl-10  md:pt-0 pt-10 '>
            {/* Scrolling Testimonials Container */}
            <div className="relative h-[700px] overflow-hidden ">
              <div 
                ref={scrollRef}
                className="h-full overflow-hidden"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="space-y-6 ">
                  {duplicatedTestimonials.map((testimonial, index) => (
                    <div 
                      key={`${testimonial.id}-${index}`}
                      className="bg-[#F8EEE2] rounded-2xl p-8 border border-gray-100 shadow-sm"
                    >
                      {/* Testimonial Text */}
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        "{testimonial.text}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          {/* <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              width={48}
                              height={48}
                              className="object-cover w-full h-full"
                            />
                          </div> */}
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg" style={{ fontFamily: 'Butler, Georgia, serif' }}>
                              {testimonial.author}
                            </h4>
                            {/* <p className="text-gray-600 text-sm">
                              {testimonial.position}
                            </p> */}
                          </div>
                        </div>
                        
                        {/* Company Logo */}
                        {/* <div className="flex items-center space-x-3">
                          <Image
                            src={testimonial.companyLogo}
                            alt={testimonial.company}
                            width={80}
                            height={32}
                            className="object-contain"
                          />
                        </div> */}
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-2 mt-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-black fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-gray-900 font-semibold ml-2">
                          ({testimonial.rating})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;