import { FaRegFilePdf } from "react-icons/fa";

export default function PublicationCard({ publication, index }) {
  return (
    <li className="flex flex-col sm:flex-row items-start gap-4 w-full">
      <img src={publication.image} alt="Publication" className="border border-black w-3/5 sm:w-3/12 object-cover rounded mx-auto" />
      <div className="w-full flex items-start sm:w-9/12">
      <span className="text-gray-600 font-mono mr-2">[{index + 1}]</span>
        <div>
          <p className='text-base/7'>
            {publication.author}. &ldquo;{publication.title}&rdquo;. <em>{publication.book_title}</em>, {publication.conference}, {publication.year}, {publication.address}, {publication.date}.
          </p>
          <div className="mt-6">
          <a href={publication.pdfLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            <FaRegFilePdf />
            View Paper
          </a>
          </div>
        </div>
        
      </div>
    </li>
  );
};