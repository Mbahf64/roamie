import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuHelpCircle } from "react-icons/lu";
import Image from "next/image";

const EmailButtonWithPopover = () => {
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const [isAppearancePopoverVisible, setAppearancePopoverVisible] =
    useState(false);
  const [isLearnMorePopoverVisible, setLearnMorePopoverVisible] =
    useState(false);
  const [selectedAppearance, setSelectedAppearance] = useState("System"); // Default selection

  const togglePopover = () => {
    setPopoverVisible((prev) => !prev);
    // Close other popovers if opened
    setAppearancePopoverVisible(false);
    setLearnMorePopoverVisible(false);
  };

  const toggleAppearancePopover = () => {
    setAppearancePopoverVisible((prev) => !prev);
    setLearnMorePopoverVisible(false); // Close learn more when appearance is opened
  };

  const toggleLearnMorePopover = () => {
    setLearnMorePopoverVisible((prev) => !prev);
    setAppearancePopoverVisible(false); // Close appearance when learn more is opened
  };

  const handleAppearanceSelection = (option: string) => {
    setSelectedAppearance(option); // Set selected option
  };

  const appearanceOptions = [
    { label: "System", icon: "./devices.svg" },
    { label: "Light", icon: "./light.svg" },
    { label: "Dark", icon: "./dark.svg" },
  ];

  return (
    <div className="relative">
      {/* Main Button */}
      <div
        className="w-[227px] 2xl:w-[242px] h-12 pl-2 pr-4 py-2 bg-[#f6faff] rounded-lg border border-[#dadfe4] justify-start items-center gap-2 inline-flex cursor-pointer"
        onClick={togglePopover}
      >
        <Image src="./profile.svg" alt="profile" width={32} height={32} />
        <div className="flex items-center gap-5 2xl:gap-5.5 ">
          <div className="h-4 text-[#292d32] text-[12px] font-normal leading-none">
            mbabright2105@gmail.com
          </div>
          {/* Arrow that rotates */}
          <Image
            src="./arrow-up.svg"
            width={14}
            height={14}
            alt="arrow"
            className={`transition-transform duration-300 ${
              isPopoverVisible ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Main Popover */}
      {isPopoverVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
          animate={{ opacity: 1, y: 0 }} // Animate to full visibility and move up
          exit={{ opacity: 0, y: 20 }} // Animate out back down
          transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth animation
          className="absolute bottom-full left-0 mb-2 w-[227px] 2xl:w-[242px] h-[330px] bg-white p-4 rounded-2xl shadow border border-[#e5eaf0]"
          style={{ zIndex: 10 }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="text-sm text-[#292d32]">
                mbabright2105@gmail.com
              </div>
              <div className="flex gap-2 items-center justify-start">
                <Image
                  src="./profile.svg"
                  alt="profile"
                  width={32}
                  height={32}
                />
                <div>
                  <div className="text-[#292d32] text-sm font-normal font-['SF Pro'] leading-none cursor-pointer">
                    Micheal
                  </div>
                  <div className="h-[13px] px-1 py-px rounded-sm border border-[#e5eaf0] justify-center items-center gap-2 inline-flex cursor-pointer">
                    <div className="text-[#646d80] text-[9px] font-normal font-['SF Pro'] leading-[11.20px] tracking-tight">
                      Free plan
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-none cursor-pointer">
              Settings
            </div>
            {/* Appearance Section */}
            <div className="relative">
              <div
                className="flex gap-24 2xl:gap-[120px] cursor-pointer"
                onClick={toggleAppearancePopover}
              >
                <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-none">
                  Appearance
                </div>
                <Image
                  src="./arrow-right(2).svg"
                  alt="arrow-right"
                  width={12}
                  height={12}
                />
              </div>

              {isAppearancePopoverVisible && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }} // Animate from slightly left
                  animate={{ opacity: 1, x: 0 }} // Smooth in
                  exit={{ opacity: 0, x: -10 }} // Animate back out
                  transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth animation
                  className="absolute -top-9 left-full ml-2 w-[150px] bg-white  px-4  pt-4 pb-2 rounded-lg shadow border border-[#e5eaf0]"
                >
                  {appearanceOptions.map((option) => (
                    <div
                      key={option.label}
                      className="flex items-center gap-2 cursor-pointer mb-2" // Added mb-2 for spacing
                      onClick={() => handleAppearanceSelection(option.label)}
                    >
                      <Image
                        src={option.icon}
                        alt={option.label}
                        width={12}
                        height={12}
                      />
                      <div className="w-28 text-[#646d80] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">
                        {option.label}
                      </div>
                      {selectedAppearance === option.label && (
                        <Image
                          src="./check-icon.svg"
                          alt="Selected"
                          width={12}
                          height={12}
                        />
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-none cursor-pointer">
              Featured Preview
            </div>

            <hr />

            {/* Learn More Section */}
            <div className="relative">
              <div
                className="flex gap-24 2xl:gap-[120px] cursor-pointer"
                onClick={toggleLearnMorePopover}
              >
                <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-none">
                  Learn more
                </div>
                <Image
                  src="./arrow-right(2).svg"
                  alt="arrow-right"
                  width={12}
                  height={12}
                />
              </div>

              {isLearnMorePopoverVisible && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }} // Animate from slightly left
                  animate={{ opacity: 1, x: 0 }} // Smooth in
                  exit={{ opacity: 0, x: -10 }} // Animate back out
                  transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth animation
                  className="absolute -top-2 left-full ml-2 w-[158px] bg-white p-4 rounded-lg shadow border border-[#e5eaf0]"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3 cursor-pointer">
                      <div className="w-28 text-[#646d80] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">
                        About Roamie
                      </div>
                      <Image
                        src="./system.svg"
                        alt="system"
                        width={12}
                        height={12}
                      />
                    </div>
                    <div className="flex gap-3 cursor-pointer">
                      <div className="w-28 text-[#646d80] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">
                        Terms of use
                      </div>
                      <Image
                        src="./system.svg"
                        alt="system"
                        width={12}
                        height={12}
                      />
                    </div>
                    <div className="flex gap-3 cursor-pointer">
                      <div className="w-28 text-[#646d80] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">
                        Privacy Policy
                      </div>
                      <Image
                        src="./system.svg"
                        alt="system"
                        width={12}
                        height={12}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-none cursor-pointer">
              Help & Support
            </div>

            <hr />

            <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-none cursor-pointer">
              Log Out
            </div>
          </div>
        </motion.div>
      )}
      <div className="flex gap-1 cursor-pointer justify-end mr-[16px] mt-2">
        <LuHelpCircle size="15" className="text-[#646d80]" />
        <div className="text-[#646d80] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">
          Help & Support
        </div>
      </div>
    </div>
  );
};

export default EmailButtonWithPopover;
