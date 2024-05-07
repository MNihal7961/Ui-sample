import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const testimonial = () => {
  return (
    <div className="flex w-full  md:m-8 flex-col md:flex-row items-center justify-center gap-5 overflow-x-hidden">
      <a
        href="#"
        className="block w-full md:w-auto px-6 md:px-14 py-8 border rounded-lg bg-transparent border-white-700 text-center"
      >
        <h5 className="mb-2 text-xl md:text-2xl font-bold text-sky-500">
          CONNECT WITH US
        </h5>
        <div className="font-normal flex items-center justify-center md:justify-start gap-2 text-gray-400">
          <BsFillTelephoneFill className="text-[#C5A059]" /> +1 470-788-8255
        </div>
        <div className="font-normal flex items-center justify-center md:justify-start gap-2 text-gray-400">
          <MdEmail className="text-[#C5A059]" /> email@42barandgrill.com
        </div>
      </a>
      <a
        href="#"
        className="block w-full md:w-auto px-6 md:px-14 py-8 border rounded-lg bg-transparent border-white-700 text-center"
      >
        <h5 className="mb-2 text-xl md:text-2xl font-bold text-sky-500">
          <span className="text-white">DEEP</span> NET{" "}
          <span className="text-gray-400">SOFT</span>
        </h5>
        <div className="font-normal flex items-center justify-center md:justify-start gap-2 text-gray-400">
          <BsFillTelephoneFill className="text-[#C5A059]" /> +1 470-788-8255
        </div>
        <div className="font-normal flex items-center justify-center md:justify-start gap-2 text-gray-400">
          <MdEmail className="text-[#C5A059]" /> email@42barandgrill.com
        </div>
      </a>
      <a
        href="#"
        className="block w-full md:w-auto px-6 md:px-14 py-8 border rounded-lg bg-transparent border-white-700 text-center"
      >
        <h5 className="mb-2 text-xl md:text-2xl font-bold text-sky-500">
          FIND US
        </h5>
        <div className="font-normal flex items-center justify-center md:justify-start gap-2 text-gray-400">
          <FaLocationDot className="text-[#C5A059]" /> 327 Memorial Dr SE,
          Atlanta,
        </div>
        <div className="font-normal flex items-center justify-center md:justify-start gap-2 text-gray-400">
          GA 30312, USA
        </div>
      </a>
    </div>
  );
};

export default testimonial;
