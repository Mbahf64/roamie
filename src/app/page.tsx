"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Suggestion from "./chat_component/suggestions";
import Sidebar from "./chat_component/sidebar";
import BottomIcon from "./chat_component/bottomIcon";
import TextArea from "./chat_component/textArea";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  type: "user" | "bot"; // Define whether it's a user or bot message
  content: string; // The content of the message
}

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [hideTopContent, setHideTopContent] = useState(false); // Add this state to control visibility
  const [messages, setMessages] = useState<Message[]>([]); // Store the conversation

  // Detect screen size to enable hover for large screens
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint is 1024px
    };
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const handleSendMessage = async (text: string) => {
    if (text.trim()) {
      // Add the user's message to the conversation
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'user', content: text },
      ]);
      setHideTopContent(true); // Hide top content after the first message is sent

      try {
        const response = await fetch('/api/gemini', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: text }), // Send the user's prompt
        });

        const data = await response.json();

        if (response.ok) {
          // Add the bot's response to the conversation
          setMessages((prevMessages) => [
            ...prevMessages,
            { type: 'bot', content: data.message },
          ]);
        } else {
          throw new Error(data.error || 'Failed to get a response');
        }
      } catch (error) {
        console.error('Error fetching Gemini response:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', content: "Sorry, I couldn't fetch a response." }, // Fallback error message
        ]);
      }
    }
  };
  
  


  const UserMessage = ({ content }: { content: string }) => {
    return (
      <div className="flex justify-start w-full mb-8 font-galano">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="relative inline-block">
              <Image
                src="./user-bg.svg"
                width={64}
                height={64}
                alt="bg"
                className="block w-[40px] h-[40px]"
              />
              <Image
                src="/avatar.png"
                width={30}
                height={30}
                alt="user"
                className="absolute inset-[20px] transform -translate-x-1/2 -translate-y-1/2 "
              />
            </div>
            <div className="text-[#646d80] text-sm font-medium leading-tight">
              You
            </div>
          </div>
          <div className="h-full w-full pl-4 pr-4 py-2.5 bg-[#f9fafc] rounded-xl justify-start items-center inline-flex text-[#292d32] text-sm font-medium leading-tight">
            {content}
          </div>
        </div>
      </div>
    );
  };

  // OtherMessage component
  const OtherMessage = ({ content }: { content: string }) => {
    return (
      <div className="flex justify-start w-full font-galano mb-6">
        <div className="flex flex-col w-full gap-4">
          <Image src="/Logo2.svg" width={82} height={34} alt="logo" />
          <div className="h-full px-4 py-[17px] bg-[#1e1e1e] rounded-lg justify-start items-center gap-2 inline-flex text-white text-sm font-normal">
            {content}
          </div>
        </div>
      </div>
    );
  };

  const scrollRef = useRef<HTMLDivElement>(null); // Ref to scroll container
  const lastMessageRef = useRef<HTMLDivElement>(null); // Ref to the last message

  // Automatically scroll to the latest message when it changes
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Effect runs every time `messages` change

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

      <div className="flex items-center justify-end h-full">
      <div
  className={`flex flex-col items-center justify-end w-full h-full mb-[4rem] transition-transform duration-500 ease-in-out transform ${
    isSidebarOpen ? "lg:ml-[200px]" : "lg:translate-x-0"
  }`}
>

          {/* Conditionally render top content */}
          {!hideTopContent && (
            <div className="flex flex-col items-center gap-5">
              <div className="text-center text-[#292d32] text-[30px] lg:text-5xl font-bold font-galano">
                Hey Buddy, <br className="lg:hidden" /> Welcome to Roamie
              </div>
              <div className="w-[85vw] lg:w-[806px] text-center text-[#646d80] text-sm lg:text-base font-galano">
                Ask Roamie anything about your trip, and let him make your
                travel planning easy, fast, and stress-free!
              </div>
              <Suggestion />
            </div>
          )}

          <ScrollArea className="max-h-[55vh] lg:max-h-[50vh] 2xl:max-h-[63vh]" ref={scrollRef}>
            <div className="w-[93vw] lg:w-[836px] flex flex-col items-center pt-[1px]">
              {/* Chat Bubbles */}
              <div className="w-full">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    ref={index === messages.length - 1 ? lastMessageRef : null}
                  >
                    {message.type === "user" ? (
                      <UserMessage content={message.content} />
                    ) : (
                      <OtherMessage content={message.content} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>

          <div className="w-[93vw] lg:w-[836px] h-[154px] lg:h-[164px]  flex flex-col items-center bg-gray-50 rounded-3xl shadow border-2 border-[#80c6fa] pt-[1px]">
            <TextArea onSend={(text) => handleSendMessage(text)} />

            <div className="w-[85vw] lg:w-[777px] flex items-center justify-between lg:mt-2">
              <div className="flex items-center justify-center gap-8">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    className="inline"
                    src="./link.svg"
                    alt="link"
                    width={16}
                    height={16}
                  />
                  <div className="text-center text-[#292d32] text-sm font-normal font-galano">
                    Give us some context
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center gap-2">
                  <Image
                    className="inline"
                    src="./find.svg"
                    alt="find"
                    width={16}
                    height={16}
                  />
                  <div className="text-center text-[#292d32] text-sm font-normal font-galano">
                    I’m not sure what to ask
                  </div>
                </div>
              </div>
              <div className="text-[#292d32] text-sm font-normal  leading-tight font-galano">
                20 / 1000
              </div>
            </div>
          </div>

          {/* This message stays visible */}
          <div className="w-[93vw] text-center text-[#646d80]  text-sm lg:text-base mt-7 font-galano">
            Any question not about traveling to a new country might be
            inaccurate. Model: Roamie AI v1.1
          </div>
        </div>
        <Sidebar
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
          isLargeScreen={isLargeScreen} // Pass screen size
        />
      </div>

      {/* Show BottomIcon only when sidebar is closed */}
      {!isSidebarOpen && <BottomIcon />}
    </main>
  );
}
