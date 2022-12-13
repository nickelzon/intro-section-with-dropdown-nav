import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { logo } from "./images";

const App = () => {
  return (
    <div className="font-font bg-slate-50">
      <div className="root-container w-full">
        <div>
          <Navbar />
        </div>
        <div className="Hero contentss flex">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default App;
