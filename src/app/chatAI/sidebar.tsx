import React, { useState } from "react";
import { motion } from "framer-motion";
import Profile from "./profile";
import Image from "next/image";
Image;

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isLocked, setIsLocked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    if (!isLocked) setIsOpen(true); // Open sidebar on hover if not locked
  };

  const handleMouseLeave = () => {
    if (!isLocked) setIsOpen(false); // Close sidebar on leave if not locked
  };

  const toggleLock = () => {
    setIsLocked((prevLocked) => !prevLocked); // Toggle locking the sidebar
  };

  return (
    <>
      {/* Invisible hover trigger area */}
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

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen || isLocked ? "0" : "-100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        onMouseLeave={handleMouseLeave}
        className={`w-0 lg:w-[19vw] 2xl:w-[15vw] bg-transparent border border-[#e5eaf0] h-full shadow-sm fixed top-0 left-0 z-10 hidden lg:flex flex-col items-start ${
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
            <div className="pt-4 lg:pl-[14rem] 2xl:pl-[15.5rem] flex flex-col items-start gap-4">
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
          <div className="ml-[18px] mt-[3rem] 2xl:mt-[8rem]">
            <div className="flex flex-col gap-[3rem]">
              <div className="w-[227px] 2xl:w-[242px] h-9 pl-2 py-2 bg-white shadow-sm rounded-lg justify-start items-center gap-2 inline-flex cursor-pointer">
                <Image
                  src="./message-add.svg"
                  alt="add"
                  width={20}
                  height={20}
                />
                <div className="w-[102px] h-4 text-[#292d32] text-sm font-normal leading-none">
                  Start new chat
                </div>
              </div>
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
              </div>
            </div>

            <div className="flex flex-col mt-10 gap-[150px] 2xl:gap-[370px]">
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

                <div className="gap-3 flex items-center mt-4 cursor-pointer">
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
              <Profile />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
