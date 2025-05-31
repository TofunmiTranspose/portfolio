import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";

const Projects = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center text-xl text-[#ff6600] font-bold mb-2">
        PROJECTS
      </h2>
      <div className="w-80 border border-white flex flex-col rounded-lg shadow-inset">
        <div className="h-40"></div>
        <div className="rounded-b-lg bg-gray-900 flex justify-between px-2 py-1 item-center">
          <div>
            <p className="text-white text-[8px]">
              <a href="#">CLICK HERE TO VISIT</a>
            </p>
            <h1 className="text-white text-sm font-bold">HTML TUTORIAL</h1>
          </div>
          <TfiArrowTopRight className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
