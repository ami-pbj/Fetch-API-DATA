import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center py-3 m-[4rem]">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-700" />
      <p className="text-[22px] font-medium mt-5">Fetching Data ...</p>
    </div>
  );
};

export default Loader;
