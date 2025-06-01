import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 w-7/10 h-15 px-1 py-3 items-center justify-between rounded-full flex">
      <div className="ml-3">
        <h2 className="sm:text-sm text-xl font-bold text-white">
          <span className="sm:hidden">TRANSPOSE</span>{" "}
          <span className="hidden sm:inline">Tofunmi</span>{" "}
          <span className="hidden sm:inline">Okeowo</span>
        </h2>
      </div>
      <div className=" min-w-50 hidden w-5/10 text-gray-300 text-[10px] sm:flex justify-between">
        <a href="#" className="active:text-teal-400">
          About Me
        </a>
        <a href="#">Skills</a>
        <a href="#">Experience</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
      <div className="mr-3">
        <button className="bg-teal-500 px-3 w-20 py-1 rounded-full text-white font-semibold text-sm">
          <a href="https://wa.link/yjileb">Hire Me</a>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
