"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const pathname = usePathname();

return (
<nav className="fixed top-0 z-50 px-8 py-4 items-center w-full flex justify-between lg:my-4">
    <div className="hidden lg:flex text-2xl container font-bold">
        <h1 className="cursor-pointer text-xl hover:text-cyan-500 transition delay-450 duration-300 text-black"><Link href="https://smacs.vercel.app/">A Project Presented by SMACS</Link></h1>
    </div>
    <div className="flex justify-around lg:justify-end w-full lg:space-x-12 ">
    <Link href="/" className={`${pathname === "/" ? "font-bold" : ""} text-black md:text-xl lg:text-xl`}>Home</Link>
    <Link href="/events" className={`${pathname === "/our-frameworks" ? "font-bold" : ""} text-black md:text-xl lg:text-xl`}>Our Officers</Link>
    <Link href="/about-us" className={`${ pathname === "/about-us" ? "font-bold" : ""} text-black md:text-xl lg:text-xl`}>Alliance
    </Link>
    </div>
</nav>
);
};

export default Navbar;
