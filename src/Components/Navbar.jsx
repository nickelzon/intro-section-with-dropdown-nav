import React, { useContext } from "react";
import { toggleContext } from "../App";
import {
  logo,
  iconarrowdown,
  iconarrowup,
  iconmenu,
  iconclose,
} from "../images";
import { menu, buttons } from "../Constants";

export const Menu = ({ menu, flexFlow, itemsCenter, margin, noMargin }) => {
  const style = {
    mainContainer: `flex ${flexFlow} ${itemsCenter} menu-content`,
  };

  return (
    <div className={style.mainContainer}>
      {menu.map((m, i) => (
        <span
          key={i}
          className={`${i === menu.length - 1 ? noMargin : margin} ${
            i < 2 ? "after:content-['>']" : ""
          } relative`}
        >
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
  const style = {
    nav: "grid p-[1.5rem] items-center bg-slate-100 select-none",
    contentContainer: "hidden ss:flex justify-between grow",
  };

  return (
    <nav className={style.nav}>
      <img src={logo} alt="logo" className="max-h-[20px]" />
      <div className={style.contentContainer}>
        <Menu
          menu={menu}
          margin="mr-7"
          noMargin="mr-0"
          itemsCenter="items-center"
        />
        <Buttons buttons={buttons} />
      </div>
      <img
        src={!toggle.toggleMenu ? iconmenu : iconclose}
        alt="menumobile"
        onClick={() => toggle.setToggle()}
        className="menu ss:hidden"
      />
    </nav>
  );
};

export default Navbar;
