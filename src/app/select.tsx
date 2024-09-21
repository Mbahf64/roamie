import React, { useState } from "react";
import { FiFlag } from "react-icons/fi"; // Import flag icons (or other icons based on preference)
import {
  FaFlagUsa,
  FaFlag,
  FaCanadianMapleLeaf,
  FaFlagCheckered,
} from "react-icons/fa"; // Example for other country flags

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const select = () => {
  const [selectedCountry, setSelectedCountry] = useState("nigeria"); // Set Nigeria as default

  return (
    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
      <SelectTrigger className="w-[100px] text-sm">
        <SelectValue placeholder="Your Country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="United kingdom">
            <img className="w-3 h-3 mr-1 inline" src="./nigeria.png" alt="" />
            <span className="ml-1 text-[10px]">UK</span>
          </SelectItem>

          <SelectItem value="japan">
            <img className="w-3 h-3 mr-1 inline" src="./nigeria.png" alt="" />
            <span className="ml-1 text-[10px] ">Japan</span>
          </SelectItem>

          <SelectItem value="nigeria">
            <img className="w-3 h-3 mr-1 inline" src="./nigeria.png" alt="" />
            <span className="ml-1 text-[10px] ">Nigeria</span>
          </SelectItem>

          <SelectItem value="usa">
            <img className="w-3 h-3 mr-1 inline" src="./nigeria.png" alt="" />
            <span className="ml-1 text-[10px] ">USA</span>
          </SelectItem>

          <SelectItem value="ghana">
            <img className="w-3 h-3 mr-1 inline" src="./nigeria.png" alt="" />
            <span className="ml-1 text-[10px] ">Ghana</span>
          </SelectItem>

          <SelectItem value="spain">
            <img className="w-3 h-3 mr-1 inline" src="./nigeria.png" alt="" />
            <span className="ml-1 text-[10px]">Spain</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default select;
