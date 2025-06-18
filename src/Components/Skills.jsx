import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";

const Skills = () => {
  return (
    <div
      id="skills"
      className="mb-10 pt-4 bg-[#111111] h-35 flex flex-col items-center gap-5"
    >
      <h2 className="text-3xl text-white font-bold">Skills</h2>
      <div className="flex justify-around w-9/10">
        <FaHtml5 className="text-4xl text-[#ffa011]" />
        <IoLogoCss3 className="text-4xl text-[#258bff]" />
        <IoLogoJavascript className="text-4xl text-[#ffff00]" />
        <FaReact className="text-4xl text-[#ff00ff]" />
        <FaGithub className="text-4xl text-white" />
        <FaGitAlt className="text-4xl text-[#ff6600]" />
        <BiLogoTailwindCss className="text-4xl text-[#00ffff]" />
      </div>
    </div>
  );
};

export default Skills;
