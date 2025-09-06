import Image from "next/image";
import RoomInfoCard from "./RoomInfoCard";
import { FaWifi, FaCoffee, FaTv, FaBed, FaDumbbell, FaParking } from "react-icons/fa";

export default function RoomPage3() {
  const room = {
    id: 3,
    name: "Pearl Orchid Suite",
    price: 150,
    sqFt: 70,
    bathrooms: 1,
    beds: 1,
    sleeps: 2,
    image: "/images/room2.jpg",
    alt: "Elegant hotel room with soft lighting, plush bedding, and decorative orchid accents",
  };

  const getOverview = (price) => {
    if (price >= 250) {
      return "Our premium suites are crafted for those who expect nothing less than perfection. From handpicked furnishings to breathtaking views, every corner reflects sophistication and exclusivity.";
    } else if (price >= 150) {
      return "This room blends comfort with modern style — offering spacious design, warm interiors, and all the essentials for a relaxing and enjoyable stay. The Pearl Orchid Suite is a tranquil haven, perfect for unwinding after a day of sightseeing.";
    } else {
      return "A cozy and budget-friendly option designed for practical travelers. Simple, clean, and welcoming, ensuring comfort without compromise.";
    }
  };

  const facilities = [
    { icon: <FaWifi />, text: "Free Wi-Fi" },
    { icon: <FaBed />, text: "Comfortable Bedding" },
    { icon: <FaTv />, text: "Cable TV" },
    { icon: <FaDumbbell />, text: "Gym Access" },
    { icon: <FaParking />, text: "Free Parking" },
    { icon: <FaCoffee />, text: "Coffee & Tea Maker" },
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
          <div className="w-full lg:w-2/3 border p-1 md:p-8">
            <h2
              style={{ fontFamily: "Butler, Georgia, serif" }}
              className="text-xl text-black md:text-3xl"
            >
              Room Overview
            </h2>
            <p className="mt-4 text-base md:text-xl text-gray-600">
              {getOverview(room.price)}
            </p>

            {/* A new section for the Pearl Orchid Suite's unique features */}
            <div className="mt-10">
              <h2
                style={{ fontFamily: "Butler, Georgia, serif" }}
                className="text-xl text-black md:text-3xl"
              >
                A Serene & Stylish Retreat
              </h2>
              <p className="mt-4 text-base md:text-xl text-gray-600">
                The Pearl Orchid Suite is designed for guests who appreciate a peaceful and elegant atmosphere. The room features a minimalist design with soft, ambient lighting and custom furnishings. A luxurious queen-sized bed with crisp white linens and a plush mattress ensures a perfect night’s sleep. The en-suite bathroom is appointed with modern fixtures and complimentary toiletries, adding a touch of convenience and luxury to your stay.
              </p>
            </div>

            {/* Facilities section */}
            <div className="mt-10">
              <h2
                style={{ fontFamily: "Butler, Georgia, serif" }}
                className="text-xl text-black md:text-3xl"
              >
                Room Facilities
              </h2>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-base md:text-lg text-gray-600">
                {facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-6 bg-[#F8EEE2] rounded-lg border"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full text-xl">
                      {facility.icon}
                    </div>
                    <h3
                      className="text-lg font-semibold"
                      style={{ fontFamily: "Butler, Georgia, serif" }}
                    >
                      {facility.text}
                    </h3>
                  </div>
                ))}
              </ul>
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
              <li>A quiet time policy is in effect from 10:00 PM to 8:00 AM to ensure the comfort of all guests.</li>
              <li>This room is a designated non-smoking area.</li>
            </ul>
          </div>

          <div className="w-full lg:w-1/3 border p-4">
            <RoomInfoCard room={room} />
          </div>
        </div>
      </div>
    </div>
  );
}