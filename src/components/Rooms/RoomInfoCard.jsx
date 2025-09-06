import React from "react";
import { FaBed } from "react-icons/fa";
import { PiRulerLight } from "react-icons/pi";
import { LiaBathSolid } from "react-icons/lia";
import { FaUserFriends } from "react-icons/fa";

export default function RoomInfoCard({ room }) {
  const details = [
    { icon: <PiRulerLight />, label: `${room.sqFt} Sq Ft` },
    { icon: <FaBed />, label: `${room.beds} Bed` },
    { icon: <FaUserFriends />, label: `${room.sleeps} Sleeps` },
    { icon: <LiaBathSolid />, label: "1 Bathroom" },
  ];

  return (
    <div className="bg-[#F8EEE2] border rounded-lg p-6 max-w-sm">
      {/* Header */}
      <h2
        className="text-xl font-bold mb-4"
        style={{ fontFamily: "Butler, Georgia, serif" }}
      >
        More Information
      </h2>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {details.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-800">
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>

      <hr className="border-gray-300 mb-6" />

      {/* Price Section */}
      <h2
        className="text-xl font-bold mb-2"
        style={{ fontFamily: "Butler, Georgia, serif" }}
      >
        Price
      </h2>
      <p className="text-gray-800 mb-6">${room.price} USD</p>

      {/* Button */}
      <button  className="w-full py-3 bg-[#D4AF71] text-black font-medium rounded-full hover:bg-[#c19a5f] transition">
        Book a Room
      </button>
    </div>
  );
}