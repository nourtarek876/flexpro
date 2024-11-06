"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary py-4 navbar">
      <div className="container mx-auto flex flex-wrap items-center justify-between relative">
        <div className="logo text-2xl font-bold">FlexPro</div>
        <button
          className=" text-black block lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:space-x-6 lg:items-center lg\:w-auto absolute lg:relative top-full left-0 lg:top-auto lg:left-auto bg-primary w-full lg:w-auto`}
          aria-expanded={isOpen}
        >
          <div className="lg:flex lg:space-x-6 lg:items-center">
            <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 px-4 links-nav text-lg">Home</Link>
            <Link href="/all-coachs" onClick={() => setIsOpen(false)} className="block py-2 px-4 links-nav text-lg">Coaches</Link>
            <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 px-4 links-nav text-lg">Services</Link>
            <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 px-4 links-nav text-lg">Blog</Link>
            <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 px-4 links-nav text-lg">About Us</Link>
            <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 px-4 links-nav text-lg">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}


