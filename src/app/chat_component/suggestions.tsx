import React from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Suggestions() {
  return (
    <ScrollArea className="w-[90vw] h-[30vh]">
    <div className="w-[90vw] lg:w-[90vw] mt-6 flex flex-col items-start justify-center lg:items-center lg:px-0">
      <div className="grid grid-cols-1 gap-1 lg:gap-3 md:grid-cols-1 lg:grid-cols-3">

        <div className="w-[90vw] lg:w-[264px] h-[131px] relative bg-white rounded-[13.74px] border-l border-r border-t-8 border-b border-[#8ecbf9] flex  justify-center">
          <div className="">
            <div className="w-[87vw] lg:w-[248px] h-[76px] bg-gray-50 rounded-[10.31px] border-[0.86px] border-dotted border-[#cacaca] flex items-center justify-start pl-4 mt-2">
              <div className="w-[90vw] lg:w-[190px] text-[#646d80] text-sm font-medium font-Satoshi leading-tight">
                Can I change my Visa Whilst on a student Visa in the UK?
              </div>
            </div>

            <div className="w-[86vw] lg:w-[246px] flex items-center justify-between mt-2.5">
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center gap-1">
                  <Image
                    className="w-3 h-3 inline"
                    src="./send-light.svg"
                    alt="send-light"
                    width={12}
                    height={12}
                  />
                  <div className="text-[#292d32] text-xs font-medium font-['Galano Grotesque'] leading-[17.86px]">
                    Ask Roamie
                  </div>
                </div>
                <Image
                  className="w-3 h-3"
                  src="./arrow-right.svg"
                  alt="arrow-right"
                  width={12}
                  height={12}
                />
              </div>
              <div className="text-[#646d80] text-xs font-medium font-['Satoshi'] leading-[17.86px]">Most Asked </div>
            </div>
          </div>
        </div>

        <div className="w-[90vw] lg:w-[264px] h-[131px] relative bg-white rounded-[13.74px] border-l border-r border-t-8 border-b border-[#943cf4] flex  justify-center">
          <div className="">
            <div className="w-[87vw] lg:w-[248px] h-[76px] bg-gray-50 rounded-[10.31px] border-[0.86px] border-dotted border-[#cacaca] flex items-center justify-start pl-4 mt-2">
              <div className="w-[90vw] lg:w-[190px] text-[#646d80] text-sm font-medium font-Satoshi leading-tight">
              What are the local laws in the London,UK?
              </div>
            </div>

            <div className="w-[86vw] lg:w-[246px] flex items-center justify-between mt-2.5">
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center gap-1">
                  <Image
                    className="w-3 h-3 inline"
                    src="./send-light.svg"
                    alt="send-light"
                    width={12}
                    height={12}
                  />
                  <div className="text-[#292d32] text-xs font-medium font-['Galano Grotesque'] leading-[17.86px]">
                    Ask Roamie
                  </div>
                </div>
                <Image
                  className="w-3 h-3"
                  src="./arrow-right.svg"
                  alt="arrow-right"
                  width={12}
                  height={12}
                />
              </div>
              <div className="text-[#646d80] text-xs font-medium font-['Satoshi'] leading-[17.86px]">Most Asked </div>
            </div>
          </div>
        </div>

        <div className="w-[90vw] lg:w-[264px] h-[131px] relative bg-white rounded-[13.74px] border-l border-r border-t-8 border-b border-[#ed6913] flex  justify-center">
          <div className="">
            <div className="w-[87vw] lg:w-[248px] h-[76px] bg-gray-50 rounded-[10.31px] border-[0.86px] border-dotted border-[#cacaca] flex items-center justify-start pl-4 mt-2">
              <div className="w-[90vw] lg:w-[190px] text-[#646d80] text-sm font-medium font-Satoshi leading-tight">
              Can I change my Visa Whilst on a student Visa in the UK?
              </div>
            </div>

            <div className="w-[86vw] lg:w-[246px] flex items-center justify-between mt-2.5">
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center gap-1">
                  <Image
                    className="w-3 h-3 inline"
                    src="./send-light.svg"
                    alt="send-light"
                    width={12}
                    height={12}
                  />
                  <div className="text-[#292d32] text-xs font-medium font-['Galano Grotesque'] leading-[17.86px]">
                    Ask Roamie
                  </div>
                </div>
                <Image
                  className="w-3 h-3"
                  src="./arrow-right.svg"
                  alt="arrow-right"
                  width={12}
                  height={12}
                />
              </div>
              <div className="text-[#646d80] text-xs font-medium font-['Satoshi'] leading-[17.86px]">Most Asked </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </ScrollArea>
  );
}
