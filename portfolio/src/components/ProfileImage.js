"use client"; 
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProfileImage() {
  const [rotation, setRotation] = useState(0);

  // Event listener for mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate the angle of rotation based on mouse position
      const rect = document.querySelector(".ring-wrapper").getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      const angle = Math.atan2(y, x) * (180 / Math.PI);
      // top is negative, bottom is positive
      // console.log(angle);
      setRotation(angle);
    };

    // Event listener for mobile click
    const handleClick = (e) => {
      const rect = document.querySelector(".ring-wrapper").getBoundingClientRect();
      const x = e.touches[0].clientX - (rect.left + rect.width / 2);
      const y = e.touches[0].clientY - (rect.top + rect.height / 2);
      const angle = Math.atan2(y, x) * (180 / Math.PI);
      setRotation(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleClick);

    // Clean up event listeners
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleClick);
    };
  }, []);

  return (
    <div className="relative mr-auto ml-auto ring-wrapper" data-aos="zoom-in">
      {/* Outer Ring */}
      <div
        className="absolute top-0 left-0 w-full h-full rounded-full"
        style={{
          border: "5px solid #dc2626", // Light blue semi-transparent ring
          clipPath: "polygon(60% 0%, 100% 0%, 100% 100%, 60% 100%)",
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Profile Image */}
      <Image
        className="rounded-full border-5 border-slate-300"
        src="/images/profile_1.jpg"
        alt="Profile Image"
        width={180}
        height={180}
        priority
      />
    </div>
  );
}
