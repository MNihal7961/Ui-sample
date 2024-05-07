import React from "react";
import img1 from "../../assets/images/drink.png";
import img2 from "../../assets/images/cocktail.png";
import Hookah from "./Hookah";
import Item from "./Item";
import SubItem from "./SubItem";
import Feature from "../Feature/Feature"
import Testimonial from "../Testimonial/testimonial"
const Menu = () => {
  return (
    <section className="menucard">
      <Item />
      <SubItem />
      <Hookah />
      <div className="flex mt-10 items-center justify-center">
        <button className="text-white font-semibold bg-sky-500 py-2 px-8">ORDER ONLINE</button>
      </div>
      <Feature/>
      <Testimonial/>
    </section>
  );
};

export default Menu;
