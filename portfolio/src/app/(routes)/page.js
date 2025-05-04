"use client";

import { useEffect, useRef, useState } from 'react';
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
import SocialIcon from "@components/SocialIcon";
import PublicationCard from "@components/PublicationCard";

// Hooks
import useActiveSection from '../hook/useActiveSection';

// Icons
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaRegFilePdf } from "react-icons/fa";
import { GoDependabot } from "react-icons/go";

// Data
import { exp } from "@/app/data/experiences";
import { articles } from "@data/articles";
import { projects } from "@data/projects";
import { education } from "@data/education";
import { publications } from "@data/publications";


export default function Home() {
  const totalEmojis = 8;
  const randomNumber = Math.floor(Math.random() * totalEmojis) + 1;
  const randomFile = `${randomNumber}.gif`;

  useEffect(() => {
    const setViewportHeight = () => {
      requestAnimationFrame(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
    };
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    return () => window.removeEventListener('resize', setViewportHeight);
  }, []);

  const sectionRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  
  // useEffect(() => {
  //   const section = sectionRef.current;
    
  //   const handleScroll = () => {
  //     if (!section) return;
      
  //     const rect = section.getBoundingClientRect();
  //     const isInView = rect.top <= 0 && rect.bottom >= 0;
      
  //     // Set sticky when the section is in view
  //     setIsSticky(isInView);
  //   };
    
  //   window.addEventListener('scroll', handleScroll);
  //   // Initial check
  //   handleScroll();
    
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const sections = ["top","education", "experience", "projects", "publications" , "articles"];
  // const activeSection = useActiveSection(sections);

  return (
    <div>
      <div id="top" className="grid grid-rows-[auto_1fr] items-center justify-items-center sm:min-h-screen smooth-height p-4 gap-6 sm:p-10">
        <main id="main" className="flex flex-col gap-3 sm:row-start-2 items-start mx-auto">
          <div className="profile-container" data-aos="zoom-in">
            <ProfileImage src="/images/profiles/Goose.webp" />
            <h1 className="profile-name">
              Don D. <span className="font-bold">Le</span>
            </h1>
            <h2 className="profile-title">COMPUTER ENGINEER & SOFTWARE DEV</h2>
            <p className="profile-description" data-aos="zoom-in" data-aos-once="true">
              An engineering student <span className="font-[family-name:var(--font-geist-sans)]">@UCLA</span> with experience in low-latency C/C++, scientific computing, system programming, and computer vision.
            </p>
            <p className="profile-skills" data-aos="zoom-in" data-aos-once="true">
              <span className="font-bold">Languages:</span> C, C++, Python, CUDA, Rust,{" "}
              <span className="latex">L<sup>a</sup>T<sub>e</sub>X</span>, JavaScript, Assembly [Intel x86], Java
            </p>
            <p className="profile-skills" data-aos="zoom-in" data-aos-once="true">
              <span className="font-bold">Tools:</span> CMake, Make, Boost,
              msys2, GDB, MSVC, vcpkg, SIMD, Conda, Docker, Linux, WSL2, CUDA
              Toolkit
            </p>
            {/* <p className="profile-skills" data-aos="zoom-in" data-aos-once="true">
              <span className="font-bold">Libraries & Frameworks:</span> Numpy, Scipy, PyTorch, Eigen, OpenCV (C++), GLSL, SFML, ORB SLAM, Next.js
            </p> */}
            <p className="work-summary" data-aos="zoom-in" data-aos-once="true">
            I place a major emphasis on efficiency, performance, and speed; especially in my work with graphics and image processing, embedded systems, and physics simulation. I also do web dev (sometimes), where I value simplicity and minimalism.
            </p>
          </div>

          <div className="social-links">
            <SocialIcon
              title="Email"
              href="mailto:ledongduu@gmail.com"
              delay="200"
              iconClass="fas fa-envelope"
            />
            <SocialIcon
              title="Github"
              href="https://github.com/Continuum3416"
              delay="400"
              iconClass="fa-brands fa-github"
            />
            <SocialIcon
              title="Linkedin"
              href="https://www.linkedin.com/in/don-d-le/"
              delay="600"
              iconClass="fa-brands fa-linkedin"
            />
            <SocialIcon
              title="Telegram"
              href="https://t.me/doodle_04"
              delay="800"
              iconClass="fa-brands fa-telegram"
            />
            <SocialIcon
              title="Instagram"
              href="https://www.instagram.com/don.d.le/"
              delay="1000"
              iconClass="fa-brands fa-instagram"
            />
            {/* <SocialIcon
              title="Whatsapp"
              href="https://api.whatsapp.com/send?phone=18402098002&text=Hello%2C%20how%20are%20you%20doing."
              delay="800"
              iconClass="fa-brands fa-whatsapp"
            /> */}
          </div>
        </main>
        <Footer />
      </div>
      <div
        //ref={sectionRef}
        className="bg-black text-white items-center justify-items-center p-4 pt-20 pb-28 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
        {/* <nav
          className={`${
            isSticky ? "fixed top-60" : "absolute top-60"
          } text-white sm:flex flex-col font-Jura gap-2 z-[100] left-4 md:left-20 hidden transition-all duration-400`}
        >
          {sections.map((section) => (
            <a
              key={section}
              href={`/#${section}`}
              className={activeSection === section ? "text-blue-300" : "text-white"}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav> */}
        
        <div className="max-w-[1400px]">
          <section id="education">
            <div className="main-section-header">
              Education
            </div>
            <div>
              <EducationCard education={education}/>
            </div>
          </section>

          <section id="experience">
            <div className="mt-16 sm:mt-32 main-section-header">
              Experience
            </div>
            <div>
              <ExperienceCard experiences={exp} />
              <div className="flex justify-center my-2 sm:my-4">
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
          </section>

          <section id="projects" >
            <div className="mt-16 sm:mt-32 main-section-header">
              Projects
            </div>
            <div className="grid grid-cols-1 ms:grid-cols-1 gap-2 my-2 sm:my-4">
              {projects.map((job, index) => (
                <div key={index} className="w-full" data-aos="fade-up">
                  <ProjectCard info={job} />
                </div>
              ))}
            </div>
          </section>

          <section id="publications">
            <div className="mt-16 sm:mt-32 main-section-header">
              Publication
            </div>
            <div className="relative w-full max-w-3xl mx-auto my-2 sm:my-4">
              <ul className="list-none space-y-5 font-Jura">
                {publications.map((publication, index) => (
                  <PublicationCard 
                  key={publication.id || index}
                  publication={publication} 
                  index={index}
                />
                ))}
              </ul>
            </div>
          </section>

          <section id="articles">
            <div className="mt-16 sm:mt-32 main-section-header">
              Articles
            </div>
            <div className="grid grid-cols-1 ms:grid-cols-1 gap-4 my-2 sm:my-4">
              {articles.map((job, index) => (
                <div key={index} className="w-full" data-aos="fade-up">
                  <ArticleCard info={job} />
                </div>
              ))}
            </div>
          </section>
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
        Copyright © 2023-{new Date().getFullYear()} • All rights reserved <br/> Built without care
      </footer>
    </div>
  );
}

// emojis/1.gif
// /emojis/${randomFile}
