'use client';
import Image from 'next/image';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FDF7F3', fontFamily: 'Butler, Georgia, serif' }}>
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-gray-600 tracking-wide uppercase mb-2">
          (CONTACT US)
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight">
          Get In Touch
        </h2>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Form */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <p className="text-sm font-medium text-gray-600 tracking-wide uppercase mb-2">
                (LET'S CONTACT US)
              </p>
              <h3 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
                We're Always Here to<br />
                Help, Contact Us Today
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="sr-only">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name*"
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-0 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="sr-only">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name*"
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-0 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address*"
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-0 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number*"
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-0 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write Your Message"
                  rows={4}
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-0 resize-none transition-colors duration-300"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/herofirst.jpg" // Dummy path - update this with your actual image
                alt="Luxury hotel room with modern amenities and elegant design"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;