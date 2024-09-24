
import React, { useState } from 'react';
import Image from "next/image";Image
import { FiFlag } from 'react-icons/fi'; // Import flag icons (or other icons based on preference)
import { FaFlagUsa, FaFlag, FaCanadianMapleLeaf, FaFlagCheckered } from 'react-icons/fa'; // Example for other country flags

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const reasonForTravelling = () => {
  const [selectedCountry, setSelectedCountry] = useState("Tourism"); // Set Nigeria as default

  return (
    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
      <SelectTrigger className="w-[150px] text-sm">
        <SelectValue placeholder="Your Country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>

          <SelectItem value="Tourism">
            <Image className="w-3 h-3 mr-1 inline" src="./brush.svg" alt=""  width={12}
              height={12}/>
            <span className='ml-1 text-[10px] '>Tourism</span>
          </SelectItem>

          <SelectItem value="Business">
            <Image className="w-3 h-3 mr-1 inline" src="./brush.svg" alt=""  width={12}
              height={12}/>
            <span className='ml-1 text-[10px] '>Business</span>
          </SelectItem>

          <SelectItem value="Work">
            <Image className="w-3 h-3 mr-1 inline" src="./brush.svg" alt=""  width={12}
              height={12}/>
            <span className='ml-1 text-[10px] '>Work</span>
          </SelectItem>

          <SelectItem value="Investor">
            <Image className="w-3 h-3 mr-1 inline" src="./brush.svg" alt=""  width={12}
              height={12}/>
            <span className='ml-1 text-[10px] '>Investor</span>
          </SelectItem>

          <SelectItem value="Dig. Normad">
            <Image className="w-3 h-3 mr-1 inline" src="./brush.svg" alt=""  width={12}
              height={12}/>
            <span className='ml-1 text-[10px] '>Dig. Normad</span>
          </SelectItem>

          <SelectItem value="School">
            <Image className="w-3 h-3 mr-1 inline" src="./brush.svg" alt=""  width={12}
              height={12}/>
            <span className='ml-1 text-[10px]'>School</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default reasonForTravelling