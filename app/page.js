"use client";

import HowWedoIt from "@/component/HowWedoIt";
import Projects from "@/component/Projects";
import Services from "@/component/Services";
import Team from "@/component/Team";
import Testimonials from "@/component/Testimonials";
import WhoWeAre from "@/component/WhoWeAre";
import Image from "next/image";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hugotchee1@gmail.com");

    setCopied(true);
    toast.success("Email copied successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <>
      <div className="bg-gradient-to-b from-white via-blue-100 to-white overflow-hidden lg:h-[100vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
          <div className="flex flex-col items-center justify-center py-10 lg:py-16">
            <div className=" w-12 h-12 right-bottom shadow-gray-700 bg-white rounded flex items-center justify-center">
              <Image
                src="/crosfect-alone.png"
                alt="crosfect-logo"
                width={90}
                height={50}
                className="z-0 overflow-hidden "
              />
            </div>
            <div className="pt-10">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-5xl text-slate-900 text-center">
                Next-Gen AI & Blockchain Solutions
              </h1>
              <h3 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold pt-2 text-gray-500">
                for <span className="text-blue-600"> Smarter Businesses</span>
              </h3>
              <p className="text-center text-lg font-base text-slate-900 py-4 lg:px-[10%] ">
                Empowering businesses with cutting-edge AI, blockchain, and Web3
                solutions. We build scalable, intelligent, and future-proof
                digital experiences.
              </p>
              <div className="flex flex-row gap-12 items-center justify-center pt-4">
                <button className="w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 text-center">
                  Explore our solutions
                </button>
                <ToastContainer />
              </div>
            </div>
            <div className="perspective-1000">
              <div className=" flex items-center justify-center rounded-[10px] h-[36%] w-[24%] glassmorphism absolute top-[10px] overflow-hidden right-[-150px] transform -rotate-16 transition-transform duration-300">
                tu
              </div>
              <div className="  items-left justify-left  rounded-[0px] h-[50%] w-[20%] bg-yellow-400 absolute top-[380px] hidden lg:flex lg:left-[-20px] transform rotate-8 transition-transform duration-300">
                <div className="bg-red-600 w-[20px] h-[20px] rounded-full absolute -top-2 -left-2" />
                <ol className="text-black list-decimal p-10 text-lg font-serif italic">
                  <li>Discuss</li>
                  <li>Design</li>
                  <li>Develop</li>
                  <li>Deploy</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who we are */}
      <WhoWeAre id="about" />

      {/* Services */}
      <div className="py-16" id="services">
        <Services />
      </div>

      {/* How we do it */}
      <HowWedoIt />

      {/* Meet the team */}
      <Team />
      {/* Project */}
      <Projects />

      {/* Testimonial */}
      <Testimonials />

      {/* Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="lg:w-2/3">
          <h1 className="text-3xl md:text-4xl lg:text-8xl font-semibold ">
            Ready to transform your business?
          </h1>
          <p className="text-2xl lg:text-4xl pt-3 ">
            Let's build the future together.
          </p>
          <div className="flex flex-row gap-10 pt-10">
            <button className=" w-auto text-sm md:text-base lg:w-auto relative border font-semibold bg-blue-600 text-white border-blue-600  m-0  h-[50px] px-4 lg:px-10 rounded-md cursor-pointer">
              Contact us
            </button>
            <button
              className=" w-auto text-sm md:text-base  lg:w-auto relative border font-semibold border-blue-600 text-blue-600 m-0  h-[50px] px-4 lg:px-10 rounded-md cursor-pointer"
              onClick={handleCopy}
            >
              {copied ? "Email copied" : "Copy Email address"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
