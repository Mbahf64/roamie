import React, { useState, useRef } from "react";
import Image from "next/image";

const TextAreaWithIcons: React.FC = () => {
  const [text, setText] = useState(""); // State to track the input
   const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  // Function to dynamically adjust height
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    const textarea = textAreaRef.current;
  
    if (textarea) {
      // Reset height first to adjust for shrinking
      textarea.style.height = "auto";
  
      // Set the height based on the scrollHeight (the total height of the content)
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <div className="flex items-center justify-center">
      {" "}
      {/* Full screen height, centering */}
      <div className="relative max-w-full">
        <textarea
          ref={textAreaRef}
          name=""
          placeholder="How can Roamie help you today?"
          value={text}
          onChange={handleInput}
          className="resize-none w-[90vw] lg:w-[55vw] 2xl:w-[40vw] text-left text-[#646d80] font-normal px-4 py-4 rounded-2xl border-none shadow text-sm focus:outline-none focus:border-transparent"
          data-gramm="false" // Disable Grammarly on this textarea
          style={{
            paddingTop: "16px", // Fixed padding at the top
            paddingBottom: "16px", // Fixed padding at the bottom
            paddingRight: "90px", // Space for mic and send icons
            lineHeight: "1.5rem", // Line height for consistency
            overflow: "hidden", // Prevent vertical scroll
            minHeight: "60px", // Minimum height to keep padding intact
            maxHeight: "200px", // Max height to prevent uncontrolled growth
          }}
        />

        {/* Container for the icons */}
        <div
          className="absolute right-4 flex items-center h-full top-0 transition-all duration-300 ease-in-out"
          style={{
            transform: text ? "translateX(-0px)" : "translateX(0)",
          }}
        >
          {/* Microphone icon */}
          <Image
            src="./microphone.svg"
            alt="mic"
            width={12}
            height={12}
            className="w-5 h-5 cursor-pointer transition-all duration-300 ease-in-out"
          />

          {/* Send icon (only appears when there's text) */}
          {text && (
            <Image
              src="./send.svg"
              alt="send"
              className="w-8 h-8 ml-4 cursor-pointer transition-all duration-300 ease-in-out"
              width={50}
              height={50}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TextAreaWithIcons;
Image;
