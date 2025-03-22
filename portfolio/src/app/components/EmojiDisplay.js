import { useState, useEffect } from 'react';
import Image from 'next/image';

const EmojiDisplay = () => {
  const emojiFolder = '/emojis/';
  const emojiFiles = ['02.gif', 'question.gif' ,'cat.gif', '2.gif', 'nvidia-linux.gif', 'cpp.gif', 'python.gif', 'rust.png', 'sonic.gif', 'dragon.gif', 'nonono.gif', 'popcorn.gif'];
  
  // Start with a consistent initial emoji to prevent hydration errors
  const initialEmoji = emojiFolder + emojiFiles[0]; // Always use the first emoji initially

  const [emojiSrc, setEmojiSrc] = useState(initialEmoji);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark that we're now on the client
    setIsClient(true);
    
    // Start the interval after we're on the client
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * emojiFiles.length);
      setEmojiSrc(emojiFolder + emojiFiles[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {/* Only show the random emoji on client, otherwise show the initial one */}
      <Image 
        src={isClient ? emojiSrc : initialEmoji} 
        alt="Random Emoji" 
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '30px', height: 'auto' }}
      />
    </span>
  );
};

export default EmojiDisplay;