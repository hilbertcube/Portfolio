import { useState } from 'react';
import { FaRegFilePdf } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { FaRegImage } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const PublicationCard = ({ publication, index }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = publication.images || [];

  const openPopup = () => {
    setCurrentImageIndex(0);
    setIsPopupOpen(true);
  };
  const closePopup = () => setIsPopupOpen(false);
  const showPrevImage = () => setCurrentImageIndex((i) => i - 1);
  const showNextImage = () => setCurrentImageIndex((i) => i + 1);

  return (
  <div>
    <li 
      className="flex flex-col-reverse sm:flex-row items-start gap-4 cursor-pointer w-full text-gray-300 p-4 hover:bg-zinc-900 rounded-lg"
      data-aos="fade-up" data-aos-once>
      <img 
        src={publication.thumbnail} 
        alt="Publication"
        className="border border-gray-800 w-full sm:w-3/12 object-cover mx-auto rounded-lg"
        loading="lazy"
      />

      <div className="w-full flex items-start sm:w-9/12">
        <div>
          <p className='text-base/6 text-justify text-[13px] sm:text-base'>
            <span className="font-mono mr-2">[{index + 1}]</span>
            {publication.authors}. &ldquo;{publication.title}&rdquo;. <em>{publication.book_title}</em>, {publication.conference}, {publication.year}, {publication.address}, {publication.date}.
          </p>
          <div className="mt-6 flex justify-start gap-2 flex-wrap sm:flex-nowrap overflow-x-auto">
            {images.length > 0 && (
              <button onClick={openPopup} className="paper-button">
                <FaRegImage />
                Images
              </button>
            )}
            <a href={publication.pdfLink} rel="noopener noreferrer" className="paper-button">
              <FaRegFilePdf />
              View Paper
            </a>
            {publication.blog && (
              <a href={publication.blog} rel="noopener noreferrer" className="paper-button">
                <FiStar />
                View Blog
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
      {isPopupOpen && (
        // Background blur
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[1000]">

          {/* Window */}
          <div className="bg-white p-1 rounded-lg overflow-auto z-[2000] relative">
            <div className="flex justify-end items-center">
              <button 
                onClick={closePopup}
                className="text-gray-600 hover:text-red-500 font-bold text-xl absolute top-2 right-4 z-[1002]"
              >
                ✕
              </button>
            </div>
            <div className="flex items-center justify-center gap-0">
              <button
                onClick={showPrevImage}
                className={`text-2xl text-black transition-opacity duration-200 ${
                  currentImageIndex > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <IoIosArrowBack />
              </button>
              <div className="relative w-[80vw] sm:w-[500px] sm:h-[550px] h-auto overflow-hidden flex items-center justify-center">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Publication image ${i + 1}`}
                      className="object-contain shrink-0"
                    />
                  ))}
                </div>
              </div>
              <button
                onClick={showNextImage}
                className={`text-2xl text-black transition-opacity duration-200 ${
                  currentImageIndex < images.length - 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      )}
  </div>
    
  );
};

export default PublicationCard;
