import React, { createContext, useState, useContext } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import LightDark from "./Components/LightDark";
import Burger from "./Components/Burger";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";

export const ThemeContext = createContext();
export const MenuContext = createContext();
const App = () => {

    const [theme, setTheme] = useState(true);
    const toggleTheme = () => {
      setTheme(!theme);
    };
    const mBg = theme ? "bg-[#0f0f0f]" : "bg-[#ffffee]";

    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
      setMenu(!menu);
    }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id="app" className={`pt-2 min-w-80 ${mBg} w-screen box-border`}>
        <MenuContext.Provider value={[menu, toggleMenu]}>
        <div className="px-5 flex w-screen justify-between items-center">
          <Navbar />
          <div className="flex items-center gap-2 pr-2">
            <Burger />
            <LightDark />
          </div>
        </div>
        <Menu/>
        </MenuContext.Provider>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
