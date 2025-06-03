import React, {useContext} from "react";
import { ThemeContext } from "../App.jsx";
import { TfiArrowTopRight } from "react-icons/tfi";

const Projects = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div className="sm:mt-10 flex flex-col items-center gap-10">
        <h2 id="projectsSection" className="text-center text-xl text-[#ff6600] font-bold">
          PROJECTS
        </h2>
        <div className="flex flex-wrap gap-5 w-full items-baseline justify-center">
          <Project
            title="Crypto DashboardCrypto Dashboard"
            src="/dashBoard.png"
            href="https://crypto-dashboard-gilt-one.vercel.app/"
          />
          <Project
            title="Todo App with Firebase Database"
            src="/firbase.png"
            href="https://tofunmitranspose.github.io/firebase-todo/"
          />
          <Project
            title="Landing Page for Branding"
            href="https://tofunmitranspose.github.io/brand/"
            src="/brand.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

export const Project = (props) => {
  return (
    <div className="rounded-b-lg w-70 flex flex-col rounded-lg shadow-inset">
      <div className="rounded-b-lg h-30">
        <img className="" src={props.src} alt="" />
      </div>
      <a href={props.href}>
        <div className="rounded-b-lg bg-gray-900 flex justify-between px-2 py-1 item-center">
          <div>
            <p className="text-white text-[8px]">CLICK HERE TO VISIT</p>
            <h1 className="text-white text-sm font-bold">{props.title}</h1>
          </div>
          <TfiArrowTopRight className="text-gray-300" />
        </div>
      </a>
    </div>
  );
};
