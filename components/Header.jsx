"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav"
import ThemeToggler from "./ThemeToggler";
import { usePathname } from "next/navigation";

const Header = () => {
const [header, setHeader] = useState(false);
const pathname = usePathname();

useEffect(() => {
  const scrollYPos = window.addEventListener('scroll', () => {
    window.scrollY > 50 ? setHeader(true) : setHeader(false);
  });

  return () => window.removeEventListener('scroll', scrollYPos);
});
  return (
    <header
    className={`${
      header
      ? 'py-4 bg-white shadow-lg dark:bg-accent'
      : 'py-6 dark:bg-transparent'
    } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#f9f5fe]'}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
             containerStyles="hidden xl:flex gap-x-8 items-center" 
             linkStyles='relative hover:text-primary transition-all'
             underlineStyle='absolute left-0 top-full h-[2px] bg-primary w-full'
             />
            <ThemeToggler />
           <div className="xl:hidden">
           <MobileNav/>  
           </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;