'use client';
import { usePathname } from 'next/navigation'; // Updated import
import Link from "next/link";

// Icons
import { FiFileText } from "react-icons/fi";
import { ImHome } from "react-icons/im";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { FiCpu } from "react-icons/fi";
import { FiEye } from "react-icons/fi";


const NavFooter = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <footer className="footer-nav">
      <Link href="/" className={`nav-link ${pathname === "/" ? "text-blue-700 font-bold" : "text-black"}`}
        rel="noopener noreferrer">
        <ImHome />
        <span className="nav-text">Home</span>
      </Link>
      <Link href="/publications" className={`nav-link ${pathname === "/publications" ? "text-blue-700 font-bold" : "text-black"}`}
        rel="noopener noreferrer">
        <FiEye />
        <span className="nav-text">Publications</span>
      </Link>
      <a className="nav-link" href="/#education" rel="noopener noreferrer">
        <FiFileText />
        <span className="nav-text">Résumé</span>
      </a>
      <a className="nav-link" href="/#projects" rel="noopener noreferrer">
        <FiCpu />
        <span className="nav-text">Projects</span>
      </a>
      <a className="nav-link" href="https://neumanncondition.com/" target="_blank"
        rel="noopener noreferrer">
        <TfiLayoutGrid3 />
        <span className="nav-text">View my Blogs</span>
      </a>
    </footer>
  );
};
  
export default NavFooter;
