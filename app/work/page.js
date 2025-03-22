import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Work = () => {
  const Card = ({ icon, title, desc, className, link }) => {
    return (
      <div
        className={cn(
          "px-4 py-6 flex flex-col justify-between gap-1  max-w-[100%] min-h-[400px] rounded-[14px] cursor-pointer "
        )}
      >
        <div className="relative w-auto h-[460px]">
          <Image
            src={icon}
            alt={title}
            fill
            className="object-cover bg-no-repeat"
          />
        </div>

        <div className="flex flex-col pt-2 lg:pt-8 gap-1 lg:gap-6">
          <Link href={link}  className="text-3xl font-bold cursor-pointer">{title}</Link>
          <p className="text-sm font-normal text-silver tracking-wide">
            {desc}
          </p>
        </div>
      </div>
    );
  };
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
              <h1 className="text-4xl lg:text-7xl font-bold text-blue-600">Work</h1>
              <p className=" text-xl lg:px-10">
                We partner with you to do impactful, meaningful collaborative
                work to help your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-2 bg-blue-200 px-0 lg:px-12">
        <Card
          icon="/worldsmith.jpg"
          title="Worldsmith Construction"
          desc="At Worldsmith Construction, we turn your visions into reality with exceptional craftsmanship and cutting-edge technology. Our commitment to excellence shines through in every project, focusing on quality, customer needs, luxury, innovation, and sustainability."
          link='https://worldsmithconstruct.com/'

        />
        <Card
          icon="/kiwibundle.jpg"
          title="Kiwi Bundle"
          desc="Our vision is to give everyone access to their favourite branded products, No one is left behind. We consider the needs of all our communities studying and living abroad. We keep things simple, and are here to make your life easier."
          link='https://kiwibundle.com/'
        />
        <Card
          icon="/abl.jpg"
          title="ABL"
          desc="ABL has steadfastly centered its efforts on clean energy, firmly believing that a substantial portion of the world’s growing energy demands can be met sustainably. With existing technologies capable of generating clean energy, ABL, alongside dedicated partners such as Sinergy, Solar Maxx, Naanovo, and others, possesses the expertise to effectively implement commercial-scale clean energy solutions worldwide."
          link='https://ablng.com/'

        />
      </div>
    </div>
  );
};

export default Work;
