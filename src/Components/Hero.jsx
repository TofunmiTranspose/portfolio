import React, { useContext } from "react";
import { ThemeContext } from "../App.jsx";
import profilePic from "./ProfilePic.png";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const headCol = theme ? "text-gray-200" : "text-[#000000]";
  const nameCol = theme ? "text-yellow-400" : "text-[#C7A200]";
  const pasCol = theme ? "text-gray-200" : "text-[#4A4A4A]";
  const borCol = theme ? "border-2 border-teal-300" : "border-3 text-[#3b3b3b]";
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
          className={`text-sm text-center sm:text-start sm:max-w-65 ${pasCol} font-semibold mb-10`}
        >
          A passionate Web Developer with 1 year of experience
        </p>
      </div>
      <div className="w-full sm:w-7/10 flex justify-center items-center">
        <div className={`rounded-full ${borCol}  w-8/10 sm:w-10/10`}>
          <img src={profilePic} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
