import React from "react";
import { footerimg } from "../Constants";
import { herodesktop, heromobile } from "../images";

const Hero = () => {
  const style = {
    rootContainer: "grid h-full border-2",
  };

  return (
    <div className={style.rootContainer}>
      <div>
        <span>Box 1</span>
      </div>
      <div>
        <span>Box 2</span>
      </div>
    </div>
  );
};

export default Hero;
