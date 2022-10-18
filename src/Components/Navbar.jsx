import React from "react";
import { useState } from "react";
import {
  logo,
  iconarrowdown,
  iconarrowup,
  iconmenu,
  iconclose,
} from "../images";
import { menu, buttons } from "../Constants";

const Navbar = () => {
  const [togglemenu, setToggle] = useState(false);

  const [list, toggleList] = useState(false);

  return (
    <nav className="flex p-[1.5rem] flex-auto justify-between items-start bg-slate-100 select-none">
      <img src={logo} alt="logo" className="max-h-[15px]" />

      {/* desktop */}
      <div className=" ml-3 hidden ss:flex justify-between flex-auto text-sm">
        <div className="flex menu">
          {menu.map((menu, index) => (
            <div
              key={menu.name}
              className={`flex items-start cursor-pointer hover:text-indigo-600 ${
                index === menu.length - 1 ? "mr-0" : "mr-4"
              }`}
              onClick={() => toggleList((prev) => !prev)}
            >
              <div className="flex flex-col">
                <div className="flex items-center">
                  {menu.name}
                  <img
                    src={!list ? menu.icon : menu.icon2}
                    className="ml-1 max-h-2"
                  />
                </div>
                <ul
                  className={`${
                    !list ? "hidden" : "flex"
                  } flex-col flex-auto bg-slate-50 rounded-lg ${
                    index > 1 ? "p-0" : "p-5"
                  } animate__animated animate__fadeInDown`}
                >
                  {menu.content.map((content) => (
                    <li
                      key={content.description}
                      className="flex items-center leading-loose"
                    >
                      <img
                        src={content.icon}
                        alt={content.icon}
                        className={`max-h-[12px] ${
                          content.icon === undefined ? "mr-0" : "mr-2"
                        }`}
                      />
                      <a href={content.link}>{content.description}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="buttons">
          {buttons.map((btn, index) => (
            <button
              className={`${
                index === buttons.length - 1 ? "mr-0" : "mr-5"
              } border-[1px] border-black rounded-xl p-1 hover:bg-slate-300`}
            >
              {btn.title}
            </button>
          ))}
        </div>
      </div>

      {/* mobile */}
      <div className=" ml-3 flex ss:hidden text-sm">
        <img
          src={!togglemenu ? iconmenu : iconclose}
          alt="mobile-menu"
          className="max-h-[19px] z-50"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            !togglemenu ? "hidden" : "flex"
          } flex-col absolute top-0 right-0 min-w-[40%] items-start bg-slate-50 min-h-full p-6 py-[5rem] sidebar`}
        >
          {menu.map((menu, index) => (
            <div
              className={`flex items-center cursor-pointer hover:text-indigo-600 ${
                index === menu.length - 1 ? "mb-0" : "mb-4"
              }`}
              onClick={() => toggleList((prev) => !prev)}
            >
              <div className="flex flex-col">
                <div className="flex items-center">
                  {menu.name}
                  <img
                    src={!list ? menu.icon : menu.icon2}
                    className="ml-1 max-h-2"
                  />
                </div>
                <ul
                  className={`${
                    !list ? "hidden" : "flex"
                  } flex-col flex-auto bg-slate-50 rounded-lg ${
                    index > 1 ? "p-0" : "p-5"
                  } animate__animated animate__fadeInDown`}
                >
                  {menu.content.map((content) => (
                    <li
                      key={content.description}
                      className="flex items-center leading-loose"
                    >
                      <img
                        src={content.icon}
                        alt={content.icon}
                        className={`max-h-[12px] ${
                          content.icon === undefined ? "mr-0" : "mr-2"
                        }`}
                      />
                      {content.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="buttons flex flex-col items-center mt-10">
            {buttons.map((btn, index) => (
              <button
                className={`${
                  index === buttons.length - 1 ? "mb-0" : "mb-5"
                } border-[1px] border-black rounded-xl p-1 hover:bg-slate-300 min-w-[10rem]`}
              >
                {btn.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
