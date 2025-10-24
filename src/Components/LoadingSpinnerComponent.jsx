import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-16 h-16">
        {/*Circle*/}
        <div
          className="absolute inset-0 m-auto w-12 h-12 rounded-full border-4 border-t-[#0FAEBF] border-b-transparent border-l-transparent border-r-transparent animate-spin"
        ></div>

        {/*Cross*/}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1.5 h-6 bg-red-500 rotate-90 absolute"></div>
          <div className="w-1.5 h-6 bg-red-500 -rotate-180 absolute"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
