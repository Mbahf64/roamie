import React, { useState } from 'react';
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

const select = () => {
  const [selectedCountry, setSelectedCountry] = useState("nigeria"); // Set Nigeria as default

  return (
      <Select value={selectedCountry} onValueChange={setSelectedCountry}>
      <SelectTrigger className="w-[100px] text-sm">
        <SelectValue placeholder="Your Country" />
      </SelectTrigger>
      <SelectContent>
      <SelectGroup>
  
  <SelectItem value="UK">
  <img className="w-5 h-5 mr-5 inline" src="./UK_01.svg" alt="" />
    <span className='ml-3'> Uk</span>
  </SelectItem>

  <SelectItem value="canada">
    <FaCanadianMapleLeaf className="w-5 h-5 mr-2 inline" />
     <span className='ml-3'>Canada</span>
  </SelectItem>

  <SelectItem value="nigeria">
    <img className="w-5 h-5 mr-5 inline" src="./nigeria.png" alt="" />
     <span className='ml-3'>Nigeria</span>
  </SelectItem>

  <SelectItem value="germany">
    <FiFlag className="w-5 h-5 mr-2 inline" /> {/* Generic flag icon */}
         <span className='ml-3'>Germany</span>
  </SelectItem>

  <SelectItem value="france">
    <FaFlagCheckered className="w-5 h-5 mr-2 inline" />
     <span className='ml-3'>France</span>
  </SelectItem>
</SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default select