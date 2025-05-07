'use client'

import { useState, lazy, Suspense } from 'react';
import { GoDependabot } from "react-icons/go";
import EmojiDisplay from '@components/EmojiDisplay';

// Lazy load the JaskierBot component
const JaskierBot = lazy(() => import('./JaskierBot'));

export default function JaskierBotButton({ position }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBot = () => {
    setIsOpen(!isOpen);
  };

  const closeBot = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${position} flex flex-col items-end`}>
      <button onClick={toggleBot} className="speech-bubble" aria-label = "Jaskier Button">
        <EmojiDisplay />
      </button>
      <button onClick={toggleBot} className="jaskier-button" aria-label = "Jaskier Button">
        <GoDependabot className="sm:text-[20px] text-[16px]" />
      </button>
      
      {/* Only render JaskierBot when it's open */}
      {isOpen && (
        <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="text-white font-Jura">Loading...</div>
        </div>}>
          <JaskierBot isOpen={isOpen} onClose={closeBot} />
        </Suspense>
      )}
    </div>
  );
}