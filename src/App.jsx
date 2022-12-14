import React, { useState, createContext } from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { logo } from "./images";

export const toggleContext = createContext();

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const iconToggle = {
    toggleMenu: toggleMenu,
    setToggle() {
      setToggleMenu((prev) => !prev);
    },
  };

  return (
    <div className="font-font bg-slate-50">
      <div className="root-container w-full">
        <toggleContext.Provider value={iconToggle}>
          <div>
            <Navbar />
          </div>
          <div>
            <Hero />
          </div>
        </toggleContext.Provider>
      </div>
    </div>
  );
};

export default App;
