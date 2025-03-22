import { cn } from "@/lib/utils";
import React from "react";

const Team = () => {
  const Card = ({ icon, title, desc, className }) => {
    return (
      <div
        className={cn(
          " group flex flex-col  gap-1 max-w-[300px] min-h-[280px] h-[420px] cursor-pointer bg-white hover:bg-black hover:text-white"
        )}
      >
        <h1 className="text-xl font-bold px-4 py-6">{title}</h1>
        <div className="relative left-0 p-4 w-2/3 bg-blue-500 text-white! text-lg">
          <span className="group-hover:hidden">What we do...</span>
          <span className="hidden group-hover:inline">Who we are...</span>
        </div>

        <div className="flex flex-col pt-8 gap-6">
          <p className="text-sm font-normal text-silver tracking-wide">
            {desc}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-blue-200 py-10">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold ">
          Meet the teams that make the magic
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <Card title="Research & Strategy" />
          <Card title="Design" />
          <Card title="Development" />
          <Card title="Research & Strategy" />
        </div>
      </div>
    </div>
  );
};

export default Team;
