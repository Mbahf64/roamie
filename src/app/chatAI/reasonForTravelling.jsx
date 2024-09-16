
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

const reasonForTravelling = () => {
    const [selectedCountry, setSelectedCountry] = useState("Tourism"); // Set Nigeria as default

    return (
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
      <SelectTrigger className="w-[100px] text-sm">
        <SelectValue placeholder="Your Country" />
      </SelectTrigger>
      <SelectContent>
      <SelectGroup>
  
  <SelectItem value="Tourism">
    <FaFlagUsa className="w-5 h-5 mr inline" />
    <span className='ml-3'>Tourism</span>
  </SelectItem>

  <SelectItem value="Business">
    <FaCanadianMapleLeaf className="w-5 h-5 mr-2 inline" />
     <span className='ml-3'>Business</span>
  </SelectItem>

  <SelectItem value="Work">
    <FaCanadianMapleLeaf className="w-5 h-5 mr-2 inline" />
     <span className='ml-3'>Work</span>
  </SelectItem>

  <SelectItem value="Investor">
    <FiFlag className="w-5 h-5 mr-2 inline" /> {/* Generic flag icon */}
         <span className='ml-3'>Investor</span>
  </SelectItem>

  <SelectItem value="Dig. Normad">
    <FaFlagCheckered className="w-5 h-5 mr-2 inline" />
     <span className='ml-3'>Dig. Normad</span>
  </SelectItem>

  <SelectItem value="School">
    <FaFlagCheckered className="w-5 h-5 mr-2 inline" />
     <span className='ml-3'>School</span>
  </SelectItem>
</SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default reasonForTravelling