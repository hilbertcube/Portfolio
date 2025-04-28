"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";

// Components
import ExperienceCard from "@components/ExperienceCard";
import ProfileImage from "@components/ProfileImage";
import EmojiDisplay from "@components/EmojiDisplay";
import ProjectCard from "@components/ProjectCard";
import ArticleCard from "@components/ArticleCard";
import Footer from "@components/NavFooter";
import EducationCard from "@components/EducationCard";

// Icons
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaRegFilePdf } from "react-icons/fa";
import { GoDependabot } from "react-icons/go";

// Data
import { exp } from "@data/exp";
import { articles } from "@data/articles";
import { projects } from "@data/projects";
import { education } from "@data/education";

export default function Home() {
  // const [isDoubleColumn, setIsDoubleColumn] = useState(false);
  // const toggleColumns = () => {
  //   const newState = !isDoubleColumn;
  //   setIsDoubleColumn(newState);

  //   const projectCards = document.querySelectorAll(".project-card");
  //   projectCards.forEach((card) => {
  //     card.classList.remove("aos-animate");
  //     setTimeout(() => {
  //       AOS.refreshHard();
  //     }, 10);
  //   });
  // };

  const totalEmojis = 8;
  const randomNumber = Math.floor(Math.random() * totalEmojis) + 1;
  const randomFile = `${randomNumber}.gif`;

  return (
    // If get rid of experience, get rid of this CSS
    <div className="grid grid-rows-[1fr_auto] min-h-screen">
      <div className="grid grid-rows-[auto_1fr] items-center justify-items-center min-h-screen p-4 gap-6 sm:p-10">
        <main id="main" className="front-page-main">
          <div className="profile-container" data-aos="zoom-in">
            <ProfileImage src="/images/profiles/Goose.webp" />
            <h1 className="profile-name">
              Don D. <span className="font-bold">Le</span>
            </h1>
            <h2 className="profile-title">COMPUTER ENGINEER, SWE</h2>
            <p
              className="profile-description"
              data-aos="zoom-in"
              data-aos-once="true"
            >
              An engineering student <span className="font-[family-name:var(--font-geist-sans)]">@</span>UCLA with experience in low-latency C/C++, scientific computing, system programming, and computer vision.
            </p>
            <p
              className="profile-skills"
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <span className="font-bold">Languages:</span> C, C++, Python,
              CUDA, Rust,{" "}
              <span className="latex">
                L<sup>a</sup>T<sub>e</sub>X
              </span>
              , JavaScript, Assembly [Intel x86], Java
            </p>
            <p
              className="profile-skills"
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <span className="font-bold">Tools:</span> CMake, Makefiles, Boost,
              msys2, GDB, MSVC, vcpkg, VMWare, Conda, Docker, Linux, WSL2, CUDA
              Toolkit
            </p>
            <p className="work-summary" data-aos="zoom-in" data-aos-once="true">
            I place a major emphasis on optimization, performance and speed, especially in my work with graphics and image processing, embedded systems, and physics simulation. I also do web development (sometimes), mainly using vanilla JS with CSS3 or Next.js with Tailwind CSS.
            </p>
          </div>

          <div className="social-links">
            <abbr title="Email" className="no-underline">
              <a
                href="mailto:ledongduu@gmail.com"
                className="social-media"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </abbr>

            <abbr title="Github" className="no-underline">
              <a
                href="https://github.com/Continuum3416"
                target="_blank"
                className="social-media"
                data-aos="fade-in"
                data-aos-delay="400"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </abbr>

            <abbr title="Linkedin" className="no-underline">
              <a
                href="https://www.linkedin.com/in/don-d-le/"
                target="_blank"
                className="social-media"
                data-aos="fade-in"
                data-aos-delay="600"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </abbr>

            <abbr title="Telegram" className="no-underline">
              <a
                href="https://t.me/doodle_04"
                target="_blank"
                className="social-media"
                data-aos="fade-in"
                data-aos-delay="800"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
            </abbr>

            {/* <abbr title="Whatsapp" className="no-underline">
              <a href="https://api.whatsapp.com/send?phone=18402098002&text=Hello%2C%20how%20are%20you%20doing." target="_blank" className="social-media" data-aos="fade-in" data-aos-delay="800" data-aos-easing="ease-in-out" data-aos-once="true">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </abbr> */}

            <abbr title="Instagram" className="no-underline">
              <a
                href="https://www.instagram.com/don.d.le/"
                target="_blank"
                className="social-media"
                data-aos="fade-in"
                data-aos-delay="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </abbr>
          </div>
        </main>
        <Footer />
      </div>

      <div className="bg-black text-white items-center justify-items-center p-4 pt-20 pb-28 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
        <div className="max-w-[1400px]">
        <div
            id="education"
            className="text-center font-Jura mr-auto ml-auto text-5xl mt-5 mb-14"
          >
            Education
          </div>
          <div>
            <EducationCard education={education}/>
          </div>
          <div
            id="experience"
            className="text-center font-Jura mr-auto ml-auto text-5xl mt-32 mb-14"
          >
            Experience
          </div>
          <div>
            <ExperienceCard experiences={exp} />
            <div className="flex justify-center mt-8 mb-4">
              <a
                href="./docs/Resume.pdf"
                rel="noopener noreferrer"
                className="cursor-pointer text-[14px] inline-flex items-center gap-2 px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-600"
              >
                <FaRegFilePdf />
                View PDF Résumé
              </a>
            </div>
          </div>

          <div
            id="projects"
            className="text-center font-Jura mr-auto ml-auto text-5xl mt-32 mb-14"
          >
            Projects
          </div>
          <div className="grid grid-cols-1 ms:grid-cols-1 gap-2">
            {projects.map((job, index) => (
              <div key={index} className="w-full" data-aos="fade-up">
                <ProjectCard info={job} />
              </div>
            ))}
          </div>

          {/* <div id="projects" className="flex items-center justify-center gap-4 font-Jura text-5xl mt-32 mb-14 w-full">
            <h2 className="flex items-center">
              <button 
                onClick={toggleColumns} 
                className="grid-change-button"
              >
                {isDoubleColumn ? <FiSquare className = "grid-change-button-icon" size={30} /> : 
                <FiGrid className = "grid-change-button-icon" size={30} />}
              </button>
              Projects
            </h2>
          </div>

          <div className={`grid gap-4 auto-rows-auto ${isDoubleColumn ? "ms:grid-cols-2" : "ms:grid-cols-1"} grid-cols-1`}>
            {projects.map((job, index) => (
              <div key={index} className="w-full project-card" data-aos="fade-up">
                <ProjectCard info={job} />
              </div>
            ))}
          </div> */}

          <div
            id="articles"
            className="text-center font-Jura mr-auto ml-auto text-5xl mt-32 mb-14"
          >
            Featured Articles
          </div>
          <div className="grid grid-cols-1 ms:grid-cols-1 gap-4">
            {articles.map((job, index) => (
              <div key={index} className="w-full" data-aos="fade-up">
                <ArticleCard info={job} />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-6 bottom-2 flex flex-col items-end">
          <Link href="/jaskier-bot" className="speech-bubble">
            <EmojiDisplay />
          </Link>
          <Link href="/jaskier-bot" className="jaskier-button">
            <GoDependabot className="sm:text-[20px] text-[16px]" />
          </Link>
        </div>
      </div>

      <footer className="copyright">
        Copyright © 2023-{new Date().getFullYear()} • All rights reserved
      </footer>
    </div>
  );
}

// emojis/1.gif
// /emojis/${randomFile}
