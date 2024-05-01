import React from "react";

const Footer = () => {
  return (
    <div className="mt-[6rem] flex justify-center text-center">
      <p className="w-[50rem] h-[30rem] text-[15px] font-light px-5 py-2 pt-5 border-none rounded-2xl bg__footer">
        {new Date().getFullYear()} &copy; 🅟🅑🅙 Official.
        <br />
        All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
