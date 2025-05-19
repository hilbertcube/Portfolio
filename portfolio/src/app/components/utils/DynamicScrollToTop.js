// DynamicScrollToTopButton.jsx
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaChevronUp } from "react-icons/fa";


const DynamicScrollToTopButton = () => {
  const [activeHeaderElement, setActiveHeaderElement] = useState(null);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Function to find which section takes up most of the viewport
    const findMostVisibleSection = () => {
      const sections = document.querySelectorAll('section');
      let maxVisibleSection = null;
      let maxVisibleArea = 0;
      
      const viewportHeight = window.innerHeight;
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        
        // Calculate how much of the section is visible in the viewport
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        
        // If this section has more visible area than our current max, update
        if (visibleHeight > maxVisibleArea) {
          maxVisibleArea = visibleHeight;
          maxVisibleSection = section;
        }
      });
      
      // Return the header of the most visible section
      if (maxVisibleSection) {
        return maxVisibleSection.querySelector('.main-section-header');
      }
      
      return null;
    };

    // Update the active header whenever scroll happens
    const handleScroll = () => {
      const mostVisibleHeader = findMostVisibleSection();
      if (mostVisibleHeader) {
        setActiveHeaderElement(mostVisibleHeader);
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Only render the button when we have an active header
  if (!activeHeaderElement) return null;

  // Use React Portal to inject the button into the active header
  return createPortal(
    <button
      onClick={scrollToTop}
      className="sm:flex hidden items-center gap-1 text-xl px-2 py-1 text-white"
      aria-label="Scroll to top"
    >
      <FaChevronUp />
    </button>,
    activeHeaderElement
  );
};

export default DynamicScrollToTopButton;