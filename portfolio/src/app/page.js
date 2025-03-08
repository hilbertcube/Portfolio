// "use client"; 
// import { useEffect } from "react";
import Image from "next/image";
import ProfileImage from '../components/ProfileImage';
import EventCard from '../components/ExperienceCard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "../components/NavFooter";

const exp = [
  {
    organization: 'California Polytechnic State University, Pomona' ,
    job_title: 'Computer Vision Research Intern',
    description: 'Utilized MPI for multi‑core and OpenMP for multi‑thread processing, along with NVIDIA CUDA, to accelerate feature detection, seam finding, image processing, and stitching algorithms to handle real‑time image processing on drones. Achieved a 300% increase in the speed of the image stitching process and decreased the parallel-processing cost by 61%.',
    time_frame: 'Jun. 2024 - Sep. 2024',
    languages_and_tools: ['C++', 'Python','OpenCV', 'MPI', 'OpenMP', 'CUDA', 'CMake'],
  },
  {
    organization: 'California Polytechnic State University, Pomona' ,
    job_title: 'Collision Avoidance and Detection Research Assistant',
    description: 'Collaborated with a team of electrical, computer, aerospace, and mechanical engineers to implement collision avoidance and detection software on drones. Utilized Gazebo, Ubuntu, and ORB SLAM3 to compute drone\'s stereo camera trajectory and a sparse 3D reconstruction.',
    time_frame: 'Sep. 2024 - Present',
    languages_and_tools: ['C++', 'Python', 'ORB_SLAM_3', 'Ubuntu', 'Gazebo', 'PX4', 'CMake', 'YOLOv4'],
  },
  {
    organization: 'SMACS - Webs-for-Clubs' ,
    job_title: 'Web developer',
    description: 'Collaborated with a team of fellow developers to create static and dynamic, functional, and easy‑to‑maintain websites for various clubs at local college. Utilized Node.js, Next.js, and Tailwind CSS to build fully functional and informative websites, aiming at providing information and updating announcements.',
    time_frame: 'Sep. 2024 - Present',
    languages_and_tools: ['Javascript', 'HTML', 'Nodejs' , 'Nextjs' , 'Tailwind CSS', 'AOS'],
  },
  {
    organization: 'neumanncondition.com' ,
    job_title: 'Web developer',
    description: 'This is my blog website. I coded it from scratch using HTML, CSS, and Javascript. This is a website to display my writings about engineering, physics, mathematics, and computer science.',
    time_frame: 'Jul. 2024 - Present',
    languages_and_tools: ['Javascript', 'HTML', 'CSS', 'AOS', 'MathJax'],
    link: 'https://github.com/Continuum3416/neumanncondition'
  },
  {
    organization: 'Mt. SAC' ,
    job_title: 'Math, Physics, and C.S. Tutor',
    description: 'I tutor various subjects, ranging from math and physics to computer science at Mt. San Antonio College. I work at two positions: embedded tutor, where I conducted after-class tutoring sessions and assisted professors in organizing classwork, and drop-in tutor, where I provided one-on-one tutoring sessions when the students came to me. I also created and distributed comprehensive study notes to support students in understanding math concepts.',
    time_frame: 'Feb. 2024 - Present',
    languages_and_tools: ['Differential Equations', 'Linear Algebra', 'C++', 'Java', 'Calculus', 'Classical Mechanics'],
  },
  {
    organization: 'Chladni Patterns Generator' ,
    job_title: 'Personal Project',
    description: 'I developed a Python application to generate Chladni patterns on square and circular domains. The patterns are obtained by solving for eigenvalues problems of the two-dimensional wave equation using separation of variables.',
    time_frame: 'Feb. 2024 - May. 2024',
    languages_and_tools: ['Python', 'PDE', 'C++', 'Numpy'],
    link: 'https://github.com/Continuum3416/Chladni-Patterns-Generator'
  },
];


export default function Home() {
  return (
    // If get rid of experience, get rid of this CSS
    <div className="grid grid-rows-[1fr_auto] min-h-screen">
      
      <div className="grid grid-rows-[auto_1fr] items-center justify-items-center min-h-screen p-4 gap-6 sm:p-10">
        <main id="main" className="front-page-main">
          <div className="profile-container" data-aos="zoom-in">
            <ProfileImage />
            <h1 className="profile-name">Don D. <span className="font-bold">Le</span></h1>
            <h2 className="profile-title">SOFTWARE AND WEB DEV</h2>
            <p className="profile-description" data-aos="zoom-in" data-aos-once="true">
              A computer engineering student with experience in embedded systems, scientific programming, computer vision, and web-dev.
            </p>
            <p className="profile-skills" data-aos="zoom-in" data-aos-once="true">
              <span className="font-bold">Languages:</span> C, C++, Python, CUDA, Rust, TeX, JavaScript, Assembly [x86], Java
            </p>
            <p className="profile-skills" data-aos="zoom-in" data-aos-once="true">
              <span className="font-bold">Tools:</span> CMake, Makefiles, Boost, GDB, MSVC, vcpkg, VMWare, Conda, Docker, Linux, WSL2, CUDA Toolkit, OpenCV
            </p>
            <p className="work-summary" data-aos="zoom-in" data-aos-once="true">
              My work mainly involves graphics programming, image processing, drone collision detection, and physics simulation. I also do web development (sometimes) using vanilla JS with CSS3 or Next.js with Tailwind CSS.
            </p>
          </div>

          <div className="social-links">
            <a href="mailto:ledongduu@gmail.com" className="social-media" data-aos="fade-in" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-once="true">
              <i className="fas fa-envelope"></i>
            </a>

            <a href="https://github.com/Continuum3416" target="_blank" className="social-media" data-aos="fade-in" data-aos-delay="400" data-aos-easing="ease-in-out" data-aos-once="true">
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/don-d-le/" target="_blank" className="social-media" data-aos="fade-in" data-aos-delay="600" data-aos-easing="ease-in-out" data-aos-once="true">
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://discordapp.com/users/750019342518714398" target="_blank" className="social-media" data-aos="fade-in" data-aos-delay="800" data-aos-easing="ease-in-out" data-aos-once="true">
              <i className="fa-brands fa-discord"></i>
            </a>

            <a href="https://www.instagram.com/don.d.le/" target="_blank" className="social-media" data-aos="fade-in" data-aos-delay="1000" data-aos-easing="ease-in-out" data-aos-once="true">
              <i className="fa-brands fa-instagram"></i>
            </a>  
          </div>

        </main>
        <Footer/>
      </div>

      <div id="experience" className="bg-black text-white items-center justify-items-center p-4 pt-20 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div id="projects" className="text-center font-Jura mr-auto ml-auto text-5xl mt-5 mb-14">
          Projects and Experience
        </div>
        <div className="max-w-[1400px]">
          <div className="grid grid-cols-1 ms:grid-cols-2 gap-4">
            {exp.map((job, index) => (
              <EventCard key={index} info={job} />
            ))}
          </div>
        </div>
      </div>
      
      <footer className="copyright">Copyright © 2023-{new Date().getFullYear()}  •  All rights reserved</footer>
    </div>

  );
}


