import React from "react";
import HeroImg from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="hero w-full h-[50vh]">
      <div className="md:p-28 p-10">
      <h2 className="text-5xl text-center px-3 hookah font-extrabold">MENU</h2>
      <p className="text-gray-400 text-sm mt-6 md:text-[16px] md:font-normal text-center">
        Please take a look at our menu featuring food, drinks, and brunch. If
        you'd like to <br /> place an order, use the "Order Online" button located
        below the menu.
      </p>
      </div>
    </div>
  );
};

export default Hero;
