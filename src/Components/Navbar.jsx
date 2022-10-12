import React from "react";
import { logo, iconarrowdown, iconarrowup } from "../images";
import { menu, buttons } from "../Constants";

const Navbar = () => {
  return (
    <div className="flex p-[1.5rem] flex-auto justify-between items-end">
      <img src={logo} alt="logo" className="max-h-[15px]" />

      {/* desktop */}
      <div className=" ml-3 hidden ss:flex justify-between flex-auto text-sm">
        <div className="flex menu">
          {menu.map((menu, index) => (
            <div
              className={`flex items-center ${
                index === menu.length - 1 ? "mr-0" : "mr-4"
              }`}
            >
              {menu.name}
              <img src={menu.icon} className="ml-1" />
            </div>
          ))}
        </div>

        <div className="buttons">
          {buttons.map((btn, index) => (
            <button
              className={`${index === buttons.length - 1 ? "mr-0" : "mr-5"}`}
            >
              {btn.title}
            </button>
          ))}
        </div>
      </div>

      {/* mobile */}
    </div>
  );
};

export default Navbar;
