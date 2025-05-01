"use client";
import { usePathname } from "next/navigation"; // Updated import
import Link from "next/link";

// Icons
import { FiFileText } from "react-icons/fi";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { FiEye } from "react-icons/fi";
import { FiCpu } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer-nav">
      <a className="nav-link" href="/#education" rel="noopener noreferrer">
        <FiFileText />
        <span className="nav-text">Résumé</span>
      </a>
      <a className="nav-link" href="/#projects" rel="noopener noreferrer">
        <FiCpu />
        <span className="nav-text">Projects</span>
      </a>
      <a href="/#publications" className="nav-link" rel="noopener noreferrer">
        <FiEye />
        <span className="nav-text">Publications</span>
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
    </footer>
  );
};

export default Footer;
