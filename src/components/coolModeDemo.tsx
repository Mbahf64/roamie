"use client"
//import { Button } from "@/components/ui/button";
import { CoolMode } from "./magicui/cool-mode";

const CoolModeDemo = () => { 
  return (
    <div className="relative justify-center">
      <CoolMode>
        <span className="text-white text-xs font-normal h-11 px-6 py-3 bg-[#292d32] rounded-[18px] flex-col justify-start items-start gap-2 inline-flex font-sf-pro">Start Conversation</span>
      </CoolMode>
    </div>
  );
}

export default CoolModeDemo;