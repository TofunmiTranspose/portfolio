import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import LightDark from "./Components/LightDark";
import Burger from "./Components/Burger";

const App = () => {
  return (
    <div id="app" className="py-2 min-w-80 bg-black w-screen box-border">
      <div className="px-1 flex w-screen justify-around items-center">
        <Navbar />
        <div className="flex items-center gap-2">
          <Burger />
          <LightDark />
        </div>
      </div>
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
