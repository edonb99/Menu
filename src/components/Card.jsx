import React from "react";
import { Link } from "react-router-dom";
import GlobalContainer from "./GlobalContainer";

const Card = () => {
  return (
    <GlobalContainer>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row justify-between w-full">
          <Link to="/selections">
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
              Konfirmo menynë
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-start w-full mt-12">
          <h1 className="font-sans text-4xl font-medium text-gray-400 ">
            Filan Fisteku
          </h1>
          <h1 className="py-3 text-3xl font-medium">
            Keni zgjedhur me sukses!
          </h1>
        </div>
        {/* */}
        <div className="flex flex-col w-full p-3 mt-6 space-y-3 border border-white shadow-md bg-gray-50 rounded-xl">
          <div className="relative grid w-full overflow-hidden bg-white rounded-xl h-96 place-items-center">
            <img
              src="https://static.toiimg.com/photo/79693966.cms"
              alt=""
              class="absolute rounded-xl"
            />
          </div>
          <div className="flex flex-col w-full p-5 space-y-2">
            <h3 className="text-3xl font-black text-gray-800">Hamburger</h3>
            <p className="text-2xl text-gray-500">
              The meat is usually accompanied by various ingredients such as
              tomato slices, onions, pickles, or lettuce, and numerous
              condiments such as mayonnaise, ketchup, or salsa.
            </p>
          </div>
          <div className="flex justify-start w-full p-5">
            <h3 className="font-sans text-4xl font-medium text-center text-gray-900 ">
              Lokacioni:
            </h3>
          </div>
          <div className="w-full mt-10 text-center bg-gray-100 shadow-sm h-fit rounded-2xl">
            <div className="flex flex-col justify-center flex-1">
              <h1 className="pt-4 text-4xl font-medium">
                Kazerma "Adem Jashari"
              </h1>
              <h3 className="pt-3 text-3xl font-normal">Prishtinë</h3>
              <p className="pt-2 pb-4 text-3xl font-normal">Menza 1</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end w-full h-full">
          <input
            type="submit"
            value="Konfirmo"
            className="w-full h-24 mt-16 text-4xl text-center text-green-800 bg-green-200 shadow-md cursor-pointer rounded-2xl hover:bg-green-600 hover:text-green-100"
          ></input>
          {/*
          <input
            type="reset"
            value="Anulo"
            className="w-full h-24 mt-10 text-4xl text-center text-red-800 bg-red-200 shadow-md cursor-pointer rounded-2xl hover:bg-red-600 hover:text-red-100"
          ></input>
          */}
        </div>
      </div>
    </GlobalContainer>
  );
};

export default Card;
