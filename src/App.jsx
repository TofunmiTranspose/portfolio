import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <div className="py-2 min-w-80 bg-black w-screen box-border">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
