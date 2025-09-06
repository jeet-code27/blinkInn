import Image from "next/image";
import RoomInfoCard from "./RoomInfoCard";
import { FaWifi, FaCoffee, FaSpa, FaTv, FaBed, FaParking, FaConciergeBell, FaSwimmingPool, FaCocktail, FaRegNewspaper, FaDumbbell } from "react-icons/fa";

export default function RoomPage2() {
  const room = {
    id: 2,
    name: "Golden Horizon Room",
    price: 200,
    sqFt: 60,
    beds: 1,
    sleeps: 3,
    image: "/images/room0.jpg",
    alt: "Modern hotel room with two wide beds with white linens, beige textured walls, glass shower partition and bedside tables",
  };

  const getOverview = (price) => {
    if (price >= 250) {
      return "Our premium suites are crafted for those who expect nothing less than perfection. From handpicked furnishings to breathtaking views, every corner reflects sophistication and exclusivity.";
    } else if (price >= 150) {
      return "This room blends comfort with modern style — offering spacious design, warm interiors, and all the essentials for a relaxing and enjoyable stay. The Golden Horizon Room is thoughtfully designed to be a peaceful retreat after a day of exploration.";
    } else {
      return "A cozy and budget-friendly option designed for practical travelers. Simple, clean, and welcoming, ensuring comfort without compromise.";
    }
  };

  const facilities = [
    { icon: <FaWifi />, text: "Free Wi-Fi" },
    { icon: <FaTv />, text: "HDTV with Streaming" },
    { icon: <FaCoffee />, text: "Coffee & Tea Maker" },
    { icon: <FaDumbbell />, text: "Gym Access" },
    { icon: <FaParking />, text: "Free Parking" },
    { icon: <FaBed />, text: "High-Quality Bedding" },
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
            
            {/* Facilities section with a descriptive header */}
            <div className="mt-6">
              <h2
                style={{ fontFamily: "Butler, Georgia, serif" }}
                className="text-xl text-black md:text-3xl"
              >
                Room Facilities
              </h2>
              <p className="mt-2 text-base md:text-lg text-gray-600">
                The Golden Horizon Room is equipped with a range of modern comforts to ensure your stay is as pleasant as possible.
              </p>
              <ul className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 text-base md:text-lg text-gray-600">
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
              </ul>
            </div>

            {/* A new, more detailed "Room Features" section */}
            <div className="mt-10">
              <h2
                style={{ fontFamily: "Butler, Georgia, serif" }}
                className="text-xl text-black md:text-3xl"
              >
                Designed for Comfort
              </h2>
              <p className="mt-4 text-base md:text-xl text-gray-600">
                The Golden Horizon Room offers a spacious and tranquil environment. With its warm lighting and elegant furnishings, the room provides a perfect blend of functionality and style. The comfortable bedding ensures a restful night's sleep, and the high-speed Wi-Fi lets you stay connected with ease. Whether you’re here for business or leisure, you'll find everything you need for a comfortable and convenient stay.
              </p>
            </div>
            
            <h2
              style={{ fontFamily: "Butler, Georgia, serif" }}
              className="text-xl text-black md:text-3xl mt-6"
            >
              Room Rules & Regulations
            </h2>
            <ul className="mt-4 text-base flex flex-col justify-start md:text-xl text-gray-600 list-disc pl-5 space-y-2">
              <li>Check-in time is 3:00 PM and check-out time is 12:00 PM.</li>
              <li>Only registered guests are allowed in the room unless prior approval is given.</li>
              <li>Guests are responsible for any damage to hotel property during their stay.</li>
              <li>Return room keys at check-out and avoid sharing them with others.</li>
              <li>For the comfort of all guests, smoking is not permitted in this room.</li>
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