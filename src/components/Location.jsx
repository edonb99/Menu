import React from "react";
import { Link } from "react-router-dom";
import GlobalContainer from "./GlobalContainer";

const Location = () => {
  const locationData = [
    {
      kazerma: "Kazerma: Minatori",
      qyteti: "Mitrovicë",
      menza: "Menza: 2",
    },
    {
      kazerma: "Kazerma: Adem Jashari",
      qyteti: "Prishtinë",
      menza: "Menza: 1",
    },
    {
      kazerma: "Kazerma: Newborn",
      qyteti: "Gjilan",
      menza: "Menza: 3",
    },
    {
      kazerma: "Kazerma: Skënderbeu",
      qyteti: "Ferizaj",
      menza: "Menza: 1",
    },
  ];
  return (
    <GlobalContainer>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row justify-between w-full">
          <Link to="/scan">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>

          <div className="flex justify-center flex-1">
            <h1 className="font-sans text-4xl font-medium text-center text-gray-900 ">
              Zgjedhni lokacionin për nesër:
            </h1>
          </div>
        </div>
        <div className="flex justify-start w-full mt-12 ">
          <h1 className="font-sans text-4xl font-medium text-right text-gray-400">
            Filan Fisteku
          </h1>
        </div>

        {locationData.map((data) => {
          return (
            <div className="w-full mt-10 text-center bg-gray-100 shadow-md cursor-pointer h-fit rounded-2xl hover:bg-gray-500 focus:bg-gray-700 focus:text-gray-100 hover:text-gray-100">
              <div className="flex flex-col justify-center flex-1">
                <h1 className="pt-4 text-4xl font-medium">{data.kazerma}</h1>
                <h3 className="pt-3 text-3xl font-normal">{data.qyteti}</h3>
                <p className="pt-2 pb-4 text-3xl font-normal">{data.menza}</p>
              </div>
            </div>
          );
        })}
        <div className="w-full">
          <Link to="/selections">
            <input
              type="submit"
              value="Vazhdo"
              className="w-full h-24 mt-20 text-5xl font-bold text-center bg-gray-200 shadow-md cursor-pointer rounded-2xl hover:bg-green-600 hover:text-green-100"
            ></input>
          </Link>
        </div>
      </div>
    </GlobalContainer>
  );
};

export default Location;
