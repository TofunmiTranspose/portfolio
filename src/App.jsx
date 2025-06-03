import React, { createContext } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import LightDark from "./Components/LightDark";
import Burger from "./Components/Burger";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div id="app" className=" pt-2 min-w-80 bg-black w-screen box-border">
      <div className="px-5 flex w-screen justify-between items-center">
        <Navbar />
        <div className="flex items-center gap-2">
          <Burger />
          <LightDark />
        </div>
      </div>
      <Hero />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  );
};

export default App;
