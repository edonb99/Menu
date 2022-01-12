import React from "react";

const Carditem = (props) => {
  const { title, body, logo } = props;

  return (
    <div className="flex flex-row w-full h-64 p-3 mt-12 space-x-5 space-y-0 border shadow-2xl shadow-gray-200 bg-gray-50 rounded-xl">
      <div className="relative grid object-cover w-1/3 overflow-hidden bg-white rounded-xl place-items-center">
        <img src={logo} alt="vakti" className="absolute rounded-xl" />
      </div>
      <div className="flex flex-col w-2/3 p-3 space-y-2 ">
        <h3 className="text-3xl font-black text-gray-800">{title}</h3>
        <p className="text-lg text-gray-500">{body}</p>
      </div>
    </div>
  );
};

export default Carditem;
