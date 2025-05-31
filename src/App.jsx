import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import LightDark from "./Components/LightDark";

const App = () => {
  return (
    <div id="app" className="py-2 min-w-80 bg-black w-screen box-border">
<<<<<<< HEAD
      <div className="flex w-screen justify-around items-center">
        <Navbar />
        <LightDark />
      </div>
=======
      <Navbar />
>>>>>>> f7cfc140147752df6cab344e663cccdd72950014
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
