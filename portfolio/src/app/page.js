// "use client"; 
// import { useEffect } from "react";
import Image from "next/image";
import ProfileImage from './components/ProfileImage';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./components/NavFooter";
import { FaRegFilePdf } from "react-icons/fa";

const exp = [
  {
    organization: 'California Polytechnic State University, Pomona' ,
    job_title: 'Collision Avoidance and Detection Research Assistant',
    description: 'Collaborated with a team of electrical, computer, aerospace, and mechanical engineers to implement collision avoidance and detection software on drones. Utilized Gazebo, Ubuntu, and ORB SLAM3 to compute drone\'s stereo camera trajectory and a sparse 3D reconstruction. Optimized object detection by integrating ORB SLAM3 with YOLOv4 in C++, improving runtime performance by 50% over the original Python version and achieving a detection confidence rate of 90%.',
    time_frame: 'Sep. 2024 - Present',
    languages_and_tools: ['C++', 'Python', 'ORB_SLAM_3', 'Ubuntu', 'Gazebo', 'PX4', 'CMake', 'YOLOv4', 'PyTorch'],
  },
  {
    organization: 'California Polytechnic State University, Pomona' ,
    job_title: 'Computer Vision Research Intern',
    description: 'Utilized MPI for multi‑core and OpenMP for multi‑thread processing, along with NVIDIA CUDA, to accelerate feature detection, seam finding, image processing, and stitching algorithms to handle real‑time image processing on drones. Achieved a 300% increase in the speed of the image stitching process and decreased the parallel-processing cost by 61%. Paper published at AIAA Scitech Forum 2025.',
    time_frame: 'Jun. 2024 - Sep. 2024',
    languages_and_tools: ['C++', 'Python','OpenCV', 'MPI', 'OpenMP', 'CUDA', 'CMake'],
  },
  {
    organization: 'Mt. SAC' ,
    job_title: 'Math, Physics, and Computer Science Tutor',
    description: 'I tutor various subjects, ranging from math and engineering physics to computer science at Mt. San Antonio College. I work at two positions: embedded tutor, where I conducted after-class tutoring sessions and assisted professors in organizing classwork, and drop-in tutor, where I provided one-on-one tutoring sessions when the students came to me. I also created and distributed comprehensive study notes to support students in understanding math concepts.',
    time_frame: 'Feb. 2024 - Present',
    languages_and_tools: ['Differential Equations', 'Linear Algebra', 'C++', 'Java', 'Calculus', 'Classical Mechanics'],
  },
];


