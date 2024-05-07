import React from "react";
import img from "../../assets/images/hookah.png";

const Hookah = () => {
  return (
    <div className="px-32 text-center border border-white mb-10 overflow-x-hidden">
      <div className="flex items-center justify-center p-4 mt-10">
        <img src={img} alt="hookah" />
      </div>
      <div className="mt-3 flex items-center justify-center overflow-x-hidden">
        <div className="border-b-2  border-gray-500 w-16"></div>
        <h2 className="text-5xl px-3 hookah font-extrabold">HOOKAH FLAVORS</h2>
        <div className="border-b-2  border-gray-500 w-16"></div>
      </div>
      <div className="mt-10  mb-10 flex items-center justify-center gap-14">
        <h3 className="text-2xl font-bold">ORANGE MINT</h3>
        <h3 className="text-2xl font-bold">BLUE MIST</h3>
        <h3 className="text-2xl font-bold">MIGHTY FREEZE</h3>
        <h3 className="text-2xl font-bold">LUV 66</h3>
        <h3 className="text-2xl font-bold">PEACH</h3>
        <h3 className="text-2xl font-bold">WATERMELON</h3>
      </div>
    </div>
  );
};

export default Hookah;
