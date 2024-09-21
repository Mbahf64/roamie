import React from "react";

export default function Suggestions() {
  return (
    <div className="w-[90vw] lg:w-[45vw] mt-6 flex flex-col items-start justify-center lg:items-center lg:px-0">
      <div className="text-[#646d80] text-xs flex items-start justify-start font-normal font-['SF Pro'] mb-5">
        Get started with the example below
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3">
        <div className="lg:w-[190px] lg:pl-4 lg:pr-[21px] lg:pt-[15px] lg:pb-[15.40px] h-[50px] pl-[16px] pr-[50px] pt-[19px] pb-[17px] bg-[#f6faff]/30 rounded-2xl border border-[#e5eaf0] justify-start items-center inline-flex">
          <div className="w-[91vw] lg:w-[152px] lg:h-[30px] h-3.5 text-[#646d80] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">
            Visa Renewal process for the Uk
          </div>
        </div>

        <div className="lg:w-[190px] lg:pl-4 lg:pr-[21px] lg:pt-[15px] lg:pb-[15.40px] h-[50px] pl-[16px] pr-[50px] pt-[19px] pb-[17px] bg-[#f6faff]/30 rounded-2xl border border-[#e5eaf0] justify-start items-center inline-flex">
          <div className="w-[91vw] lg:w-[152px] lg:h-[30px] h-3.5 text-[#646d80] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">
            Can I take photographs in public places in Cairo?
          </div>
        </div>

 
        <div className="lg:w-[190px] lg:pl-4 lg:pr-[21px] lg:pt-[15px] lg:pb-[15.40px] h-[50px] pl-[16px] pr-[50px] pt-[19px] pb-[17px] bg-[#f6faff]/30 rounded-2xl border border-[#e5eaf0] justify-start items-center inline-flex">
          <div className="w-[302px] lg:w-[152px] lg:h-[30px] h-3.5 text-[#646d80] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">
            What does the Visa Application process look like?
          </div>
        </div>
      </div>
    </div>
  );
}
