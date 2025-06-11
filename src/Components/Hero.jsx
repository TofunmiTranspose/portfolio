import React, { useContext } from "react";
import { ThemeContext } from "../App.jsx";
import profilePic from "./ProfilePic.png";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const headCol = theme ? "text-gray-200" : "text-[#000000]";
  const nameCol = theme ? "text-yellow-400" : "text-[#c7a200]";
  const pasCol = theme ? "text-gray-200" : "text-[#4A4A4A]";
  const borCol = theme ? "border-2 border-teal-300" : "border-3 text-[#3b3b3b]";
  const bCol = theme ? "text-white" : "text-black";
  return (
    <div className="sm:px-5 sm:mt-10 flex sm:justify-around flex-col sm:flex-row">
      <div className="sm:pl-10 h-screen/2 sm:w-full mt-8 flex flex-col justify-center items-center sm:items-start">
        <h2
          className={`text-md font-bold sm:font-semibold ${headCol} sm:text-gray-400`}
        >
          FRONT-END WEB DEVELOPER
        </h2>
        <h1 className={`text-2xl sm:text-4xl ${nameCol} font-semibold my-2`}>
          TOFUNMI PAUL OKEOWO
        </h1>
        <p
          className={`text-sm text-center sm:text-start sm:max-w-65 ${pasCol} font-semibold mb-2`}
        >
          A passionate Web Developer bringing ideas to life,{" "}
          <b className={`${bCol}`}>pixel by pixel</b>
        </p>
        <button className="self-center sm:self-start my-2 mb-4 text-[10px] font-semibold shadow-[#999999] shadow-xs bg-yellow-400 w-30 h-8 rounded-sm">
          <a href="https://drive.usercontent.google.com/download?id=10opdh0gA6nAq60mcvP5Astv01BG2lbxU&export=download&authuser=0">
            Download My Resume
          </a>
        </button>
      </div>
      <div className="w-full sm:w-7/10 flex justify-center items-center">
        <div className={`rounded-full ${borCol}  w-8/10 max-w-90 sm:w-10/10`}>
          <img src={profilePic} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
