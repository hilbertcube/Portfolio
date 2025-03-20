import Image from 'next/image'
import { FaRegFilePdf } from "react-icons/fa";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { FiStar } from "react-icons/fi";

export default function PublicationCard({ publication, index }) {
  return (
    <li className="flex flex-col-reverse sm:flex-row items-start gap-4 w-full">
      <img 
        src ={publication.image} 
        alt ="Publication"
        className="border border-gray-400 w-4/5 sm:w-3/12 object-cover mx-auto" 
      />
      
      <div className="w-full flex items-start sm:w-9/12">
      <span className="text-gray-600 font-mono mr-2">[{index + 1}]</span>
        <div>
          <p className='text-base/6 text-justify text-[14px] sm:text-base'>
            {publication.author}. &ldquo;{publication.title}&rdquo;. <em>{publication.book_title}</em>, {publication.conference}, {publication.year}, {publication.address}, {publication.date}.
          </p>
          <div className="mt-6">
          <a href={publication.pdfLink} target="_blank" rel="noopener noreferrer" className="paper-button">
            <FaRegFilePdf />
            View Paper
          </a>
          {publication.blog && (
            <a href={publication.blog} target="_blank" rel="noopener noreferrer" className="paper-button">
            <FiStar />
            View Blog
            </a>
          )}
          </div>
        </div>
        
      </div>
    </li>
  );
};