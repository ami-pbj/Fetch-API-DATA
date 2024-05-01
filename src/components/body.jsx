import React, { useContext, useEffect } from "react";
import { AppContext } from "../provider/provider";

import Loader from "./loader";

const Body = () => {
  // posting data to frontend
  const { results, isLoading } = useContext(AppContext);

  return (
    <div className="mt-[12rem] flex flex-1 flex-col justify-center items-center">
      <p className="text-[30px] w-[20rem] text-center font-semibold border-2 rounded-2xl header__border__color">
        API DATA
      </p>

      <div className="flex mt-[6rem] text-[30px] w-[40rem] h-[20rem] justify-center font-semibold border-2 rounded-2xl api__data__border__color">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {/* showing data on the frontend */}
            {results.map((data) => {
              return (
                <div className="flex flex-1 p-10 gap-5 justify-between items-center api__text__color">
                  <div className="w-[250px] h-[250px] flex justify-center">
                    <img
                      src={data.picture.large}
                      alt="logo"
                      className="object-cover border-2 rounded-2xl image__border_color"
                    />
                  </div>

                  <div className="container__right ml-10 text-[20px] font-light">
                    <div className="flex flex-row gap-5 ">
                      <div className="flex-row gap-5">
                        <span className="font-medium ">First Name: </span>
                        <p>{data.name.first}</p>
                      </div>
                      <div className="flex-row gap-5">
                        <span className="font-medium ">Last Name: </span>

                        <p>{data.name.last}</p>
                      </div>
                    </div>

                    <p className="mt-3">
                      <span className="font-medium mr-2">Gender: </span>
                      {data.gender}
                    </p>
                    <p className="mt-3">
                      <span className="font-medium mr-2">Phone: </span>
                      {data.phone}
                    </p>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
