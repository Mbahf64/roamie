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

const passportValidity = () => {
    const [selectedCountry, setSelectedCountry] = useState("Not sure yet"); 

    return (
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger className="w-[100px] text-sm">
                <SelectValue placeholder="Your Country" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>

                    <SelectItem value="Less than 90 Days">
                        <FaFlagUsa className="w-5 h-5 mr inline" />
                        <span className='ml-3'>Less than 90 Days</span>
                    </SelectItem>

                    <SelectItem value="90 days to 6 months">
                        <FaCanadianMapleLeaf className="w-5 h-5 mr-2 inline" />
                        <span className='ml-3'>90 days to 6 months</span>
                    </SelectItem>

                    <SelectItem value="6 months to 1 year">
                        <img className="w-5 h-5 mr-5 inline" src="./nigeria.png" alt="" />
                        <span className='ml-3'>6 months to 1 year</span>
                    </SelectItem>

                    <SelectItem value="1 year to 3 years">
                        <FiFlag className="w-5 h-5 mr-2 inline" /> {/* Generic flag icon */}
                        <span className='ml-3'>1 year to 3 years</span>
                    </SelectItem>

                    <SelectItem value="More than 3 years">
                        <FaFlagCheckered className="w-5 h-5 mr-2 inline" />
                        <span className='ml-3'>More than 3 years</span>
                    </SelectItem>

                    <SelectItem value="Not sure yet">
                        <FaFlagCheckered className="w-5 h-5 mr-2 inline" />
                        <span className='ml-3'>Not sure </span>
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default passportValidity