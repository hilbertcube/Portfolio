"use client"; 
// import { useEffect } from "react";
// import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";
import Footer from "../../components/NavFooter";


export default function Home() {
  const [publications] = useState([
    {
      id: 'author2025',
      author: 'Rick Ramirez, John Korah, Subodh Bhandari, Yuqi Chen, Du D. Le, and Tu Nguyen',
      title: 'Accelerated Image Stitching Via Parallel Computing for UAV Applications',
      booktitle: 'Proceedings of the AIAA Conference 2025',
      year: 2025,
      month: 'January',
      address: 'Florida, USA',
      date: '10 January 2025',
    },
  ]);

  return (
    <div className="grid grid-rows-[1fr] min-h-screen">
      {/*className="grid grid-rows-[auto_1fr_auto] items-start justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]"*/}
      <div className="grid grid-rows-[auto_1fr_auto] items-start justify-items-center min-h-screen p-4 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start" id="main">
          <div className="p-2 sm:p-4 font-Jura w-full mr-auto ml-auto ms:w-9/12">
            <h1 className="text-2xl font-bold mb-4">Publications</h1>
            <ul className="list-none space-y-2">
              {publications.map((publication, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-600 font-mono mr-2">[{index + 1}]</span>
                  <div>
                    <p>
                      {publication.author}. &ldquo;{publication.title}&rdquo;. <em>{publication.booktitle}</em>, {publication.year}, {publication.address}, {publication.date}.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <Footer/>
      </div>

    </div>

  );
}


