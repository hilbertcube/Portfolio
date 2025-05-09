'use client'

import { useState, useEffect, useRef } from "react";
import InfoWindow from '@/app/components/utils/InfoWindow';
//import EmojiDisplay from '../components/EmojiDisplay';
import Link from "next/link";
import Image from 'next/image'

// Icons
import { ImHome } from "react-icons/im";
import { FaPenNib } from "react-icons/fa";
import { PiMusicNotesBold } from "react-icons/pi";
import { FaPlay } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import { GoDependabot } from "react-icons/go";

const topics = ["Dying Nature", "Humans Society", "Nihilism", "God", "The Bible", "Love", "Existentialism", "Time", "The Universe", "Memory", "Death", "Hope", "Philosophy", "Technology", "Freedom", "Justice", "Chaos", "Humanity", "Art", "Music", "Emotion", "Bad Dreams", "Brutal History", "Wisdom", "Loneliness", "Suffering", "Creation", "Spirituality", "Peace", "Conflict", "War", "The great depression"];

const languages = ["English", "Vietnamese", "Bahasa Indonesia", "Chinese (simplified)", "French", "German", "Italian", "Japanese", "Russian", "Ukrainian"];

const supported_language = languages.slice(0, -1).join(", ") + ", and " + languages[languages.length - 1] + ".";

