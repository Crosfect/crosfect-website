import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="w-full" id='about'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-white flex lg:flex-row flex-col">
        <div className="flex flex-col lg:w-1/2">
          <h1 className="font-semibold text-3xl text-blue-900">CROSFECT - <span className="text-blue-600">The Brand</span></h1>
          <p className="pt-6 text-lg font-serif">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            molestie lacus, blandit iaculis neque. Vivamus nisi tortor,
            venenatis nec venenatis quis, interdum id turpis.  Nullam nec
            pretium odio, imperdiet dignissim ipsum. Nullam metus tellus, tempor
            a dapibus a, aliquam eu quam. Nunc ac mi non augue dignissim
            pulvinar in ut orci. Curabitur fringilla scelerisque mattis.<br /><br />
            Phasellus aliquet tempus mauris, eget sagittis erat porttitor quis.
            Donec venenatis leo ac convallis iaculis. Ut vel arcu eget elit
            fermentum pretium id vitae erat. Nam dignissim, mauris convallis
            tristique lacinia, purus nisl dictum ante, vel eleifend elit ex at
            augue. Nunc vel purus vestibulum, venenatis dui ut, porttitor dolor.
            Sed magna ante, maximus ut semper non, accumsan non tellus.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          <Image
            src="/crosfect-alone.png"
            alt="crosfect logo"
            width={500}
            height={500}
            className="animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
