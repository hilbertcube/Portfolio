'use client';
import { usePathname } from 'next/navigation'; // Updated import
import Link from "next/link";

// Icons
import { FiFileText } from "react-icons/fi";
import { ImHome } from "react-icons/im";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { FiCpu } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiBox } from "react-icons/fi";


const Footer = () => {
  const pathname = usePathname(); // Get the current pathname
  // const isHomePage = pathname === '/';
  // const isPublicationsPage = pathname === '/publications';

  return (
    <footer className="footer-nav">
      <Link
        href="/"
        className={`nav-link ${pathname === "/" ? "text-blue-700 font-bold" : "text-black"}`}
        rel="noopener noreferrer"
      >
        <ImHome />
        <span className="nav-text">Home</span>
      </Link>
      <Link
        href="/publications"
        className={`nav-link ${pathname === "/publications" ? "text-blue-700 font-bold" : "text-black"}`}
        rel="noopener noreferrer"
      >
        <FiEye />
        <span className="nav-text">Publications</span>
      </Link>
      {/* <a
        className="nav-link"
        href={isHomePage ? "/publications" : "/"}
        rel="noopener noreferrer"
      >
        {isHomePage ? <FiEye /> : <FiHome />}
        <span className="nav-text">{isHomePage ? 'Publications' : 'Home'}</span>
      </a> */}
      {/* https://drive.google.com/drive/folders/1yW-UBJ5ur0TDWlJ5QnCJdM8DC0jsSjTw?usp=sharing */}
      <a
        className="nav-link"
        href="/#experience"
        rel="noopener noreferrer"
      >
        <FiFileText />
        <span className="nav-text">Résumé</span>
      </a>
      <a
        className="nav-link"
        href="/#projects"
        rel="noopener noreferrer"
      >
        <FiCpu />
        <span className="nav-text">Projects</span>
      </a>
      <a
        className="nav-link"
        href="https://neumanncondition.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TfiLayoutGrid3 />
        <span className="nav-text">Blogs</span>
      </a>
      <a
        className="nav-link"
        href="/poetry-bot"
        rel="noopener noreferrer"
      >
        <FiBox/>
        <span className="nav-text">????</span>
      </a>
    </footer>
  );
};
  
export default Footer;
