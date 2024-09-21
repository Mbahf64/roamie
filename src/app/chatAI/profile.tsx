import React, { useState } from "react";
import { motion } from "framer-motion";

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

  const handleAppearanceSelection = (option) => {
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
        <img src="./profile.svg" alt="profile" />
        <div className="flex items-center gap-5 2xl:gap-8">
          <div className="h-4 text-[#292d32] text-[11px] font-normal leading-none">
            mbabright2105@gmail.com
          </div>
          {/* Arrow that rotates */}
          <img
            src="./arrow-up.svg"
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
          className="absolute bottom-full left-0 mb-2 w-[227px] h-[330px] bg-white p-4 rounded-2xl shadow border border-[#e5eaf0]"
          style={{ zIndex: 10 }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="text-sm text-[#292d32]">
                mbabright2105@gmail.com
              </div>
              <div className="flex gap-2 items-center justify-start">
                <img src="./profile.svg" alt="profile" />
                <div>
                  <div className="text-[#292d32] text-sm font-normal font-['SF Pro'] leading-none">
                    Personal
                  </div>
                  <div className="w-[54px] text-[#646d80] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">
                    Free plan
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-none">
              Settings
            </div>
            {/* Appearance Section */}
            <div className="relative">
              <div
                className="flex gap-24 cursor-pointer"
                onClick={toggleAppearancePopover}
              >
                <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-none">
                  Appearance
                </div>
                <img src="./arrow-right(2).svg" alt="arrow-right" />
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
                      <img src={option.icon} alt={option.label} />
                      <div className="w-28 text-[#646d80] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">
                        {option.label}
                      </div>
                      {selectedAppearance === option.label && (
                        <img src="./check-icon.svg" alt="Selected" />
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-none">
              Featured Preview
            </div>

            <hr />

            {/* Learn More Section */}
            <div className="relative">
              <div
                className="flex gap-24 cursor-pointer"
                onClick={toggleLearnMorePopover}
              >
                <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-none">
                  Learn more
                </div>
                <img src="./arrow-right(2).svg" alt="arrow-right" />
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
                    <div className="flex gap-3">
                      <div className="w-28 text-[#646d80] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">
                        About Roamie
                      </div>
                      <img src="./system.svg" alt="system" />
                    </div>
                    <div className="flex gap-3">
                      <div className="w-28 text-[#646d80] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">
                        Terms of use
                      </div>
                      <img src="./system.svg" alt="system" />
                    </div>
                    <div className="flex gap-3">
                      <div className="w-28 text-[#646d80] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">
                        Privacy Policy
                      </div>
                      <img src="./system.svg" alt="system" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-none">
              Help & Support
            </div>

            <hr />

            <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-none">
              Log Out
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EmailButtonWithPopover;
