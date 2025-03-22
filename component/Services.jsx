import React from "react";
import BorderlessCard from "./BorderlessCard";
import {
  FaArrowTrendUp,
  FaBoltLightning,
  FaClock,
  FaEye,
} from "react-icons/fa6";

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 via-white to-white " >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12  flex  flex-col">
        <p className="text-center text-lg font-normal pb-3">Our Services</p>
        <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-6xl">
          WHAT WE DO
        </h1>
        <p className="text-slate-700 font-semibold tracking-wide text-3xl pt-6 lg:w-4/7">
          We specialize in <b>AI-powered automation, Web3 solutions and Custom
          software development</b> tailored for businesses looking to scale. Our
          core services include:
        </p>
        <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-6 md:gap-20 ">
          <BorderlessCard
            icon={<FaBoltLightning size={20} />}
            title="AI driven solutions"
            desc="Find fully furnished apartments suited to the duration of your stay, a few months or a couple of years."
          />
          <BorderlessCard
            icon={<FaClock size={20} />}
            title="Blockchain and web3 solutions"
            desc="Find fully furnished apartments suited to the duration of your stay, a few months or a couple of years."
          />
          <BorderlessCard
            icon={<FaEye size={20} />}
            title="Custom software development"
            desc="Find fully furnished apartments suited to the duration of your stay, a few months or a couple of years."
          />
          
        </div>
      </div>
    </div>
  );
};

export default Services;
