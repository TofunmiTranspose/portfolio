import React from "react";
import profilePic from './Profile picture .png'

const Hero = () => {
  return (
    <>
      <div className="h-screen/2 mt-8 flex flex-col justify-center items-center">
        <h2 className="text-md font-bold text-teal-400">FRONT-END WEB DEVELOPER</h2>
        <h1 className="text-2xl text-yellow-400 font-semibold my-2">TOFUNMI PAUL OKEOWO</h1>
        <p className="text-sm text-center text-gray-200 font-semibold mb-10">A passionate Web Developer with 1 year of experience</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="rounded-full border-2 border-teal-300  w-9/10">
        <img src={profilePic}/>
        </div>
      </div>
    </>
  );
};

export default Hero;
