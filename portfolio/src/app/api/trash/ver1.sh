'use client'

import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";

export default function Home() {
  const prompt = "Give me a short poem about nature";
  const [output, setOutput] = useState('Hello, I am your poetry bot');
  const generateText = async () => {
    try {
      const response = await fetch('/api/generator', {
        method: 'POST',
        headers: {
          'Content-type' : 'application'
        },
        body: JSON.stringify({body:prompt})
      });

      const data = await response.json();
      if(response.ok) {
        setOutput(data.output);
      } else {
        setOutput(data.error);
      }
    } catch(error) {
      console.error(error);
    }
  };
  return (
    <div>
      <main className = "flex min-h-screen flex-col items-center justify-between p-5">
        <div className ="z-10 max-w-5xl w-full items-center justify-between cursor-pointer">
          <div onClick={generateText}>
            {output.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}