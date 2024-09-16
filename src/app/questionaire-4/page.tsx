"use client";

import React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Timespan from "../questionaire-4/validity";

export default function Home() {

  const router = useRouter();
  const handleBackClick = () => {
    router.back(); // Navigate back to the previous page
  };


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

   
      <div className="absolute top-0 w-full h-screen flex items-center justify-end md:justify-center flex-col gap-8">
        <button
          className="bg-[#292d32] px-6 py-4 rounded-[18px] text-white text-xs font-normal flex gap-1 md:hidden"
          onClick={handleBackClick}
        >
          <img className="image" alt="" src="/arrow_back.svg" />
          Go back
        </button>

        <div className="w-[382px] md:w-[622px] text-center text-[#292d32] text-[32px] md:text-[40px] font-['SF Pro']">
          What is your passport validity?
        </div>
        <Timespan />
      </div>
    </main>
  );
}


