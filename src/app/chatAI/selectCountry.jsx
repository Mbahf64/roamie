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

const selectCountry = () => {
    const [selectedCountry, setSelectedCountry] = useState("United kingdom"); // Set Nigeria as default

    return (
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>

            <SelectTrigger className="w-[150px] text-sm">
                <SelectValue placeholder="Your Country" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="United kingdom" >
                        <img className="w-3 h-3 mr-1 inline" src="./nigeria.png" alt="" />
                        <span className='ml-1 text-[10px]'>United kingdom</span>
                    </SelectItem>

                    <SelectItem value="90 days to 6 months">
                        <img className="w-3 h-3 mr-1 inline" src="./nigeria.png" alt="" />
                        <span className='ml-1 text-[10px] '>Japan</span>
                    </SelectItem>

                    <SelectItem value="6 months to 1 year">
                        <img className="w-3 h-3 mr-1 inline" src="./nigeria.png" alt="" />
                        <span className='ml-1 text-[10px] '>Nigeria</span>
                    </SelectItem>

                    <SelectItem value="1 year to 3 years">
                        <img className="w-3 h-3 mr-1 inline" src="./nigeria.png" alt="" />
                        <span className='ml-1 text-[10px] '>USA</span>
                    </SelectItem>

                    <SelectItem value="More than 3 years">
                        <img className="w-3 h-3 mr-1 inline" src="./nigeria.png" alt="" />
                        <span className='ml-1 text-[10px] '>Ghana</span>
                    </SelectItem>

                    <SelectItem value="Not sure yet">
                        <img className="w-3 h-3 mr-1 inline" src="./nigeria.png" alt="" />
                        <span className='ml-1 text-[10px]'>Spain</span>
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default selectCountry