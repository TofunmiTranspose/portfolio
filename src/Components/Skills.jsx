import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";

const Skills = () => {
  return (
    <div className="border-t-2 border-white mb-10 pt-5 bg-black h-30 mt-5 flex flex-col items-center gap-5">
      <h2 className="text-3xl text-white font-bold">Skills</h2>
      <div className="flex justify-around w-9/10">
        <FaHtml5 className="text-4xl" style={{ color: "rgb(255, 160, 17)" }} />
        <IoLogoCss3
          className="text-4xl"
          style={{ color: "rgb(37, 139, 255)" }}
        />
        <IoLogoJavascript
          className="text-4xl"
          style={{ color: "rgb(255, 2505, 0)" }}
        />
        <FaReact className="text-4xl" style={{ color: "rgb(255, 0, 255)" }} />
        <FaGithub
          className="text-4xl"
          style={{ color: "rgb(255, 255, 255)" }}
        />
        <FaGitAlt className="text-4xl" style={{ color: "#ff6600" }} />
        <BiLogoTailwindCss
          className="text-4xl"
          style={{ color: "rgb(0, 255, 255)" }}
        />
      </div>
    </div>
  );
};

export default Skills;
