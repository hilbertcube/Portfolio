import Image from 'next/image'
import { useState } from 'react';
import { FaRegFilePdf } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { FaRegImage } from "react-icons/fa6";


const PublicationCard = ({ publication, index }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <li className="flex flex-col-reverse sm:flex-row items-start gap-4 w-full text-gray-800 p-1">
      <img 
        src ={publication.image} 
        alt ="Publication"
        className="border border-gray-400 w-full sm:w-3/12 object-cover mx-auto rounded hidden sm:block" 
      />
      
      <div className="w-full flex items-start sm:w-9/12">
        <div>
          <p className='text-base/6 text-justify text-[13px] sm:text-base'>
          <span className="font-mono mr-2">[{index + 1}]</span>
            {publication.authors}. &ldquo;{publication.title}&rdquo;. <em>{publication.book_title}</em>, {publication.conference}, {publication.year}, {publication.address}, {publication.date}.
          </p>
          <div className="mt-6 flex justify-center sm:justify-start">
          <button
              onClick={openPopup}
              className="paper-button"
            >
              <FaRegImage />
            </button>
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

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-1 rounded-lg max-w-4xl max-h-screen overflow-auto">
            <div className="flex justify-end items-center">
              <button 
                onClick={closePopup}
                className="text-gray-600 hover:text-gray-900 pr-2"
              >
                ✕
              </button>
            </div>
            <div className="flex justify-center">
              <img 
                src={publication.image} 
                alt="Publication full image" 
                className="max-w-full h-auto"
                width='500'
                height='500'
              />
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default PublicationCard;