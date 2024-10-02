// ChatBubble.tsx
import React from "react";
import Image from "next/image";

// User message component
export const UserMessage = ({ content }: { content: string }) => {
  return (
    <div className="flex justify-start w-full">
      <div className="flex flex-col w-full">
        <div className="max-w-[100%] p-3 rounded-2xl bg-blue-500 text-white">
          {content}
        </div>
      </div>
    </div>
  );
};

// Other message component (e.g., bot message)
export const OtherMessage = ({ content }: { content: string }) => {
  return (
    <div className="flex justify-start w-full">
      <div className="flex flex-col w-full">
        <Image src="/Logo.svg" width={82} height={34} alt="logo" />
        <div className="max-w-[100%] p-3 rounded-2xl bg-gray-100 text-black">
          {content}
        </div>
      </div>
    </div>
  );
};
