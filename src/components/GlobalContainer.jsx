import React from "react";

const GlobalContainer = (props) => {
  const { className = "", children, ...others } = props;
  return (
    <div
      className={`px-12 py-14 min-h-screen flex justify-center ${className} `}
      {...others}
    >
      {children}
    </div>
  );
};

export default GlobalContainer;
