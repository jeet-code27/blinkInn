const LocationSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FDF7F3', fontFamily: 'Butler, Georgia, serif' }}>
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-gray-600 tracking-wide uppercase mb-4">
          (OUR LOCATION)
        </p>
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
          C-1, Ajmer Rd, opposite to Diamond Tower, Purani Chungi, Panchsheel Colony, Vidhyut Nagar, Jaipur, Rajasthan 302021
        </h2>
      </div>

      {/* Full Width Google Map */}
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.182663351066!2d75.7568864!3d26.8976974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5f7c693bd15%3A0x8a6aec44af5d952b!2sHotel%20Blink%20Inn%20Jaipur!5e0!3m2!1sen!2sin!4v1756534364741!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Blink Inn Jaipur Location"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;