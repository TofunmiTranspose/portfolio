import React, { useContext } from "react";
import { ThemeContext } from "../App.jsx";
import { FaSun } from "react-icons/fa";

const LightDark = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <FaSun
      onClick={() => toggleTheme()}
      className={theme ? "text-white" : "text-gray-300"}
    />
  );
};

export default LightDark;
