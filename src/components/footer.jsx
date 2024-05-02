import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center mt-[6rem]">
      <div className="flex w-[50rem] h-[5rem] border-none rounded-2xl bg__footer">
        <p className="m-auto text-center text-[15px] font-light ">
          &copy; {new Date().getFullYear()}&nbsp; 🅟🅑🅙 Official.
          <br />
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
