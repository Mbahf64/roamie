import React, { useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
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
            <Image
              className=" mr-1 inline"
              src="/nigeria.png"
              width={12}
              height={12}
              alt=""
            />
            <span className="ml-1 text-[10px]">UK</span>
          </SelectItem>

          <SelectItem value="japan">
            <Image
              className=" mr-1 inline"
              src="/nigeria.png"
              width={12}
              height={12}
              alt=""
            />
            <span className="ml-1 text-[10px] ">Japan</span>
          </SelectItem>

          <SelectItem value="nigeria">
            <Image
              className=" mr-1 inline"
              src="/nigeria.png"
              width={12}
              height={12}
              alt=""
            />
            <span className="ml-1 text-[10px] ">Nigeria</span>
          </SelectItem>

          <SelectItem value="usa">
            <Image
              className=" mr-1 inline"
              src="/nigeria.png"
              width={12}
              height={12}
              alt=""
            />
            <span className="ml-1 text-[10px] ">USA</span>
          </SelectItem>

          <SelectItem value="ghana">
            <Image
              className=" mr-1 inline"
              src="/nigeria.png"
              width={12}
              height={12}
              alt=""
            />
            <span className="ml-1 text-[10px] ">Ghana</span>
          </SelectItem>

          <SelectItem value="spain">
            <Image
              className=" mr-1 inline"
              src="/nigeria.png"
              width={12}
              height={12}
              alt=""
            />
            <span className="ml-1 text-[10px]">Spain</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default select;
