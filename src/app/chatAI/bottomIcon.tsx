import React from "react";

const BottomIcon = () => {
  return (
    <div className="fixed lg:flex flex-col items-center bottom-[2rem] left-0 ml-[1em] z-50 hidden">
      <div className="mb-3">
        <img src="./sidebar-right.svg" alt="sidebar-right" />
      </div>
      <div className="relative inline-block">
        <img src="./user-bg.svg" alt="bg" className="block w-[40px] h-[40px]" />
        <img
          src="./user.svg"
          alt="user"
          className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px]"
        />
      </div>
    </div>
  );
};

export default BottomIcon;

