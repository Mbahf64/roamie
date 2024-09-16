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
            <SelectTrigger className="w-[100px] text-sm">
                <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>

                    <SelectItem value="United kingdom">
                        <img className="w-5 h-5 mr-5 inline" src="./UK_01.svg" alt="" />
                        <span className='ml-3'>United kingdom</span>
                    </SelectItem>

                    <SelectItem value="Rome">
                        <FaCanadianMapleLeaf className="w-5 h-5 mr-2 inline" />
                        <span className='ml-3'>Rome</span>
                    </SelectItem>

                    <SelectItem value="Nigeria">
                        <img className="w-5 h-5 mr-5 inline" src="./nigeria.png" alt="" />
                        <span className='ml-3'>Nigeria</span>
                    </SelectItem>

                    <SelectItem value="Tokyo">
                        <FiFlag className="w-5 h-5 mr-2 inline" /> {/* Generic flag icon */}
                        <span className='ml-3'>Tokyo</span>
                    </SelectItem>

                    <SelectItem value="Paris">
                        <FaFlagCheckered className="w-5 h-5 mr-2 inline" />
                        <span className='ml-3'>Paris</span>
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default selectCountry