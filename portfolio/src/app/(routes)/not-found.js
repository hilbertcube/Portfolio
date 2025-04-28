"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();
  const animationInitialized = useRef(false);

  useEffect(() => {
    if (animationInitialized.current) return;
    animationInitialized.current = true;

    const textContainer1 = document.getElementById("text1");
    const textContainer2 = document.getElementById("text2");
    const yesNoOptions = document.getElementById("yesno");

    if (!textContainer1 || !textContainer2 || !yesNoOptions) {
      console.error("Required DOM elements not found");
      return;
    }

    // Clear any existing content
    textContainer1.textContent = "";
    textContainer2.textContent = "";

    const text1 = "You look lonely.";
    const text2 = "Wanna go back?";
    const delayText1 = 70;
    const delayText2 = 80;

    function typeText(element, text, delay) {
      return new Promise((resolve) => {
        let i = 0;
        element.textContent = "";

        const interval = setInterval(() => {
          if (i < text.length) {
            element.textContent = element.textContent + text.charAt(i);
            i++;
          } else {
            clearInterval(interval);
            resolve();
          }
        }, delay);
      });
    }

    async function runAnimation() {
      await typeText(textContainer1, text1, delayText1);
      await new Promise((r) => setTimeout(r, 500)); // Pause between texts
      await typeText(textContainer2, text2, delayText2);

      // Show the Yes/No options
      yesNoOptions.style.opacity = "1";
      yesNoOptions.style.visibility = "visible";
    }

    // Start the animation with a slight delay to ensure DOM is ready
    setTimeout(runAnimation, 100);

    // Disable right-click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable certain key combinations
    const handleKeyDown = (e) => {
      if (
        e.ctrlKey &&
        (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      //document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  return (
    <div
      className="relative w-full h-screen bg-black bg-cover bg-fixed bg-center font-Orbitron bg-[url(/background/blade-runner-mobile.webp)] md:bg-[url(/background/blade-runner.webp)]"
    >
      <div className="absolute top-20 right-[20vw] text-white text-[2.5rem] md:text-[2rem]">
        <div className="text-right text-white text-3xl sm:text-5xl">
          <span id="text1" className="block"></span>
          <div id="text2" className="block mt-2"></div>
        </div>
        <div
          id="yesno"
          className="mt-6 text-right transition-opacity duration-500 text-3xl"
          style={{ opacity: "0", visibility: "hidden" }}
        >
          <a
            href="/"
            className="inline-block mr-5 pr-5 border-r border-white hover:text-pink-500"
          >
            Yes
          </a>
          <a
            href="https://www.youtube.com/watch?v=4GSXyo3euR4"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            No
          </a>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-base sm:text-lg">
        404 - Page not found
      </div>
    </div>
  );
}
