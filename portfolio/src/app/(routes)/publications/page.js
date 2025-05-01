"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";
import Footer from "@components/NavFooter";
import PublicationCard from "@components/PublicationCard";

import { publications } from "@data/publications";

export default function Home() {


  return (
    <div className="grid grid-rows-[auto_1fr] justify-items-center min-h-screen p-4 sm:p-10">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start" id="main">
        <div className="p-2 sm:p-4 font-Jura w-full mr-auto ml-auto ms:w-[850px]">

          <h1 className="text-2xl font-bold mb-3">Publications</h1>

          <div className="max-h-[75vh] overflow-y-auto py-4">
          <ul className="list-none space-y-5 font-Jura">
                {publications.map((publication, index) => (
                  <div key={publication.id || index}>
                    <PublicationCard 
                      publication={publication} 
                      index={index} 
                    />
                  </div>
                ))}
              </ul>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}



