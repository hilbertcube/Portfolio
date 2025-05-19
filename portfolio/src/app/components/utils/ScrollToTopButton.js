import React, { useEffect, useState, useRef } from "react";
import { FaChevronUp } from "react-icons/fa";

function ScrollToTopButton({ show }) {
  if (!show) return null;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className="text-white bg-black bg-opacity-20 hover:bg-opacity-40 inline sm:hidden px-2 rounded transition-all text-xl"
    >
      <FaChevronUp />
    </button>
  );
}

export default function HeaderSection({ title, marginClass = "mt-16 sm:mt-32" }) {
  const [showButton, setShowButton] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-1"></div>

      <div className={`main-section-header ${marginClass}`}>
        <div className="relative justify-center">
          <span>{title}</span>
          <span className="absolute mr-auto">
            <ScrollToTopButton show={showButton} />
          </span>
        </div>
      </div>
    </>
  );
}
