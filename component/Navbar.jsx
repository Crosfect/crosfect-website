"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-blue-600 font-bold text-xl" onClick={() => setIsOpen(false)}>
              <Image
                src="/crosfect-logo.png"
                alt="crosfect-logo"
                width={90}
                height={20}
              />
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-blue-800 focus:outline-none"
            >
              <svg
                className="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6 text-lg font-medium ">
            <Link href="/about" className="text-blue-600 hover:text-blue-800">
              About
            </Link>
            <Link
              href="#services"
              className="text-blue-600 hover:text-blue-800"
            >
              Services
            </Link>
            
            <Link href="/work" className="text-blue-600 hover:text-blue-800">
              Work
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800">
              Contact us
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <FaXTwitter size={24} color="blue" />
            <FaLinkedin size={24} color="blue" />
            <FaInstagram size={24} color="blue" />
            <FaDiscord size={24} color="blue" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="lg:hidden absolute z-10 bg-white h-screen w-full">
          <div className="px-8 pt-2 pb-3 space-y-1 sm:px-3 gap-3 flex flex-col">
            <Link
              href="/about"
              className="block text-blue-600 hover:text-blue-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              About
            </Link>
            <Link
              href="#services"
              className="block text-blue-600 hover:text-blue-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              Services
            </Link>
            
            <Link
              href="/work"
              className="block text-blue-600 hover:text-blue-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="block text-blue-600 hover:text-blue-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact us
            </Link>

            <div className="flex-row flex items-center space-x-6">
              <FaXTwitter size={24} color="blue" />
              <FaLinkedin size={24} color="blue" />
              <FaInstagram size={24} color="blue" />
              <FaDiscord size={24} color="blue" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
