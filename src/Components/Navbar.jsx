import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const accCol = theme
    ? { a: "bg-gray-800", b: "text-white" }
    : { a: "bg-[#3b3b3b]", b: "text-[#ffffff]" };
  return (
    <div
      className={`${accCol.a} w-full sm:mr-10 h-15 px-1 py-3 items-center justify-between rounded-full flex`}
    >
      <div className="ml-3">
        <h2 className={`sm:text-sm text-xl font-bold ${accCol.b}`}>
          <span className="sm:hidden">TRANSPOSE</span>{" "}
          <span className="hidden sm:inline">Tofunmi</span>{" "}
          <span className="hidden sm:inline">Okeowo</span>
        </h2>
      </div>
      <div className=" min-w-50 hidden w-5/10 text-gray-300 text-[10px] sm:flex justify-between">
        <a href="#">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#">Experience</a>
        <a href="#projectsSection">Projects</a>
        <a href="#contactSection">Contact</a>
      </div>
      <div className="mr-3">
        <button
          className={`bg-teal-500 px-3 w-20 py-1 rounded-full  ${accCol.b} font-semibold text-sm hover:scale-105 transition duration-300 ease `}
        >
          <a href="https://wa.link/yjileb">Hire Me</a>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
