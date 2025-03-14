'use client'

import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, useEffect, useRef } from "react";

const topics = ["Dying Nature", "Humans Society", "Nihilism", "God", "The Bible", "Love", "Existentialism", "Time", "The Universe", "Memory", "Death", "Hope", "Philosophy", "Technology", "Freedom", "Justice", "Chaos", "Humanity", "Art", "Music", "Emotion", "Bad Dreams", "Brutal History", "Wisdom", "Loneliness", "Suffering", "Creation", "Spirituality", "Peace", "Conflict", "War"];


function getRandomTopic() {
  const randomIndex = Math.floor(Math.random() * topics.length);
  return topics[randomIndex];
}

const prompt2 = "Give me a poem from a poet that is no more than 25 lines. Follow this format: title, enclosed in double star **, the poem, the author's name and year at the end. Only follow these instructions, and nothing else.";

// `Give me a short poem about ${newTopic}, with at least 15 lines. Only generate the poem and its title (enclosed in double star **), and NOTHING else.`

export default function Home() {
  const opening = 'Writing...';
  const [output, setOutput] = useState(opening);
  const [displayedText, setDisplayedText] = useState(opening);
  const [isTyping, setIsTyping] = useState(false);
  const typingIntervalRef = useRef(null);
  
  const generateText = async () => {
    if (isTyping) return; // Prevent multiple clicks while typing
    
    setIsTyping(true);

    const newTopic = getRandomTopic();
    console.log(newTopic);
    const prompt = `Give me a short poem about ${newTopic}, with at least 15 lines. Only generate the poem and its title (enclosed in double star **), and NOTHING else. Show emotions and creativity. Remember the previous poems and try not to use the same words.`;

    // Clear any existing interval
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }
    
    try {
      const response = await fetch('/api/generator', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ body: prompt })
      });

      const data = await response.json();
      if (response.ok) {
        setOutput(data.output); // Set full text
        setDisplayedText(''); // Reset display
        startTypingEffect(data.output);
      } else {
        const errorText = data.error || 'An error occurred';
        setOutput(errorText);
        setDisplayedText('');
        startTypingEffect(errorText);
      }
    } catch (error) {
      console.error(error);
      const errorText = 'Error generating text';
      setOutput(errorText);
      setDisplayedText('');
      startTypingEffect(errorText);
    }
  };

  const startTypingEffect = (text) => {
    let charIndex = 0;
    
    // Clear any existing interval
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
    
    typingIntervalRef.current = setInterval(() => {
      if (charIndex < text.length) {
        // This ensures characters are added from left to right
        setDisplayedText(text.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
        setIsTyping(false);
      }
    }, 15);
  };

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  // Call on load
  useEffect(() => {
    generateText();
  }, []);

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-10 bg-black">
        <div className="chat-box">
          <p className="whitespace-pre-wrap font-mono">{displayedText}</p>
        </div>
        <div className="mt-4 inline-flex flex-row gap-2">
          <a href="./" className = "font-Jura rounded hover:bg-blue-600 p-2 bg-blue-700 text-white">Go Back</a>
          <button className = {`font-Jura rounded hover:bg-blue-600 p-2 ${isTyping ? "text-slate-700 bg-blue-900" : "text-white bg-blue-700"}`} onClick={generateText}>Refresh</button>
        </div>
      </main>
    </div>
  );
}