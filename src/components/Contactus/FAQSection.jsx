'use client';
import Image from 'next/image';
import { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(3); // Fourth item open by default

const faqs = [
  {
    id: 1,
    question: "Where is Hotel Blink Inn located in Jaipur?",
    answer: "Hotel Blink Inn is located at C-1, Ajmer Road, opposite Diamond Tower, Purani Chungi, Panchsheel Colony, Vidhyut Nagar, Jaipur, Rajasthan 302021. The central location offers easy access to popular tourist attractions, shopping hubs, and business centers."
  },
  {
    id: 2,
    question: "What amenities does Hotel Blink Inn Jaipur offer?",
    answer: "Hotel Blink Inn Jaipur provides premium amenities such as a multi-cuisine restaurant, lounge, indoor games, business center, power backup, free Wi-Fi, housekeeping, airport transfers, CCTV security, and well-furnished rooms for a comfortable stay."
  },
  {
    id: 3,
    question: "Does Hotel Blink Inn provide airport transfers?",
    answer: "Yes, Hotel Blink Inn Jaipur offers both shuttle service and paid airport transfers, ensuring guests have a smooth and hassle-free travel experience to and from Jaipur International Airport."
  },
  {
    id: 4,
    question: "Is Hotel Blink Inn suitable for business meetings and events?",
    answer: "Yes, Hotel Blink Inn features a business center, conference room, banquet facilities, and professional support services, making it an excellent choice for corporate meetings, business events, and small gatherings in Jaipur."
  },
  {
    id: 5,
    question: "Why should I book Hotel Blink Inn Jaipur?",
    answer: "Hotel Blink Inn Jaipur is highly rated for its cleanliness, comfort, and courteous staff. With its prime location on Ajmer Road, top-class amenities, and excellent service, it offers great value for leisure, family, and business travelers visiting Jaipur."
  }
];


  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FDF7F3', fontFamily: 'Butler, Georgia, serif' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/herofirst.jpg" // Dummy path - update this with your actual image
                alt="Luxury hotel spa bathroom with elegant lighting and modern design"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - FAQ Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <p className="text-sm font-medium text-gray-600 tracking-wide uppercase mb-4">
                (FAQ'S)
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
                Have Any Question
              </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-1">
              {faqs.map((faq) => (
                <div key={faq.id} className="border-b border-gray-300">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full py-4 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                    aria-expanded={openFAQ === faq.id}
                  >
                    <span className="text-lg md:text-3xl font-medium text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openFAQ === faq.id ? (
                        <svg 
                          className="w-6 h-6 text-gray-600 transform transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg 
                          className="w-6 h-6 text-gray-600 transform transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      )}
                    </div>
                  </button>
                  
                  {/* Answer Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFAQ === faq.id 
                        ? 'max-h-96 opacity-100 pb-4' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pr-8">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;