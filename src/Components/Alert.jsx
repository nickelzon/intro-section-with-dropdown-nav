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
    root: `${display} justify-center items-center w-full bg-slate-600 ${position} z-${z} top-0 bottom-0 alert-background px-5`,
  };
  return (
    <div className={style.root} onClick={() => setAlert()}>
      <MessageContainer message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae a labore vel perspiciatis debitis? Expedita, asperiores facilis exercitationem in alias nam fugit ex harum. Soluta dolorem dignissimos possimus aliquam ut placeat veniam eligendi, saepe beatae quidem, enim magnam mollitia numquam sed optio deserunt, voluptas rerum inventore non quo! Id expedita excepturi doloremque aspernatur sunt quo, harum placeat libero earum voluptates repellendus sit quas? Ratione dolores ab dolorum ipsa pariatur, sapiente et, maxime vero nihil, nostrum est aperiam sunt dignissimos." />
    </div>
  );
};