function randomize(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function extractNotes(input) {
  // Regular expression to match notes (A-G with optional 'b' or '#' and a digit)
  const notePattern = /[A-Ga-g][#b]?\d/g;
  return input.match(notePattern) || [];
}

export default function Home() {
  const opening = 'Hello there,\nI\'m here to write poetry and play terrible piano.\n';
  const [output, setOutput] = useState(opening);
  const [displayedText, setDisplayedText] = useState(opening);
  const [isPlaying, setIsPlaying] = useState(false); 
  const [isTyping, setIsTyping] = useState(false);
  const typingIntervalRef = useRef(null);
  const [hasGenerated, setHasGenerated] = useState(true);

  const generateContent = async (type) => {
    if (isPlaying || isTyping) return;

    // Once the user generates content for the first time, set it to false
    if (hasGenerated) {
      setHasGenerated(false);
    }
    
    setIsTyping(true);
    setDisplayedText(type === "poetry" ? "Writing a poem..." : "Generating piano notes...");
    
    let prompt = "";
    if (type === "poetry") {
      const newTopic = randomize(topics);
      const language = (languageMode != "Random") ? languageMode: randomize(languages);
      console.log("Language:", language);
      prompt = `Give me a short poem about ${newTopic} in ${language}, with at least 15 lines. Only generate the poem and its title (enclosed in double star **), and NOTHING else.`;
    } else if (type === "music") {
      prompt = "Generate a song using 80 piano notes using standard notation (e.g., A0, C1), but don't use #. Separated the notes by spaces or line breaks. At least 12 notes per line. Do NOT include any other text. Show some emotion and harmony in your piece of work. Note: there are also some additional notes in the mp3 folder: Ab1 to Ab7, Bb0 to Bb7, Db1 to Db7, Eb1 to Eb7, and finally Gb1 to Gb7. Use these notes as well. I also noticed you start with the same note every time. Don't do that. Be unique.";
    }
    
    try {
      const response = await fetch('/api/generator', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ body: prompt })
      });
      
      const data = await response.json();
      if (response.ok) {
        setOutput(data.output);
        setDisplayedText('');
        startTypingEffect(data.output);
      } else {
        setOutput('Error generating text');
        setDisplayedText('');
        startTypingEffect('Error generating text');
      }
    } catch (error) {
      setOutput('Error generating text');
      setDisplayedText('');
      startTypingEffect('Error generating text');
    }
  };

  const playMusic = () => {
    if (isPlaying || isTyping) return; // Prevent function execution if already playing
    
    const extractedNotes = extractNotes(displayedText);
    if (extractedNotes.length === 0) return; // Don't do anything if no notes
    
    setIsPlaying(true); // Set playing state to true when starting
    
    let completedNotes = 0;
    const totalNotes = extractedNotes.length;
    
    extractedNotes.forEach((note, index) => {
      setTimeout(() => {
        const audio = new Audio(`/piano-mp3/${note}.mp3`);
        
        // Try to load and play the audio file, and catch errors
        audio.onerror = () => {
          console.error(`Error: The audio file for note ${note} could not be found in the folder.`);
          completedNotes++;
          if (completedNotes === totalNotes) {
            setIsPlaying(false); // Reset playing state when all notes are done
          }
        };
  
        audio.onended = () => {
          completedNotes++;
          if (completedNotes === totalNotes) {
            setIsPlaying(false); // Reset playing state when all notes are done
          }
        };
        
        audio.play().catch(error => {
          console.error(`Error playing the note ${note}:`, error);
          completedNotes++;
          if (completedNotes === totalNotes) {
            setIsPlaying(false); // Reset playing state when all notes are done (even if error)
          }
        });
      }, index * 200);
    });
    
    // Safety fallback: ensure isPlaying is reset after expected duration plus buffer
    const expectedDuration = totalNotes * 500 + 1000; // Total play time + buffer
    setTimeout(() => {
      setIsPlaying(false);
    }, expectedDuration);
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

  const today = new Date();
  const formattedDate = `\n-- ${today.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })} --`;
  // const formattedDate = "\n-- " + today.toLocaleDateString() + " --";

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

  const [selectedOption, setSelectedOption] = useState("Random");
  const [languageMode, setLanguageMode] = useState("Random");

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setLanguageMode(option);
    //console.log("Selected option:", option);
  };

  return (
    <div className="min-h-screen bg-[url(/images/bg/bg.svg)] bg-no-repeat bg-cover p-10 justify-items-center">
      <Link href="./" className = "side-button top-[12px] "><ImHome /></Link>
      <InfoWindow 
       title="About Jaskier" 
       content="A simple AI bot made to generate poetry and play terrible piano. A project created on a random Sunday morning."
       position = "top-[54px]"
      />
      <InfoWindow 
       title="Supported Languages" 
       content={supported_language}
       position = "top-[96px]"
       icon = {IoLanguage}
       showSelect={true}
       onSelectChange={handleSelectChange}
       options = {languages}
      />
      <main className="flex flex-col items-center justify-start">
        <div className="flex items-center mb-4">
          <GoDependabot size={30} className="text-white"/>
        </div>
        
        <div className="chat-box">
          <p className="whitespace-pre-wrap font-Jura">
            <span className="fade-in">{displayedText}</span>
            {!isTyping && showDate && !hasGenerated && <span className="fade-in">{formattedDate}</span>}
            {hasGenerated && 
              <span className="flex mt-4 items-center justify-center">
                <Image src="/emojis/dragon.gif" alt="Random Emoji"         
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '30px', height: 'auto' }}
                />
              </span>}
          </p>
        </div>
        
        <div className="mt-4 inline-flex flex-row gap-4 font-Jura text-white">
          <button 
            className = {`hover:text-indigo-500 bot-buttons ${isTyping || isPlaying ? "text-slate-700 border-indigo-900" : "border-indigo-600"}`} 
            onClick={() => generateContent("poetry")}
          >
            <FaPenNib />
          </button>
          <button 
            className={`hover:text-green-400 bot-buttons ${isTyping || isPlaying ? "text-slate-700 border-green-900" : "border-green-600"}`} 
            onClick={() => generateContent("music")}
          >
            <PiMusicNotesBold />
          </button>
          <button 
            className={`hover:text-rose-600 bot-buttons ${isTyping || isPlaying ? "text-slate-700 border-rose-900" : "border-rose-800"}`} 
            onClick={playMusic}
          >
            <FaPlay />
          </button>
        </div>
      </main>
    </div>
  );
}