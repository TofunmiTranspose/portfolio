import React, { useContext } from "react";
import { TfiClose } from "react-icons/tfi";
import { MenuContext } from "../App";

const Menu = () => {
  const [menu, toggleMenu] = useContext(MenuContext);
  const display = menu ? "fixed" : "hidden";
  return (
    <div
      className={`${display} top-0 left-0 w-screen h-screen backdrop-filter backdrop-blur-xs sm:hidden flex justify-center`}
    >
      <div className="absolute top-20 bg-gray-700  h-90 w-1/2 min-w-75 max-w-120 p-10 rounded-lg shadow shadow-[#a0a0a0]">
        <TfiClose
          onClick={() => toggleMenu()}
          className="absolute right-8 top-5 font-bold text-2xl text-white"
        />
        <ul className=" p-5 flex flex-col gap-5 font-bold text-xl text-white items-center">
          <li>
            <a href="#" onClick={() => toggleMenu()}>
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => toggleMenu()}>
              Skills
            </a>
          </li>
          <li>
            <a href="#" onClick={() => toggleMenu()}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projectsSection" onClick={() => toggleMenu()}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contactSection" onClick={() => toggleMenu()}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
