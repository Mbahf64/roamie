import React, { useState, useRef } from "react";
import Image from "next/image";

interface TextAreaWithIconsProps {
  onSend: (text: string) => void; // Pass the typed message as a prop
}

const TextAreaWithIcons: React.FC<TextAreaWithIconsProps> = ({ onSend }) => {
  const [text, setText] = useState(""); // State to track the input
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  // Function to dynamically adjust height
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    const textarea = textAreaRef.current;

    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  // Function to handle the send button click or Enter key press
  const handleSend = () => {
    if (text.trim()) {
      onSend(text); // Pass the text to the parent component
      setText(""); // Clear the text area after sending
    }
  };

  // Function to handle the Enter key press for sending the message
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent adding a new line when pressing Enter
      handleSend();
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative max-w-full">
        <textarea
          ref={textAreaRef}
          placeholder="How can Roamie help you today?"
          value={text}
          onChange={handleInput}
          onKeyPress={handleKeyPress} // Listen for Enter key
          className="resize-none text-[#292d32] text-[14px] lg:text-base font-medium font-galano w-[85vw] lg:w-[777px] lg:h-[120px] h-[110px] text-left  px-4 py-4 rounded-bl-2xl rounded-br-2xl border-none shadow  focus:outline-none focus:border-transparent"
          data-gramm="false"
          style={{
            paddingTop: "10px",
            paddingBottom: "16px",
            paddingRight: "90px",
            lineHeight: "1.5rem",
            overflow: "hidden",
            minHeight: "120px",
            maxHeight: "120px",
          }}
        />

        {/* Container for the icons */}
        <div className="absolute right-4 flex items-center h-full bottom-8">
          {text && (
            <Image
              src="./send.svg"
              alt="send"
              className="w-8 h-8 ml-4 cursor-pointer"
              width={50}
              height={50}
              onClick={handleSend}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TextAreaWithIcons;

