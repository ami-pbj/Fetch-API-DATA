import React, { useContext } from "react";
import Loader from "./loader";
import { AppContext } from "../provider/provider";

const Cards = () => {
  // posting data to frontend
  const { results, isLoading } = useContext(AppContext);

  return (
    <div className="flex-col text-[30px] w-fit h-fit justify-center font-semibold border-2 rounded-2xl api__data__border__color">
      {isLoading ? (

        // imports loader
        <Loader />
      ) : (
        <>
          {/* showing data on the frontend */}
          {results.map((data) => {
            return (
              <div className="flex flex-1 m-5 p-3 gap-5 justify-left items-center border-none rounded-2xl api__data__card">
                <div className="w-[150px] h-[150px] flex justify-center">
                  <img
                    src={data.picture.large}
                    alt="logo"
                    className="object-cover border-2 rounded-2xl image__border_color"
                  />
                </div>

                <div className="ml-10 text-[20px] font-light api__text__color">
                  <div className="flex gap-5">
                    <div className="flex-col gap-5">
                      <span className="font-medium ">First Name: </span>
                      <p>{data.name.first}</p>
                    </div>
                    <div className="flex-col gap-5">
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
  );
};

export default Cards;
