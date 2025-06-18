import React, { useContext } from "react";
import '/src/assets/school.png';
import '/src/assets/sail.png';
import '/src/assets/dashBoard.png';
import '/src/assets/firbase.png';
import '/src/assets/brand.png';
import { ThemeContext } from "../App.jsx";

const Projects = () => {
  return (
    <div>
      <div className="sm:mt-10 flex flex-col items-center gap-10">
        <h2
          id="projectsSection"
          className="text-center text-xl text-[#ff6600] font-bold"
        >
          PROJECTS
        </h2>
        <div className="flex flex-wrap gap-5 w-full items-baseline justify-center">
          <Project
            title="Fullstack School Web App"
            src="./src/assets/school.png"
            href="https://holy-child.vercel.app/"
            description="React.js, Tailwind CSS, Firebase"
          />
          <Project
            title="SailTrue shipping tracker"
            src="./src/assets/sail.png"
            href="https://sail-true.vercel.app/"
            description="React, Tailwind CSS"
          />
          <Project
            title="Crypto DashboardCrypto Dashboard"
            src="./src/assets/dashBoard.png"
            href="https://crypto-dashboard-gilt-one.vercel.app/"
            description="React, Node.js, MongoDB"
          />
          <Project
            title="Todo App with Firebase Database"
            src="./src/assets/firbase.png"
            href="https://tofunmitranspose.github.io/firebase-todo/"
            description="React, Node.js, MongoDB"
          />
          <Project
            title="Landing Page for Branding"
            href="https://tofunmitranspose.github.io/brand/"
            src="./src/assets/brand.png"
            description="React, Node.js, MongoDB"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

export const Project = ({ title, src, href, description }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`p-3 shadow-xl rounded-lg ${
        theme
          ? "bg-[#151515] text-[#ffffdc] shadow"
          : "bg-[#eeeedd] text-[#333333] shadow-black/50 shadow-xs"
      }
             hover:translate-y-[-5px] hover:shadow-lg
             transition-all duration-300 ease-in-out cursor-pointer`}
    >
      <img
        src={src}
        alt={title}
        className="rounded-md mb-3 object-cover w-full h-32"
      />
      <h3 className="text-lg mb-2 font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="flex space-x-2 mt-3">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-green-600 font-medium hover:underline"
        >
          Live demo
        </a>
      </div>
    </div>
  );
};
