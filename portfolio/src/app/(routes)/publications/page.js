"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";
import Footer from "@components/NavFooter";
import PublicationCard from "@components/PublicationCard";

export default function Home() {
  const [publications] = useState([
    {
      id: 'author2025',
      author: 'R. Ramirez, J. Korah, S. Bhandari, D. D. Le, Y. Chen, and T. Nguyen',
      title: 'Accelerated Image Stitching Via Parallel Computing for UAV Applications',
      book_title: 'in Proc. AIAA Conference 2025',
      conference: 'AIAA SCITECH 2025 Forum*',
      year: 2025,
      month: 'January',
      address: 'Orlando, Florida, USA',
      date: 'Jan. 2025',
      pdfLink: './docs/AIAA_Scitech_Paper_2025_HPC.pdf',
      image: '/images/publications/with_openmp.webp',
      blog: 'https://neumanncondition.com/articles/accelerating-feature-extraction-and-image-stitching-algorithm/'
    },
  ]);

  return (
    <div className="grid grid-rows-[auto_1fr] justify-items-center min-h-screen p-4 sm:p-10">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start" id="main">
        <div className="p-2 sm:p-4 font-Jura w-full mr-auto ml-auto ms:w-[850px]">
          <h1 className="text-2xl font-bold mb-6">Publications</h1>
          <div className="max-h-[75vh] overflow-y-auto p-4">
            <ul className="list-none space-y-5">
              {publications.map((publication, index) => (
                <PublicationCard key={index} publication={publication} index={index} />
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}



