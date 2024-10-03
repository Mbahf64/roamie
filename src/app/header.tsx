"use client";

import React from "react";
import Select from "./settings/select"
import Image from "next/image";

const header = () => {
  return (

    <header className="flex justify-between items-center mx-[1.3em] lg:mx-[1em]  mt-9 ">
      <Image src="/roamie_logo.svg" alt="logo" className="fixed" />

      <div className="flex flex-row items-center justify-center fixed right-5 mt-4">
        <span className="text-[#646d80] text-[12px] font-normal pr-2 font-['SF Pro'] leading-[14px]">
          You’re from
        </span>
        <Select />
      </div>
    </header>

  );
};

export default header;
// fixed top-0 left-0  z-10 