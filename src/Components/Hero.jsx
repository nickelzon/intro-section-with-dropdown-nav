import React, { useContext } from "react";
import { toggleContext } from "../App";
import { Menu } from "./Navbar";
import { menu } from "../Constants";
import { footerimg } from "../Constants";
import { herodesktop, heromobile } from "../images";

const Hero = () => {
  const toggle = useContext(toggleContext);

  const style = {
    rootContainer: "hero grid h-[100vh]",
  };

  return (
    <div
      className={`${style.rootContainer} ${
        toggle.toggleMenu ? "sidebar-active" : ""
      }`}
    >
      <div>
        <span>Hero</span>
      </div>
      <div
        className={`${!toggle.toggleMenu ? "hidden" : "flex"} bg-slate-100 p-5`}
      >
        <Menu menu={menu} flexFlow="flex-col" margin="mb-7" noMargin="mb-0" />
      </div>
    </div>
  );
};

export default Hero;
