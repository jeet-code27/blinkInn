import React from "react";
import { LiaSwimmerSolid } from "react-icons/lia";
import { FaBed, FaSnowflake, FaWifi, FaGlassMartiniAlt, FaDumbbell } from "react-icons/fa";

export default function RoomFacilities()
{
    const facilities = [
        { name: "Awesome Bed", icon: <FaBed /> },
        { name: "Air Conditioning", icon: <FaSnowflake /> },
        { name: "Swimming Pool", icon: <LiaSwimmerSolid /> },
        { name: "Free Internet", icon: <FaWifi /> },
        { name: "Soft Drinks", icon: <FaGlassMartiniAlt /> },
        { name: "Fitness Centre", icon: <FaDumbbell /> },
    ];

    return (
        <section className="bg-[#FDF7F3] text-gray-900  py-12">
            {/* Heading */}
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-3xl font-bold"
                    style={{ fontFamily: "Butler, Georgia, serif" }}
                >
                    Room Facilities
                </h2>
                <p className="mt-3 text-xl text-gray-700 leading-relaxed">
                    Luxury hotel rooms are designed to provide an experience comfort,
                    convenience, and opulence. These rooms typically feature premium
                    linens, ensuring a restful sleep.
                </p>

                {/* Facilities Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                {facility.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
