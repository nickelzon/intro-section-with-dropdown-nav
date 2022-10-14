import React from "react";
import { footerimg } from "../Constants";
import {
  herodesktop,
  heromobile,
  clientaudiophile,
  clientdatabiz,
  clientmaker,
  clientmeet,
} from "../images";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse grow items-center sm:flex-row sm:justify-center sm:items-end">
      <div className="flex flex-col max-w-[500px] justify-center items-center sm:items-start">
        <h3 className="hidden sm:block font-extrabold text-5xl text-center m-5">
          Make <br /> Remote Work
        </h3>
        <h3 className="block sm:hidden font-extrabold text-5xl text-center m-5">
          Make Remote Work
        </h3>
        <p className="text-slate-600 m-5">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soars.
        </p>
        <button
          type="button"
          className="bg-zinc-900 p-3 rounded-md text-white text-base hover:bg-indigo-600 m-5"
        >
          Learn More
        </button>
        <div className="flex min-w-full justify-center m-5">
          {footerimg.map((img, index) => (
            <img
              src={img.img}
              alt={img.img}
              className={`${
                index === footerimg.length - 1 ? "mr-0" : "mr-4"
              } max-h-[19px]`}
            />
          ))}
        </div>
      </div>
      <div>
        <img src={herodesktop} alt="desktop" className="max-h-[500px]" />
      </div>
    </div>
  );
};

export default Hero;
