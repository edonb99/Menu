import React from "react";
import { Link } from "react-router-dom";
import menuData from "../data/menuData";
import Carditem from "./CardItem";
import GlobalContainer from "./GlobalContainer";

const Selections = () => {
  return (
    <GlobalContainer>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row justify-between w-full">
          <Link to="/location">
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
              Zgjedhni menynë
            </h1>
          </div>
        </div>
        <div className="flex justify-start w-full mt-12 ">
          <h1 className="font-sans text-4xl font-medium text-right text-gray-400 ">
            Filan Fisteku
          </h1>
        </div>
        <Link to="/card">
          {menuData.map((data) => {
            return (
              <Carditem title={data.title} body={data.body} logo={data.logo} />
            );
          })}
        </Link>
      </div>
    </GlobalContainer>
  );
};

export default Selections;
