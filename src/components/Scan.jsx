import React from "react";
import { Link } from "react-router-dom";
import GlobalContainer from "./GlobalContainer";

const Scan = () => {
  return (
    <GlobalContainer>
      <div className="flex flex-col items-center justify-between w-full">
        <div className="flex flex-col w-full">
          <div className="font-sans text-5xl font-medium text-center text-gray-900">
            Skanoni kartelën më poshtë
          </div>
          <div className="pt-2 font-sans text-5xl font-medium text-center text-gray-400">
            për të zgjedhur vaktin për nesër:
          </div>
        </div>
        <div className="">
          <img
            className="w-48 h-48"
            src="https://cdn2.iconfinder.com/data/icons/scan-to-pay/512/scan-pay-payment-15-512.png"
            alt=""
          ></img>
        </div>

        <Link to="/location">
          <div className="flex items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </div>
        </Link>
      </div>
    </GlobalContainer>
  );
};

export default Scan;
