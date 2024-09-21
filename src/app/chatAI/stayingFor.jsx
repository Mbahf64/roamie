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

const stayingFor = () => {
    const [selectedCountry, setSelectedCountry] = useState("Less than 90 Days"); // Set Nigeria as default

    return (
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>

            <SelectTrigger className="w-[150px] text-sm">
                <SelectValue placeholder="Your Country" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="Less than 90 Days">
                    <img className="w-3 h-3 mr-1 inline" src="./timer.svg" alt="" />
                        <span className='ml-1 text-[10px] '>Less than 90 days</span>

                    </SelectItem>

                    <SelectItem value="90 days to 6 months">
                      <img className="w-3 h-3 mr-1 inline" src="./timer.svg" alt="" />
                        <span className='pl-1 text-[10px] '>90 days to 6 month</span>
                    </SelectItem>

                    <SelectItem value="6 months to 1 year">
                       <img className="w-3 h-3 mr-1 inline" src="./timer.svg" alt="" />
                        <span className='pl-1 text-[10px]'>6 months to 1 year</span>
                    </SelectItem>

                    <SelectItem value="1 year to 3 years">
                      <img className="w-3 h-3 mr-1 inline" src="./timer.svg" alt="" />
                        <span className='ml-1 text-[10px]'>1 year to 3 years</span>
                    </SelectItem>

                    <SelectItem value="More than 3 years">
                       <img className="w-3 h-3 mr-1 inline" src="./timer.svg" alt="" />
                        <span className='ml-1 text-[10px]'>More than 3 years</span>
                    </SelectItem>

                    <SelectItem value="Not sure yet">
                       <img className="w-3 h-3 mr-1 inline" src="./timer.svg" alt="" />
                        <span className='ml-1 text-[10px]'>Not sure</span>
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default stayingFor