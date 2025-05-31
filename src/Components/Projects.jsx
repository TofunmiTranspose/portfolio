import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";

export const Project = (props) => {
  return (
    <div className="border-white border-0 rounded-b-lg w-80 flex flex-col rounded-lg shadow-inset">
      <div className="rounded-b-lg h-40">
        <img className="h-full" src={props.src} alt="" />
      </div>
      <a href={props.href}>
        <div className="rounded-b-lg bg-gray-900 flex justify-between px-2 py-1 item-center">
          <div>
            <p className="text-white text-[8px]">CLICK HERE TO VISIT</p>
            <h1 className="text-white text-sm font-bold">{props.title}</h1>
          </div>
          <TfiArrowTopRight className="text-white" />
        </div>
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-center text-xl text-[#ff6600] font-bold mb-2">
          PROJECTS
        </h2>
        <Project
          title="Crypto DashboardCrypto Dashboard"
          src="src\Components\images\dashBoard.png"
          href="https://crypto-dashboard-gilt-one.vercel.app/"
        />
        <Project
          title="Todo App with Firebase Realtime Database"
          src="src\Components\images\firbase.png"
          href="https://tofunmitranspose.github.io/firebase-todo/"
        />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
