"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PassportValidity from "./passportValidity";
import ReasonForTravelling from "./reasonForTravelling";
import SelectCountry from "./selectCountry";
import StayingFor from "./stayingFor";
import Textarea from "./textArea"
import Suggestion from "./suggestions"
import Recentchat from "./recentChat"

export default function Home() {
  return (
    <main className="sf-pro">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.svg"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center  max-w-full h-full  mx-[1em]">
        <div className="w-[90vw] md:w-[600px] md:h-[115px] h-[159px] px-5 py-8 mt-[3rem] bg-white/30 rounded-lg shadow flex-col justify-center items-center gap-4 flex">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="">
            <div className="text-[#646d80] text-[10px] font-normal font-['SF Pro'] leading-[14px] pb-1.5">You intends to vist</div>
              <SelectCountry />
            </div>
            <div className="">
            <div className="text-[#646d80] text-[10px] font-normal font-['SF Pro'] leading-[14px] pb-1.5">You’re going for?</div>
              <ReasonForTravelling />
            </div>
            <div className="">
            <div className="text-[#646d80] text-[10px] font-normal font-['SF Pro'] leading-[14px] pb-1.5">Passport Validity</div>
              <PassportValidity />
            </div>
            <div className="">
            <div className="text-[#646d80] text-[10px] font-normal font-['SF Pro'] leading-[14px] pb-1.5">Staying for</div>
              <StayingFor />
            </div>
          </div>
        </div>

        <div className="text-center text-[#292d32] text-[32px] lg:text-[40px] font-['SF Pro'] mt-3 mb-9">Good afternoon, Micheal</div>

        <Textarea />
        <Suggestion />

        <div className="w-[90vw] lg:w-[40vw] 2xl:w-[31vw] mt-[2rem] flex items-center justify-between mb-6">
                <div className="gap-3 flex items-center justify-between">
                    <img src="./messages.svg" alt="messages" />
                    <p className="text-[#292d32] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">You recent Chat</p>
                    <img src="./arrow-up.svg" alt="" />
                </div>
                <div className="gap-3 flex items-center lg:-mr-[1rem] 2xl:-m-[0rem]">
                    <p className="text-[#646d80] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">View all</p>
                    <img src="./arrow-right.svg" alt="" />
                </div>
            </div>
        <Recentchat />
      </div>
    </main>
  );
}
