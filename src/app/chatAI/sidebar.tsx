import React, { useState } from "react";
import { motion } from "framer-motion";
import Profile from "./profile"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls hover-based opening
  const [isLocked, setIsLocked] = useState(false); // Controls locking the sidebar
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    if (!isLocked) setIsOpen(true); // Only open on hover if not locked
  };

  const handleMouseLeave = () => {
    if (!isLocked) setIsOpen(false); // Only close on leave if not locked
  };

  const toggleLock = () => {
    setIsLocked((prevLocked) => !prevLocked); // Toggle the locked state
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
          width: "5vw", // Invisible area where the user hovers to open the sidebar
          zIndex: 9,
        }}
        onMouseEnter={handleMouseEnter}
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }} // Initially off-screen
        animate={{ x: isOpen || isLocked ? "0" : "-100%" }} // Show if open or locked
        transition={{ type: "spring", stiffness: 100, damping: 20 }} // Smooth spring animation
        onMouseLeave={handleMouseLeave} // Sidebar closes when the mouse leaves it, if not locked
        className={`w-0 lg:w-[19vw] 2xl:w-[15vw] bg-transparent border border-[#e5eaf0] h-full shadow-sm fixed top-0 left-0 z-10 hidden lg:flex flex-col items-start ${
          isLocked ? "" : "rounded-2xl"
        }`} // Remove rounded border if locked
        style={{
          marginTop: isLocked ? "0px" : "4px", // Conditional margin-top based on isLocked state
          marginBottom: isLocked ? "0px" : "4px", // Conditional margin-bottom based on isLocked state
        }}
      >
        {/* Sidebar Content */}
        <div>
          <div
            className="relative flex items-center"
            onMouseEnter={() => setShowTooltip(true)} // Show tooltip on hover
            onMouseLeave={() => setShowTooltip(false)} // Hide tooltip on mouse leave
          >
            <div className="pt-4 lg:pl-[14rem] 2xl:pl-[15.5rem] flex flex-col items-start gap-4">
              <img
                src="./Right.svg"
                alt={isLocked ? "Unpin Sidebar" : "Pin Sidebar"}
                className="hover:shadow-md hover:bg-gray-100 hover:rounded-md p-[0.9px]"
                onClick={toggleLock}
                style={{
                  cursor: "pointer",
                  display: "block",
                  transition: "box-shadow 0.2s ease, background-color 0.2s ease",
                }} // Ensure smooth hover effects
              />

              {showTooltip && (
                <div
                  className="absolute w-[100px] left-full ml-2 px-3 py-1 bg-black text-xs text-white rounded-md shadow-lg text-center" // Fixed width for tooltip
                  style={{ top: "65%", transform: "translateY(-50%)" }} // Vertically center the tooltip
                >
                  {isLocked ? "Unpin Sidebar" : "Pin Sidebar"} {/* Change tooltip text */}
                </div>
              )}
            </div>
          </div>
          <div className="ml-[18px] mt-[3rem] 2xl:mt-[8rem]">
            <div className="flex flex-col gap-[3rem]">
              <div className="w-[227px] 2xl:w-[242px] h-9 pl-2 py-2 bg-white rounded-lg justify-start items-center gap-2 inline-flex">
                <img src="./message-add.svg" alt="add" />
                <div className="w-[102px] h-4 text-[#292d32] text-sm font-normal leading-none">
                  Start new chat
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-[#292d32] text-[13px] font-semibold leading-[14.40px] tracking-tight">
                  Starred
                </div>
                <div className="flex gap-2">
                  <img src="./messages-.svg" alt="add" />
                  <div className="w-[195px] h-4 text-[#292d32] text-sm font-normal leading-none">
                    What does the Visa Applica...
                  </div>
                </div>

                <div className="flex gap-2">
                  <img src="./messages-.svg" alt="add" />
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
                <div className="flex gap-2">
                  <img src="./messages-.svg" alt="add" />
                  <div className="w-[195px] h-4 text-[#292d32] text-sm font-normal leading-none">
                    What does the Visa Applica...
                  </div>
                </div>

                <div className="flex gap-2">
                  <img src="./messages-.svg" alt="add" />
                  <div className="w-[195px] h-4 text-[#292d32] text-sm font-normal leading-none">
                    What does the Visa Applica...
                  </div>
                </div>

                <div className="flex gap-2">
                  <img src="./messages-.svg" alt="add" />
                  <div className="w-[195px] h-4 text-[#292d32] text-sm font-normal leading-none">
                    What does the Visa Applica...
                  </div>
                </div>

                <div className="gap-3 flex items-center mt-4">
                  <p className="text-[#646d80] text-xs font-normal leading-[14.40px] tracking-tight">
                    View all
                  </p>
                  <img src="./arrow-right.svg" alt="" />
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
