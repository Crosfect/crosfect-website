import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HowWedoIt = () => {
  const steps = ["Discuss", "Design", "Develop", "Deploy"];

  const Card = ({ icon, title, desc, className }) => {
    return (
      <div
        className={cn(
          "px-4 py-6 flex flex-col justify-between gap-1 max-w-[300px] min-h-[240px] rounded-[14px] cursor-pointer "
        )}
      >
        <div className="relative w-auto h-[260px]">
          <Image
            src={icon}
            alt={title}
            fill
            className="object-cover bg-no-repeat"
          />
        </div>

        <div className="flex flex-col pt-2 lg:pt-8 gap-1 lg:gap-6">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm font-normal text-silver tracking-wide">
            {desc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-blue-200 via-white to-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12  flex  flex-col">
        <p className="text-center text-lg font-normal pb-3">The Process</p>
        <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-6xl">
          How we do it
        </h1>
        <div className="flex lg:flex-row flex-col gap-3 ">
          <p className="text-black font-semibold tracking-wide text-3xl capitalize pt-6 lg:w-4/7 lg:mx-28">
            We follow a structured, data-driven approach to deliver high-impact
            digital solutions.
          </p>
          <Link href='/work'>
          <button className=" w-[50%] lg:w-auto relative border font-semibold border-blue-600 text-blue-600 m-0  h-[50px] px-4 lg:px-10 rounded-md cursor-pointer">
            All work
          </button></Link>
        </div>
        <div className="mt-12 grid lg:grid-cols-5 md:grid-cols-2 justify-center items-center ">
          <Card
            icon="/research.jpg"
            title="Research & Strategy"
            desc="Understanding your business goals and market needs."
          />
          <Card
            icon="/2223.jpg"
            title="AI & Blockchain integration"
            desc="Implementing advanced automation and decentralized
technology"
          />
          <Card
            icon="/development.jpg"
            title="Custom development"
            desc="Building tailor-made, scalable, and user-friendly solutions"
          />
          <Card
            icon="/testing.jpg"
            title="Testing & Optimization"
            desc="Ensuring flawless performance and high ROI"
          />
          <Card
            icon="/launch.jpg"
            title="Launch & Growth"
            desc="Deploying solutions with ongoing support and improvements.
"
          />
        </div>
        {/* <div className="relative w-72 h-72 mx-auto border-2 border-blue-500 rounded-full flex items-center justify-center">
      {steps.map((step, index) => (
        <div
          key={index}
          className="absolute w-20 h-20 bg-blue-600 text-white flex items-center justify-center rounded-full text-sm font-semibold"
          style={{
            transform: `rotate(${index * 90}deg) translate(120px) rotate(-${index * 90}deg)`,
          }}
        >
          {step}
        </div>
      ))}
    </div> */}
      </div>
    </div>
  );
};

export default HowWedoIt;
