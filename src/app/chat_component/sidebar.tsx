import React, { useState } from "react";
import { motion } from "framer-motion";
import Profile from "./profile";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isLargeScreen: boolean; // Pass screen size prop
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setIsOpen,
  isLargeScreen,
}) => {
  const [isLocked, setIsLocked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    if (isLargeScreen && !isLocked) setIsOpen(true); // Open sidebar on hover only if large screen and not locked
  };

  const handleMouseLeave = () => {
    if (isLargeScreen && !isLocked) setIsOpen(false); // Close sidebar on leave only if large screen and not locked
  };

  const toggleLock = () => {
    setIsLocked((prevLocked) => !prevLocked); // Toggle locking the sidebar
  };

  return (
    <>
      {/* Invisible hover trigger area for large screens */}
      {isLargeScreen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "5vw",
            zIndex: 9,
          }}
          onMouseEnter={handleMouseEnter}
        />
      )}

      {/* Blur background overlay for small screens when sidebar is open */}
      {!isLargeScreen && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-9"
          onClick={() => setIsOpen(false)} // Close sidebar when overlay is clicked
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen || isLocked ? "0" : "-100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        onMouseLeave={handleMouseLeave}
        className={`w-[298px] bg-white border border-[#e5eaf0] h-screen lg:pr-0 shadow-sm fixed top-0 left-0 z-10 flex flex-col items-start ${
          isLocked ? "" : "rounded-2xl"
        }`}
        style={{
          marginTop: isLocked ? "0px" : "4px",
          marginBottom: isLocked ? "0px" : "4px",
        }}
      >
        {/* Sidebar Content */}
        <div>
          <div
            className="relative flex items-center"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <div className="pt-5 pl-[1em] flex lg:hidden justify-between w-full">
              <Image src="/Logo.svg" width={82} height={34} alt="logo" />

              {/* Close icon for small screens */}
              {!isLargeScreen && (
                <div className="absolute top-4 right-0">
                  <XMarkIcon
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer h-7 w-7 "
                  />
                </div>
              )}
            </div>

            <div className="pt-5 pl-[1em] hidden lg:flex justify-between w-full">
              <Image src="/Logo.svg" width={82} height={34} alt="logo" />

              <Image
                src="./Right.svg"
                width={24}
                height={24}
                alt={isLocked ? "Unpin Sidebar" : "Pin Sidebar"}
                className="hover:shadow-md hover:bg-gray-100 hover:rounded-md p-[0.9px]"
                onClick={toggleLock}
                style={{
                  cursor: "pointer",
                  display: "block",
                  transition:
                    "box-shadow 0.2s ease, background-color 0.2s ease",
                }}
              />

              {showTooltip && (
                <div
                  className="absolute w-[100px] left-full ml-2 px-3 py-1 bg-black text-xs text-white rounded-md shadow-lg text-center"
                  style={{ top: "65%", transform: "translateY(-50%)" }}
                >
                  {isLocked ? "Unpin Sidebar" : "Pin Sidebar"}
                </div>
              )}
            </div>
          </div>
          <div className="h-screen ml-[18px] mt-[4rem] 2xl:mt-[6rem]">
            <div className="flex flex-col gap-[3rem]">
              <div className=" h-9 justify-start items-center gap-2 inline-flex cursor-pointer">
                <Image
                  src="./message-add.svg"
                  alt="add"
                  width={20}
                  height={20}
                />
                <div className=" h-4 text-[#292d32] text-sm font-normal leading-none">
                  Start new chat
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between h-full pb-[10rem] lg:pb-[10rem] 2xl:pb-[12rem]">
              <div className="flex flex-col gap-6 w-full h-[300px] p-4 bg-white rounded-xl border border-[#e5eaf0] mt-5">
                <div className="flex flex-col gap-3">
                  <div className="text-[#292d32] text-[13px] font-semibold leading-[14.40px] tracking-tight">
                    Starred
                  </div>
                  <div className="flex gap-2 cursor-pointer">
                    <Image
                      src="./messages-.svg"
                      alt="add"
                      width={16}
                      height={16}
                    />
                    <div className="w-[195px] h-4 text-[#292d32] text-sm font-normal leading-none">
                      What does the Visa Applica...
                    </div>
                  </div>
                  <div className="flex gap-2 cursor-pointer">
                    <Image
                      src="./messages-.svg"
                      alt="add"
                      width={16}
                      height={16}
                    />
                    <div className="w-[195px] h-4 text-[#292d32] text-sm font-normal leading-none">
                      What does the Visa Applica...
                    </div>
                  </div>
                  <div className="flex gap-2 cursor-pointer">
                    <Image
                      src="./messages-.svg"
                      alt="add"
                      width={16}
                      height={16}
                    />
                    <div className="w-[195px] h-4 text-[#292d32] text-sm font-normal leading-none">
                      What does the Visa Applica...
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-[#292d32] text-[13px] font-semibold leading-[14.40px] tracking-tight">
                    Recents
                  </div>
                  <div className="flex gap-2 cursor-pointer">
                    <Image
                      src="./messages-.svg"
                      alt="add"
                      width={16}
                      height={16}
                    />
                    <div className="w-[195px] h-4 text-[#292d32] text-sm font-normal leading-none">
                      What does the Visa Applica...
                    </div>
                  </div>
                  <div className="flex gap-2 cursor-pointer">
                    <Image
                      src="./messages-.svg"
                      alt="add"
                      width={16}
                      height={16}
                    />
                    <div className="w-[195px] h-4 text-[#292d32] text-sm font-normal leading-none">
                      What does the Visa Applica...
                    </div>
                  </div>
                  <div className="flex gap-2 cursor-pointer">
                    <Image
                      src="./messages-.svg"
                      alt="add"
                      width={16}
                      height={16}
                    />
                    <div className="w-[195px] h-4 text-[#292d32] text-sm font-normal leading-none">
                      What does the Visa Applica...
                    </div>
                  </div>
                  <div className="gap-3 flex items-center mt-3 cursor-pointer">
                    <p className="text-[#646d80] text-xs font-normal leading-[14.40px] tracking-tight">
                      View all
                    </p>
                    <Image
                      src="./arrow-right.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
              </div>

              <Profile />
            </div>

            <div className="flex flex-col h-screen  mt-10 justify-between lg:pb-[19rem] 2xl:pb-[22rem]"></div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
