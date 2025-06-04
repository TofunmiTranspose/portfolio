import React, { createContext, useState, useContext } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import LightDark from "./Components/LightDark";
import Burger from "./Components/Burger";
import Contact from "./Components/Contact";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
    console.log(theme);
  };
  const mBg = theme ? 'bg-[#0f0f0f]' : 'bg-[#e100ff]';

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id="app" className={`pt-2 min-w-80 ${mBg} w-screen box-border`}>
        <div className="px-5 flex w-screen justify-between items-center">
          <Navbar />
          <div className="flex items-center gap-2 pr-2">
            <Burger />
            <LightDark />
          </div>
        </div>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
