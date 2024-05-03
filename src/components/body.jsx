import React from "react";

import Cards from "./cards";

const Body = () => {
  return (
    <div className="mt-[12rem] flex flex-col justify-center items-center">
      <div className="w-[20rem] border-2 rounded-2xl header__border__color">
        <p className="text-[30px] text-center font-semibold ">API DATA</p>
      </div>

      <div className="mt-[6rem]">
        {/* import cards  */}
        <Cards />
      </div>
    </div>
  );
};

export default Body;
