'use client';
import { usePathname } from 'next/navigation'; // Updated import
import Image from 'next/image';

// Icons
import { FiFileText } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { FiCpu } from "react-icons/fi";
import { FiEye } from "react-icons/fi";


const Footer = () => {
    const pathname = usePathname(); // Get the current pathname
    const isHomePage = pathname === '/'; // Check if it's the homepage
    const isPublicationsPage = pathname === '/publications'; // Check if it's the publications page
  
    return (
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center border-t-2 border-blue-700 pt-2">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={isHomePage ? "/publications" : "/"}
          rel="noopener noreferrer"
        >
          {isHomePage ? <FiEye /> : <FiHome />}
          {isHomePage ? 'Publications' : 'Home'}
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://drive.google.com/drive/folders/1yW-UBJ5ur0TDWlJ5QnCJdM8DC0jsSjTw?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFileText />
          View my Résumé
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 overscroll-none"
          href="/#projects"
          rel="noopener noreferrer"
        >
          <FiCpu />
          View my Projects
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://neumanncondition.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TfiLayoutGrid3 />
          View my Blogs
        </a>
      </footer>
    );
  };
  
  export default Footer;
