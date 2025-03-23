import React from "react";
import BorderlessCard from "./BorderlessCard";
import {
  FaArrowTrendUp,
  FaBoltLightning,
  FaClock,
  FaEye,
} from "react-icons/fa6";
import { cn } from "@/lib/utils";

const Services = () => {
  const Card = ({ title, desc, className, bgImg}) => {
    return (
      <div className={cn("relative w-96 h-80 rounded-lg overflow-hidden shadow-lg", className)}>
        {/* Background Image */}
        <div className={cn("absolute inset-0  bg-cover bg-center", bgImg)}>
        <div className="absolute bottom-0 flex flex-col items-start align-text-bottom text-white px-4 py-2 h-20 w-full bg-black opacity-90">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm text-gray-300">
            {desc}
          </p>
        </div>
        
        </div>

    
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-blue-200 via-white to-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12  flex  flex-col">
        <p className=" text-base text-gray-500 font-normal pb-3">
          Our Services
        </p>
        <h1 className=" font-bold text-2xl md:text-3xl lg:text-4xl text-black">
          WHAT WE DO
        </h1>
        <div className="flex flex-col lg:flex-row">
          <p className="text-slate-700 font-semibold tracking-wide text-xl pt-6 lg:w-1/3">
            We specialize in AI-powered automation, Web3 solutions and Custom
            software development tailored for businesses looking to scale. Our
            core services include:
          </p>
          <div className="mt-0 flex flex-col lg:flex-row mx-auto gap-6 md:gap-4 ">
            <div className="items-center justify-center flex">
              <Card bgImg='bg-[url("/development.jpg")]' title='AI driven solutions'  />
            </div>
            <div className="flex flex-col gap-4">
              <Card className='lg:h-60!' bgImg='bg-[url("/launch.jpg")]' title='Blockchain and web3 solutions' />
              <Card className='lg:h-60!' bgImg='bg-[url("/64450.jpg")]' title="Custom software development" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
