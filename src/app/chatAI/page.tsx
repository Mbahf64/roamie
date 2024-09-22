"use client";

import React, { useState } from "react";
import Image from "next/image";
import PassportValidity from "./passportValidity";
import ReasonForTravelling from "./reasonForTravelling";
import SelectCountry from "./selectCountry";
import StayingFor from "./stayingFor";
import Textarea from "./textArea";
import Suggestion from "./suggestions";
import Recentchat from "./recentChat";
import Sidebar from "./sidebar";
import BottomIcon from "./bottomIcon";
import Select from "../select"

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

  return (
    <main className="sf-pro">
      <header className="flex justify-between items-center mx-[1.3em] lg:mx-[1em]  mt-9 ">
        <img src="/roamie_logo.svg" alt="logo" className="fixed" />

        <div className="flex flex-row items-center justify-center fixed right-5 mt-4">
          <span className="text-[#646d80] text-[12px] font-normal pr-2 font-['SF Pro'] leading-[14px]">
            You’re from
          </span>
          <Select />
        </div>
      </header>

      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.svg"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Sidebar component with control over its state */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Conditionally render BottomIcon when sidebar is closed */}
      {!isSidebarOpen && <BottomIcon />}

      <div className="flex flex-col items-center justify-center max-w-full h-full mt-[4rem] 2xl:mt-[8em]">
        <div className="w-[90vw] md:w-[650px] md:h-[95px] h-[159px] px-4 py-8 bg-white/30 rounded-lg shadow flex-col justify-center items-center flex">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            <div className="">
              <div className="text-[#646d80] text-[10px] font-normal font-['SF Pro'] leading-[14px] pb-1.5">
                You intend to visit
              </div>
              <SelectCountry />
            </div>
            <div className="">
              <div className="text-[#646d80] text-[10px] font-normal font-['SF Pro'] leading-[14px] pb-1.5">
                You’re going for?
              </div>
              <ReasonForTravelling />
            </div>
            <div className="">
              <div className="text-[#646d80] text-[10px] font-normal font-['SF Pro'] leading-[14px] pb-1.5">
                Passport Validity
              </div>
              <PassportValidity />
            </div>
            <div className="">
              <div className="text-[#646d80] text-[10px] font-normal font-['SF Pro'] leading-[14px] pb-1.5">
                Staying for
              </div>
              <StayingFor />
            </div>
          </div>
        </div>

        <div className="text-center text-[#292d32] text-[32px] lg:text-[40px] font-['SF Pro'] mt-3 mb-9">
          Good afternoon, Micheal
        </div>

        <Textarea />
        <Suggestion />
        <Recentchat />
      </div>
    </main>
  );
}
