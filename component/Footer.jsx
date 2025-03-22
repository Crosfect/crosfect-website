import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="max-w-[100%] mx-auto  px-4 sm:px-6 lg:px-8 flex flex-col  bg-gray-300">
      <div className="flex flex-row justify-between">
        <div className="ml-8 flex flex-col">
          <Image
            src="/crosfect-logo.png"
            alt="crosfect"
            width={230}
            height={230}
          />
          <p className="px-12"> &copy; Copyright 2025 Crosfect Inc. All rights reserved</p>
        </div>
        <div className="text-black m-20 ">
          <h1 className="text-black font-bold text-2xl">Quick Links</h1>
          <nav className="flex flex-col gap-3  pt-3">
            <Link href='#'>About Us</Link>
            <Link href='#'>Contact Us</Link>
            <Link href='#'>Our Services</Link>
            <Link href='#'>Our Products</Link>
            <Link href='#'>Blog</Link>
          </nav>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-6">
          <FaXTwitter size={24} color="blue" />
          <FaLinkedin size={24} color="blue" />
          <FaInstagram size={24} color="blue" />
          <FaDiscord size={24} color="blue" />
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
