"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Reasonfortravelling from "../questionaire-2/reasonForTravelling";

export default function Questionaire2() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const country = searchParams.get("country");
  const text = searchParams.get("text");

  const handleBackClick = () => {
    router.back(); // Navigate back to the previous page
  };



  return (
    <main className="sf-pro">
      <div className="fixed inset-0 -z-10">
        <Image src="/background.svg" alt="background" layout="fill" objectFit="cover" />
      </div>

   

      <div className="absolute top-0 w-full h-screen flex items-center justify-center flex-col gap-6">
        <button
          className="bg-[#292d32] px-6 py-4 rounded-[18px] text-white text-xs font-normal flex gap-1 md:hidden"
          onClick={handleBackClick}
        >
          <img className="image" alt="" src="/arrow_back.svg" />
          Go back
        </button>

        <div className="w-[390px] text-center">
          <span className="text-[#292d32] text-3xl font-['SF Pro']">
            Why are you traveling to {country || "..."}
          </span>
          <span className="text-[#646d80] text-3xl font-['SF Pro']">
            {text ? `, ${text}` : ""}?
          </span>
        </div>

        <Reasonfortravelling />

      </div>
    </main>
  );
}

