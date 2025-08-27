import Facilities from "@/components/Aboutus/Facilities";
import LuxuryHotelCards from "@/components/Aboutus/LuxuryHotelCards";
import BookingSection from "@/components/HomePage/BookingSection";
import HotelRooms from "@/components/HomePage/HotelRooms";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";

export default function AboutUs() {
  return (
   <>
   <LuxuryHotelCards/>
   <Facilities/>
   <HotelRooms/>
   <TestimonialsSection/>
   <div className="py-24 bg-[#FDF7F3]">
  <BookingSection/>
  </div>
   </>
  );
}