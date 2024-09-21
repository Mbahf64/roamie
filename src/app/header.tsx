"use client";

import React from "react";
import Select from "./select"

const header = () => {
  return (
    <div className="">
    <header className="flex justify-between items-center mx-[1.3em] lg:mx-[1em]  mt-4 ">
      <img src="/roamie_logo.svg" alt="logo" />

      <div className="flex flex-row items-center justify-center">
        <span className="text-[#646d80] text-[12px] font-normal pr-2 font-['SF Pro'] leading-[14px]">
          You’re from
        </span>
        <Select />
      </div>
    </header>
  </div>
  );
};

export default header;
// fixed top-0 left-0  z-10 