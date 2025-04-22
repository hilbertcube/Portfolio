"use client"; 
import { useState, useEffect } from "react";
import Image from "next/image";


export default function ProfileImage() {
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);  // Add state to track if the device is mobile
  let previousAngle = 0;
  let isTouching = false;

  useEffect(() => {
    // Check if we are on the client (browser)
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768); // Set isMobile based on window width
      
      // 5 is too fast, can cause errors sometimes, if
      // work in mobile environment on desktop
      const rotationMultiplier = isMobile ? 4 : 1;  // Increase the multiplier for faster rotation on mobile

      const handleMouseMove = (e) => {
        const ringWrapper = document.querySelector(".ring-wrapper");
        if (ringWrapper) { // Check if the element exists
          const rect = ringWrapper.getBoundingClientRect();
          const x = e.clientX - (rect.left + rect.width / 2);
          const y = e.clientY - (rect.top + rect.height / 2);
          let angle = Math.atan2(y, x) * (180 / Math.PI);
          if (angle < 0) {
            angle += 360;
          }
          let deltaAngle = angle - previousAngle;
          if (deltaAngle > 180) {
            deltaAngle -= 360;
          } else if (deltaAngle < -180) {
            deltaAngle += 360;
          }

          previousAngle = angle;
          setRotation((prevRotation) => prevRotation + deltaAngle * rotationMultiplier);
        }
      };

      const handleTouchMove = (e) => {
        if (isTouching) {
          const rect = document.querySelector(".ring-wrapper").getBoundingClientRect();
          const x = e.touches[0].clientX - (rect.left + rect.width / 2);
          const y = e.touches[0].clientY - (rect.top + rect.height / 2);
          let angle = Math.atan2(y, x) * (180 / Math.PI);
          if (angle < 0) {
            angle += 360;
          }
          let deltaAngle = angle - previousAngle;
          if (deltaAngle > 180) {
            deltaAngle -= 360;
          } else if (deltaAngle < -180) {
            deltaAngle += 360;
          }

          previousAngle = angle;
          setRotation((prevRotation) => prevRotation + deltaAngle * rotationMultiplier);
        }
      };

      const handleTouchStart = (e) => {
        isTouching = true;
        const rect = document.querySelector(".ring-wrapper").getBoundingClientRect();
        const x = e.touches[0].clientX - (rect.left + rect.width / 2);
        const y = e.touches[0].clientY - (rect.top + rect.height / 2);
        let angle = Math.atan2(y, x) * (180 / Math.PI);
        if (angle < 0) {
          angle += 360;
        }
        previousAngle = angle;
        setRotation((prevRotation) => prevRotation + 0); // Start by setting the initial rotation on touch
      };

      const handleTouchEnd = () => {
        isTouching = false;
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
      window.addEventListener("touchcancel", handleTouchEnd);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
        window.removeEventListener("touchcancel", handleTouchEnd);
      };
    }
  }, [isMobile]); 


  const radius = 180;
  return (
    <div className="relative mr-auto ml-auto ring-wrapper" data-aos="zoom-in">
      {/* Outer Ring */}
      <div
        className="absolute top-0 left-0 w-full h-full rounded-full"
        style={{
          border: "5px solid #dc2626",
          clipPath: "polygon(60% 0%, 100% 0%, 100% 100%, 60% 100%)",
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* Profile Image */}
      <Image
        className="rounded-full border-5 border-slate-300"
        src="/images/profiles/Goose.webp"
        alt="Profile Image"
        width={radius}
        height={radius}
        priority
      />
    </div>
  );
}
