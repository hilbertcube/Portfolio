"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";
import Footer from "../../components/NavFooter";
import { FaRegFilePdf } from "react-icons/fa";

const PublicationCard = ({ publication, index }) => {
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

export default function Home() {
  const [publications] = useState([
    {
      id: 'author2025',
      author: 'Rick Ramirez, John Korah, Subodh Bhandari, Yuqi Chen, Du D. Le, and Tu Nguyen',
      title: 'Accelerated Image Stitching Via Parallel Computing for UAV Applications',
      book_title: 'Proceedings of the AIAA Conference 2025',
      conference: 'AIAA SCITECH 2025 Forum*',
      year: 2025,
      month: 'January',
      address: 'Orlando, Florida, USA',
      date: '10 January 2025',
      pdfLink: './AIAA_Scitech_Paper_2025_HPC.pdf',
      image: './images/publications/with_openmp.png'
    },
  ]);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-start justify-items-center min-h-screen p-4 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start" id="main">
        <div className="p-2 sm:p-4 font-Jura w-full mr-auto ml-auto ms:w-[800px]">
          <h1 className="text-2xl font-bold mb-4">Publications</h1>
          <ul className="list-none space-y-5">
            {publications.map((publication, index) => (
              <PublicationCard key={index} publication={publication} index={index} />
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}



