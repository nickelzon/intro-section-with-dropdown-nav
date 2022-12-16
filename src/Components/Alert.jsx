import React from "react";

const MessageContainer = ({ message }) => {
  const style = {
    mainContainer: "flex p-5 bg-white",
  };

  return (
    <div className={style.mainContainer}>
      <span>{message}</span>
    </div>
  );
};

export const Alert = ({ display, position, z, setAlert }) => {
  const style = {
    root: `${display} justify-center items-center h-[100vh] w-full bg-slate-600 ${position} z-${z} top-0 alert-background`,
  };
  return (
    <div className={style.root} onClick={() => setAlert()}>
      <MessageContainer message="Custom Alert!" />
    </div>
  );
};
