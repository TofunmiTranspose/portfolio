import React from "react";
import profilePic from "./ProfilePic.png";

const Hero = () => {
  return (
    <div className="sm:px-5 sm:mt-10 flex sm:justify-around flex-col sm:flex-row">
      <div className="sm:pl-10 h-screen/2 sm:w-full mt-8 flex flex-col justify-center items-center sm:items-start">
        <h2 className="text-md font-bold sm:font-semibold text-teal-400 sm:text-gray-400">
          FRONT-END WEB DEVELOPER
        </h2>
        <h1 className="text-2xl sm:text-4xl text-yellow-400 font-semibold my-2">
          TOFUNMI PAUL OKEOWO
        </h1>
        <p className="text-sm text-center sm:text-start sm:max-w-65 text-gray-200 font-semibold mb-10">
          A passionate Web Developer with 1 year of experience
        </p>
      </div>
      <div className="w-full sm:w-7/10 flex justify-center items-center">
        <div className="rounded-full border-2 border-teal-300  w-8/10 sm:w-10/10">
          <img src={profilePic} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
