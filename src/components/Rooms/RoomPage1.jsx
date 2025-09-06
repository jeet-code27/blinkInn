import Image from "next/image";
import RoomInfoCard from "./RoomInfoCard";
import {
  FaWifi,
  FaCoffee,
  FaSpa,
  FaTv,
  FaBed,
  FaParking,
  FaConciergeBell,
  FaSwimmingPool,
  FaCocktail,
  FaRegNewspaper,
  FaDumbbell,
} from "react-icons/fa";
import { LiaSwimmerSolid } from "react-icons/lia";

export default function RoomPage1() {
  const room = {
    id: 1,
    name: "Royal Sapphire Suite",
    price: 300,
    sqFt: 90,
    beds: 2,
    sleeps: 4,
    image: "/images/room1.jpg",
    alt: "Luxury bedroom with golden curtains behind bed, bedside lamp with red glass base, white bedding and elegant wood headboard",
  };

  const getOverview = (price) => {
    if (price >= 250) {
      return "Our premium suites are crafted for those who expect nothing less than perfection. From handpicked furnishings to breathtaking views, every corner reflects sophistication and exclusivity. The Royal Sapphire Suite provides an unparalleled level of luxury, ensuring a stay that is both memorable and enchanting.";
    } else if (price >= 150) {
      return "This room blends comfort with modern style — offering spacious design, warm interiors, and all the essentials for a relaxing and enjoyable stay.";
    } else {
      return "A cozy and budget-friendly option designed for practical travelers. Simple, clean, and welcoming, ensuring comfort without compromise.";
    }
  };

  const facilities = [
    { text: "Free Wi-Fi", icon: <FaWifi /> },
    { text: "24/7 Concierge", icon: <FaConciergeBell /> },
    { text: "Private Pool Access", icon: <LiaSwimmerSolid /> },
    { text: "In-room Minibar", icon: <FaCocktail /> },
    { text: "Luxury Linens", icon: <FaBed /> },
    { text: "Daily Spa Service", icon: <FaSpa /> },
    { text: "Gym Access", icon: <FaDumbbell /> },
    { text: "Private Balcony", icon: <FaRegNewspaper /> },
  ];

  return (
    <div className="p-0 md:p-8 bg-[#FDF7F3] flex flex-col min-h-screen w-full">
      <h1
        className="flex justify-center text-gray-900 text-2xl md:text-4xl mb-6"
        style={{ fontFamily: "Butler, Georgia, serif" }}
      >
        {room.name} — ${room.price}/Night
      </h1>

      <div className="w-full flex justify-center mb-6 md:mb-8">
        <div className="w-full max-w-7xl">
          <Image
            src={room.image}
            alt={room.alt}
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="w-full flex justify-center items-center p-4 md:p-8">
        <div className="flex flex-col max-w-7xl lg:flex-row w-full gap-6">
          <div className="w-full lg:w-2/3 p-1 md:p-8">
            <h2
              style={{ fontFamily: "Butler, Georgia, serif" }}
              className="text-xl text-black md:text-3xl"
            >
              Room Overview
            </h2>
            <p className="mt-4 text-base md:text-xl text-gray-600">
              {getOverview(room.price)}
            </p>

            {/* A dedicated section for facilities with a better layout */}
            <div className="mt-10">
              <h2
                style={{ fontFamily: "Butler, Georgia, serif" }}
                className="text-xl text-black md:text-3xl"
              >
                Exclusive Facilities
              </h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-6 bg-[#F8EEE2] rounded-lg border"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full text-xl">
                      {facility.icon}
                    </div>
                    <h3
                      className="text-lg font-semibold text-black"
                      style={{ fontFamily: "Butler, Georgia, serif" }}
                    >
                      {facility.text}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* A new section for the Room's Story or Unique Features */}
            <div className="mt-10">
              <h2
                style={{ fontFamily: "Butler, Georgia, serif" }}
                className="text-xl text-black md:text-3xl"
              >
                A Royal Experience
              </h2>
              <p className="mt-4 text-base md:text-xl text-gray-600">
                Inspired by the timeless elegance of classical European palaces, the Royal Sapphire Suite is a masterpiece of design. The hand-carved mahogany furniture, plush velvet drapes, and a custom-designed king-sized bed with Egyptian cotton sheets are all chosen to provide the utmost comfort. The spacious en-suite bathroom, featuring a freestanding tub and a rain shower, transforms a simple bath into a spa-like retreat. Enjoy panoramic city views from your private balcony as you sip on a complimentary drink from your personal minibar.
              </p>
            </div>

            <h2
              style={{ fontFamily: "Butler, Georgia, serif" }}
              className="text-xl text-black md:text-3xl mt-10"
            >
              Room Rules & Regulations
            </h2>
            <ul className="mt-4 text-base flex flex-col justify-start md:text-xl text-gray-600 list-disc pl-5 space-y-2">
              <li>Check-in time is 3:00 PM and check-out time is 12:00 PM.</li>
              <li>Only registered guests are allowed in the room unless prior approval is given.</li>
              <li>Guests are responsible for any damage to hotel property during their stay.</li>
              <li>Return room keys at check-out and avoid sharing them with others.</li>
              <li>Smoking is strictly prohibited inside the suite and on the balcony.</li>
              <li>Please inform the concierge of any special requests or needs at least 24 hours in advance.</li>
            </ul>
          </div>

          <div className="w-full lg:w-1/3 p-4">
            <RoomInfoCard room={room} />
          </div>
        </div>
      </div>
    </div>
  );
}