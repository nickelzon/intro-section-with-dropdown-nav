import React, { useContext, useState } from "react";
import { toggleContext } from "../App";
import {
  logo,
  iconarrowdown,
  iconarrowup,
  iconmenu,
  iconclose,
} from "../images";
import { menu, buttons } from "../Constants";

const Menu = ({ menu }) => {
  const style = {
    mainContainer: "flex items-center",
  };

  return (
    <div className={style.mainContainer}>
      {menu.map((m, i) => (
        <span key={i} className={i === menu.length - 1 ? "mr-0" : "mr-2"}>
          {m.name}
        </span>
      ))}
    </div>
  );
};

const Buttons = ({ buttons }) => {
  const style = {
    buttons: "hover:border-[1px] border-black rounded-lg p-1",
  };

  return (
    <div>
      {buttons.map((b, i) => (
        <button
          key={i}
          className={`${i === buttons.length - 1 ? "mr-0" : "mr-5"} ${
            style.buttons
          }`}
        >
          {b.title}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const toggle = useContext(toggleContext);
  const [togglemenu, setToggle] = useState(false);
  const [list, toggleList] = useState(false);
  const style = {
    nav: "grid p-[1.5rem] items-center bg-slate-100 select-none",
    contentContainer: "hidden ss:flex justify-between grow",
  };

  return (
    <nav className={style.nav}>
      <img src={logo} alt="logo" className="max-h-[20px]" />
      <div className={style.contentContainer}>
        <Menu menu={menu} />
        <Buttons buttons={buttons} />
      </div>
      <img
        src={!togglemenu ? iconmenu : iconclose}
        alt="menumobile"
        onClick={() => setToggle((prev) => !prev)}
        className="menu ss:hidden"
      />
    </nav>
  );
};

export default Navbar;
