import BookingSection from "@/components/HomePage/BookingSection";

import HeroSection from "@/components/HomePage/HeroSection";
import HotelFacilities from "@/components/HomePage/HotelFacilities";
import HotelRooms from "@/components/HomePage/HotelRooms";
import LuxuryAccommodation from "@/components/HomePage/LuxuryAccommodation";
import LuxuryHotelAbout from "@/components/HomePage/LuxuryHotelAbout";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";



export default function Home() {
  return (
  <>
  <HeroSection/>
  <LuxuryHotelAbout/>
  <LuxuryAccommodation/>
  <HotelRooms/>
  <HotelFacilities/>
  <TestimonialsSection/>
  <div className="py-24 bg-[#FDF7F3]">
  <BookingSection/>
  </div>
  </>
  );
}
