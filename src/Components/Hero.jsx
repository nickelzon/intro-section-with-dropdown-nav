import React from "react";
import { footerimg } from "../Constants";
import { herodesktop, heromobile } from "../images";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse grow h-[100vh] items-center sm:flex-row sm:justify-center">
      <div className="flex flex-col justify-center items-center sm:items-start">
        <h3 className="hidden sm:block font-extrabold text-5xl m-5">
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
        <div className="flex sm:min-w-full justify-center">
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
        <img
          src={herodesktop}
          alt="desktop"
          className="hidden ss:block max-h-[500px]"
        />
        <img
          src={heromobile}
          alt="desktop"
          className="block ss:hidden max-h-[500px]"
        />
      </div>
    </div>
  );
};

export default Hero;
