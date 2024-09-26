"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Timespan from "../questionaire-3/timeSpan";
import Select from "../select";

function QuestionaireContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const country = searchParams.get("country");
  const text = searchParams.get("text");

  const handleBackClick = () => {
    router.back(); // Navigate back to the previous page
  };

  return (
    <main className="sf-pro">
      <header className="flex justify-between items-center mx-[1.3em] lg:mx-[1em] mt-9">
        <Image
          src="/roamie_logo.svg"
          width={82}
          height={34}
          alt="logo"
          className="fixed"
        />
         <div className="hidden flex-row items-center justify-center fixed right-5 mt-4">
          <span className="text-[#646d80] text-[12px] font-normal pr-2 font-['SF Pro'] leading-[14px]">
            You&#39;re from  {/* Escaped apostrophe */}
          </span>
          <Select />
        </div>
      </header>

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
          <Image
            className="image"
            alt="Back"
            src="/arrow_back.svg"
            width={16}
            height={16}
          />
          Go back
        </button>

        <div className="w-[355px] md:w-[500px] text-center">
          <span className="text-[#292d32] text-3xl font-['SF Pro']">
            How long do you intend to stay in
          </span>
          <span className="text-[#646d80] text-3xl font-['SF Pro']">
            {country ? ` ${country}, ${text}` : "..." }
          </span>
          <span className="text-[#292d32] text-3xl font-['SF Pro']">?</span>
        </div>

        <Timespan />
      </div>
    </main>
  );
}

export default function Questionaire3() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuestionaireContent />
    </Suspense>
  );
}
