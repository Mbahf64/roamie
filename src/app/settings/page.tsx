"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Tabs from "./tabs";
import Sidebar from "../chat_component/sidebar";
import BottomIcon from "../chat_component/bottomIcon";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Detect screen size to enable hover for large screens
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint is 1024px
    };
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="w-screen h-screen overflow-x-hidden">
      <header className="flex justify-between items-center bg-[#f9fafc] border border-[#e5eaf0] w-screen h-[72px] fixed px-[1em]">
        <div className="flex gap-3">
          <Image
            src="/menu.svg"
            width={24}
            height={24}
            alt="menu"
            className="lg:hidden cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          />
          <Image src="/Logo.svg" width={82} height={34} alt="logo" />
        </div>

        <div className="h-[41px] px-6 py-3 bg-white rounded-[99px] border border-[#e5eaf0] justify-center items-center gap-2 inline-flex lg:hidden">
          <div className="justify-start items-end gap-1 flex">
            <Image src="/share.svg" width={16} height={16} alt="share" />
            <div className="text-[#292d32] text-sm font-medium">Share Chat</div>
          </div>
        </div>
      </header>

      <div
        className={`w-full items-center justify-center flex flex-col mt-[15vh] transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "lg:ml-[150px]" : "ml-0"
        }`}
      >
        <div className="w-[90vw] lg:w-[746px] h-[444px]  flex flex-col items-center justify-center gap-8">
          <div className="flex items-start gap-5  justify-start  w-full">
            <Image src="/avatar2.svg" width={64} height={64} alt="share" />
            <div className="flex flex-col h-[56px] justify-end gap-2">
              <div>
                <span className="text-[#292d32] text-xl font-medium font-['Satoshi'] leading-7">
                  Bright Mba{" "}
                </span>
                <span className="text-[#dadfe4] text-xl font-medium font-['Satoshi'] leading-7">
                  /
                </span>
                <span className="text-[#292d32] text-xl font-medium font-['Satoshi'] leading-7">
                  {" "}
                </span>
                <span className="text-[#292d32] text-base font-medium font-['Satoshi'] leading-snug">
                  General
                </span>
              </div>
              <div className="text-[#646d80] text-[11px] lg:text-sm font-medium font-['Satoshi'] leading-tight ">
                Update your Information and manage your account
              </div>
            </div>
          </div>
          <Tabs />
        </div>
      </div>
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isLargeScreen={isLargeScreen} // Pass screen size
      />
      {!isSidebarOpen && <BottomIcon />}
    </main>
  );
}
