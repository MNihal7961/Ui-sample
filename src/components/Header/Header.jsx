import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import Logo from "../../assets/images/Logo.png";

const navItems = [
  {
    path: "/",
    label: "HOME",
  },
  {
    path: "/menu",
    label: "MENU",
  },
  {
    path: "/reservation",
    label: "MAKE A RESERVATION",
  },
  {
    path: "/contact",
    label: "CONTACT US",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      className="header flex items-center bg-[#121618] text-white relative"
      ref={headerRef}
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center justify-center">
            <div >
              <div className="absolute top-1/3 ">
                <img src={Logo} alt="logo" />
              </div>
            </div>
            <div className="p-3 hidden md:block ml-24">
              <span className="text-sky-500 text-3xl">DEEP</span>{" "}
              <span className="text-white text-3xl">NET</span>
            </div>
          </div>

          {/* MENU */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-sky-500 text-[16px] leading-7 font-[600]"
                        : "text-white text-[16px] leading-7 font-[600] hover:text-sky-500"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-end p-3 md:p-0">
          <span className="md:hidden" onClick={toggleMenu}>
            <BiMenu className="cursor-pointer text-gray-500" size={40} />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
