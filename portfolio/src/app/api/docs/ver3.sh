'use client'

import { useState, useEffect, useRef } from "react";
import { GoDependabot } from "react-icons/go";
import { ImHome } from "react-icons/im";

const topics = ["Dying Nature", "Humans Society", "Nihilism", "God", "The Bible", "Love", "Existentialism", "Time", "The Universe", "Memory", "Death", "Hope", "Philosophy", "Technology", "Freedom", "Justice", "Chaos", "Humanity", "Art", "Music", "Emotion", "Bad Dreams", "Brutal History", "Wisdom", "Loneliness", "Suffering", "Creation", "Spirituality", "Peace", "Conflict", "War", "The great depression"];

function getRandomContent(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}



function extractNotes(input) {
  // Regular expression to match notes (A-G with optional 'b' or '#' and a digit)
  const notePattern = /[A-Ga-g][#b]?\d/g;

  // Extract and return the notes
  return input.match(notePattern) || [];
}


export default function Home() {
  const opening = 'Hello, I\'m Jaskier. I write poetry.\n';
  const [output, setOutput] = useState(opening);
  const [displayedText, setDisplayedText] = useState(opening);
  const [generatedNotes, setGeneratedNotes] = useState("");
  const typingIntervalRef = useRef(null);

  
  
  const generateText = async () => {
    if (isTyping) return; // Prevent multiple clicks while typing
    
    setIsTyping(true);
    setDisplayedText('Writing a poem...'); 

    const newTopic = getRandomContent(topics);
    //console.log(newTopic);
    const prompt = `Give me a short poem about ${newTopic} in French, with at least 15 lines. Only generate the poem and its title (enclosed in double star **), and NOTHING else. Show emotions and creativity. Remember the previous poems and try not to use the same words.`;

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
        // characters are added from left to right
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

  // Call generate on page load
  // useEffect(() => {
  //   generateText();
  // }, []);

  const today = new Date();
  const formattedDate = "\n-- " + today.toLocaleDateString() + " --";

  // delay showing date
  const [showDate, setShowDate] = useState(false);

  useEffect(() => {
    if (!isTyping) {
      const timer = setTimeout(() => {
        setShowDate(true);
      }, 100); // Delay of 0.5 seconds
      return () => clearTimeout(timer); // Clean up the timer on component unmount or re-render
    }
    setShowDate(false); // Reset if typing
  }, [isTyping]);

  // grid grid-rows-[auto_1fr] justify-items-center min-h-screen bg-black p-4 sm:p-10

  return (
    <div className="min-h-screen bg-[url(/images/bg/bg.svg)] bg-no-repeat bg-cover p-4 sm:p-10 justify-items-center">
      <main className="flex flex-col items-center justify-start">
        <div className="flex items-center mb-4">
          <GoDependabot size={30} className="text-white"/>
        </div>
        
        <div className="chat-box">
          <p className="whitespace-pre-wrap font-Jura">
            <span className="fade-in">{displayedText}</span>
            {!isTyping && showDate && <span className="fade-in">{formattedDate}</span>}
          </p>
        </div>
        
        <div className="mt-4 inline-flex flex-row gap-2">
          <a href="./" className = "font-Jura rounded hover:bg-blue-600 p-2 bg-blue-700 text-white">Home</a>
          <button className = {`font-Jura rounded hover:bg-blue-600 p-2 ${isTyping ? "text-slate-700 bg-blue-900" : "text-white bg-blue-700"}`} onClick={generateText}>Write</button>
        </div>
      </main>
    </div>
  );
}