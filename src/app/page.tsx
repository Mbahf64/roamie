import React from "react";
import Link from "next/link";
import Image from "next/image";
import CoolModeDemo from "../components/coolModeDemo";
import Shineborder from "../components/shineBorder";

export default function page() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.svg"
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100} // Ensures image quality is high across all screens
        />
      </div>

      <div className="max-h-[926px] flex flex-col items-center m-auto justify-center gap-[18em]  lg:gap-[18em] mx-[1.5em] mt-[10em]">
        <div className="flex flex-col items-center justify-center gap-4 mt-[6em] lg:mt-[7em]">
          <Shineborder />
          <h1 className="w-[323px] md:w-full text-center text-[#292d32] text-[32px] font-normal font-sf-pro md:text-5xl leading-10">
            Meet your personal Travel Guide
          </h1>
          <p className="md:w-[430px] w-[341px] text-center text-[#646d80] text-[14px]  font-normal font-sf-pro leading-tight">
            We would like to know about your trip so we can provide you with a
            tailored guide that fits your need.
          </p>
          <Link href="/questionaire-1"><CoolModeDemo /></Link>

          <p className="w-[369px] text-[#646d80] text-center text-sm mt-[1em]">By starting I accept Roamie’s {" "}
            <span className="text-[#646d80] text-sm font-normal font-sf-pro underline">
              Terms of service
            </span>
            {" "}
              and acknowledge{" "}<span className="text-[#646d80] text-sm font-normal font-sf-pro underline">
              Privacy policy
            </span>
            </p>
        </div>

        <div className="w-[290px] lg:w-[642px] text-center text-[#646d80] text-xs lg:text-sm font-normal font-['SF Pro'] leading-none">Every law related response is backed by the current laws of the selected country.</div>
      </div>
    </>
  );
}
