import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const WhoWeAre = () => {


  return (
    <div>
      <div className="bg-gradient-to-b from-white via-blue-100 to-white overflow-hidden lg:h-[55vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="flex flex-col items-center justify-center py-10 lg:py-6">
            <div className=" w-12 h-12 right-bottom shadow-gray-700 bg-white rounded flex items-center justify-center">
              <Image
                src="/crosfect-alone.png"
                alt="crosfect-logo"
                width={90}
                height={50}
                className="z-0 overflow-hidden "
              />
            </div>
            <div className="flex flex-col gap-5 pt-6 text-center">
              <h1 className="lg:text-7xl font-bold">
                This Is <span className="text-blue-600">Crosfect</span>
              </h1>
              <p className=" text-xl lg:px-10">
                We are empowering businesses with cutting-edge AI, blockchain,
                and Web3 solutions. We build scalable, intelligent, and
                future-proof digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

     

    </div>
  );
};

export default WhoWeAre;
