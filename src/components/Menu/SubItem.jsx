import React from "react";
import { drinks } from "../../assets/data/drinks";
import img1 from "../../assets/images/juice.png";
import img2 from "../../assets/images/juice1.png";

const SubItem = () => {
  const addDots = (name) => {
    const maxLength = 50;
    let s = name.split("");
    for (let i = s.length; i <= 50; i++) {
      if (s.length < maxLength) {
        s.push(".");
      }
    }
    return s.join("");
  };

  return (
    <>
     
      <div className="relative">
      <img src={img1} alt="img1" className="absolute w-36 h-52  top-[-130px] left-[-20px] z-10" />
        <div className="px-32 text-center border border-white mb-10 relative">
          <div className="mt-10 flex items-center justify-center">
            <div className="border-b-2 border-gray-500 w-16"></div>
            <h2 className="text-5xl px-3 hookah font-extrabold">
              BRUNCH COCKTAILS
            </h2>
            <div className="border-b-2 border-gray-500 w-16"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mb-10">
            {drinks.map((item, index) => (
              <div key={index}>
                <h3 className="font-semibold text-start">
                  {addDots(item.name)}
                  {item.price}
                </h3>
                <p className="text-gray-400 text-sm text-start">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={img2}
          alt="img2"
          className="absolute bottom-[-25px] right-[25px] z-10 w-36 h-36"
        />
      </div>
    </>
  );
};

export default SubItem;
