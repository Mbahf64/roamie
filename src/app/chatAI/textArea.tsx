import React, { useState, useRef } from "react";

const TextAreaWithIcons = () => {
  const [text, setText] = useState(""); // State to track the input
  const textAreaRef = useRef(null); // Ref to track the textarea

  // Function to dynamically adjust height
  const handleInput = (e) => {
    setText(e.target.value);
    const textarea = textAreaRef.current;

    // Reset height first to adjust for shrinking
    textarea.style.height = "auto";
    
    // Set the height based on the scrollHeight (the total height of the content)
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className="flex items-center justify-center "> {/* Full screen height, centering */}
      <div className="relative max-w-full ">
        <textarea
          ref={textAreaRef}
          name=""
          placeholder="How can Roamie help you today?"
          value={text}
          onChange={handleInput}
          className="resize-none w-[90vw] lg:w-[50vw] text-left  text-[#646d80] font-normal px-4 py-4 rounded-2xl border-none shadow text-sm focus:outline-none focus:border-transparent"
          data-gramm="false" // Disable Grammarly on this textarea
          style={{
            paddingTop: '16px',  // Fixed padding at the top
            paddingBottom: '16px', // Fixed padding at the bottom
            paddingRight: '50px',  // Space for mic and send icons
            lineHeight: '1.5rem',  // Line height for consistency
            overflow: 'hidden',    // Prevent vertical scroll
            minHeight: '60px',     // Minimum height to keep padding intact
            maxHeight: '200px',    // Max height to prevent uncontrolled growth
          }}
        />

        {/* Container for the icons */}
        {/* <div className="absolute top-4 right-[-3rem] flex items-center space-x-2 transition-all duration-300 ease-in-out">
  
          {!text && (
            <img src="./microphone.svg" alt="mic" className="w-5 h-5 cursor-pointer" />
          )}

         
          {text && (
            <img src="./send.svg" alt="send" className="w-8 h-8 cursor-pointer" />
          )}
        </div>
         */}
      </div>
    </div>
  );
};

export default TextAreaWithIcons;