const projects = [
  {
    organization: 'SLAM Point Cloud Generation and YOLO Command Line Wrapper' ,
    job_title: 'Object Detection and Visual SLAM',
    description: 'Point cloud generation and plotting for ORB-SLAM3. This project is a combination of two repositories, including a command-line wrapper and a point cloud generator. It utilizes two versions of YOLO: version 4 for C++ and version 11 for Python.',
    time_frame: 'Feb. 2025 - Present',
    languages_and_tools: ['C','C++', 'Python', 'ORB SLAM3', 'YOLOv4', 'YOLOv11', 'Linux'],
    link: 'https://github.com/Continuum3416/darknet-YOLOv4-cpp'
  },
  {
    organization: 'OpenGL 3D Object Renderer' ,
    job_title: 'Low-level Graphics Programming',
    description: '3D Object Renderer for common geometric shapes—including triangle, cube, sphere, and torus (donut) using OpenGL, a cross-platform, low-level API for rendering 2D and 3D vector graphics. Built with CMake, GLFW, GLAD, GLEW, GLM, and FreeGLUT.',
    time_frame: 'Feb. 2025 - Present',
    languages_and_tools: ['C++','GLFW', 'GLAD', 'GLEW' , 'GLW' , 'FreeGLUT', 'CMake', 'MSVC', 'vcpkg'],
    link: 'https://github.com/Continuum3416/OpenGL-Object-Rendering'
  },
  {
    organization: '2D Physics Engine' ,
    job_title: 'Graphics Programming, Numerical Methods',
    description: 'A collection of repositories to implement physics from scratch in C++, utilizing SFML for real‑time rendering and visualization. Implemented multiple numerical integration methods, including Euler (explicit/implicit), Verlet, and Runge‑Kutta (RK4), to accurately simulate motion; integrated rigid‑body collision detection for realistic interactions. Added a spatial grid for better optimization.',
    time_frame: 'Jan. 2025 - Present',
    languages_and_tools: ['C++','SFML', 'CMake', 'vcpkg', 'Numerical Methods'],
    link: 'https://github.com/Continuum3416/Spatial-Grid-Partitioning'
  },
  {
    organization: 'Webs-for-Clubs' ,
    job_title: 'Web Development, College Project',
    description: 'Collaborated with a team of fellow developers to create static and dynamic, functional, and easy‑to‑maintain websites for various clubs at local college. Utilized Node.js, Next.js, and Tailwind CSS to build fully functional and informative websites, aiming at providing information and updating announcements.',
    time_frame: 'Sep. 2024 - Present',
    languages_and_tools: ['Javascript', 'HTML', 'Nodejs' , 'Nextjs' , 'Tailwind CSS', 'AOS'],
  },
  {
    organization: 'neumanncondition.com' ,
    job_title: 'Web Development, Blogging',
    description: 'This is my blog website. I coded it from scratch using HTML, CSS, and Javascript. This is a website to display my writings about engineering, physics, mathematics, and computer science.',
    time_frame: 'Jul. 2024 - Present',
    languages_and_tools: ['Javascript', 'HTML', 'CSS', 'AOS', 'MathJax'],
    link: 'https://github.com/Continuum3416/neumanncondition'
  },
  {
    organization: 'Chladni Patterns Generator' ,
    job_title: 'Scientific Programming',
    description: 'Developed a Python script to generate an unlimited number of Chladni patterns on square and circular domains. The patterns are obtained by solving for eigenvalues of the two-dimensional wave equation through separation of variables  and elimination of the Bessel functions of the 2nd kind.',
    time_frame: 'Feb. 2024 - May. 2024',
    languages_and_tools: ['Python', 'PDE', 'Numpy', 'Scipy', 'Conda', 'Itertools'],
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
              <span className="font-bold">Languages:</span> C, C++, Python, CUDA, Rust, TeX, JavaScript, Assembly [Intel x86], Java
            </p>
            <p className="profile-skills" data-aos="zoom-in" data-aos-once="true">
              <span className="font-bold">Tools:</span> CMake, Makefiles, Boost, msys2, GDB, MSVC, vcpkg, VMWare, Conda, Docker, Linux, WSL2, CUDA Toolkit, OpenCV
            </p>
            <p className="work-summary" data-aos="zoom-in" data-aos-once="true">
              My work mainly involves graphics programming, image processing, drone collision detection, and physics simulation. I also do web development (sometimes), mainly using vanilla JS with CSS3 or Next.js with Tailwind CSS. 
            </p>
          </div>

          <div className="social-links">
            <abbr title="Email" className="no-underline">
              <a href="mailto:ledongduu@gmail.com" className="social-media" data-aos="fade-in" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-once="true">
                <i className="fas fa-envelope"></i>
              </a>
            </abbr>
            
            <abbr title="Github" className="no-underline">
              <a href="https://github.com/Continuum3416" target="_blank" className="social-media" data-aos="fade-in" data-aos-delay="400" data-aos-easing="ease-in-out" data-aos-once="true">
                <i className="fa-brands fa-github"></i>
              </a>
            </abbr>


            <abbr title="Linkedin" className="no-underline">
              <a href="https://www.linkedin.com/in/don-d-le/" target="_blank" className="social-media" data-aos="fade-in" data-aos-delay="600" data-aos-easing="ease-in-out" data-aos-once="true">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </abbr>
            
            <abbr title="Telegram" className="no-underline">
              <a href="https://t.me/doodle_04" target="_blank" className="social-media" data-aos="fade-in" data-aos-delay="800" data-aos-easing="ease-in-out" data-aos-once="true">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </abbr>
            
            {/* <abbr title="Whatsapp" className="no-underline">
              <a href="https://api.whatsapp.com/send?phone=18402098002&text=Hello%2C%20how%20are%20you%20doing." target="_blank" className="social-media" data-aos="fade-in" data-aos-delay="800" data-aos-easing="ease-in-out" data-aos-once="true">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </abbr> */}

            <abbr title="Instagram" className="no-underline">
              <a href="https://www.instagram.com/don.d.le/" target="_blank" className="social-media" data-aos="fade-in" data-aos-delay="1000" data-aos-easing="ease-in-out" data-aos-once="true">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </abbr>
          </div>

        </main>
        <Footer/>
      </div>

      <div className="bg-black text-white items-center justify-items-center p-4 pt-20 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="max-w-[1400px]">
          <div id="experience" className="text-center font-Jura mr-auto ml-auto text-5xl mt-5 mb-14">
            Experience
          </div>
          <div>
            <ExperienceCard experiences={exp} />
            <div className="flex justify-center mt-8 mb-4">
              <a href='./Resume.pdf' rel="noopener noreferrer" className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-600">
                <FaRegFilePdf />
                View PDF Résumé
              </a>
            </div>
          </div>
          
          <div id="projects" className="text-center font-Jura mr-auto ml-auto text-5xl mt-32 mb-14">
            Projects
          </div>
          <div className="grid grid-cols-1 ms:grid-cols-1 gap-4">
            {projects.map((job, index) => (
              <ProjectCard key={index} info={job} />
            ))}
          </div>
        </div>
      </div>
      
      <footer className="copyright">Copyright © 2023-{new Date().getFullYear()}  •  All rights reserved</footer>
    </div>

  );
}


