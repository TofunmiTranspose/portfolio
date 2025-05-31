import React from "react";
import { FaSun } from "react-icons/fa";

const LightDark = () => {
  return <FaSun onClick={() => {
    document.querySelector('#app').classList[2] = 'bg-white'
    
  }} className="text-white" />;
};

export default LightDark;
