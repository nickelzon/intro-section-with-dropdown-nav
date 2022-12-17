import React, { useContext, useState } from "react";
import { toggleContext } from "../App";
import { Menu } from "./Navbar";
import { menu } from "../Constants";
import { Alert } from "./Alert";
import { footerimg } from "../Constants";
import { herodesktop, heromobile } from "../images";

const TitleAndDesc = () => {
  const style = {
    title: "text-4xl font-black",
  };
  return (
    <div className="title-and-desc grid gap-10">
      <h1 className={style.title}>Make Remote Work</h1>
      <div>
        <span>
          Get your team in sync, no matter your location. Streamline processes,
          create team virtuals, and watch productivity soar.
        </span>
      </div>
    </div>
  );
};

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
        <TitleAndDesc />
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
