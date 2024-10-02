import React, { useState } from 'react';
import Image from "next/image";Image


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const StayingFor = () => {
    const [selectedCountry, setSelectedCountry] = useState("Less than 90 Days"); // Set Nigeria as default

    return (
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>

            <SelectTrigger className="w-[150px] text-sm">
                <SelectValue placeholder="Your Country" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="Less than 90 Days">
                    <Image className="w-3 h-3 mr-1 inline" src="./timer.svg" alt=""  width={12}
              height={12}/>
                        <span className='ml-1 text-[10px] '>Less than 90 days</span>

                    </SelectItem>

                    <SelectItem value="90 days to 6 months">
                      <Image className="w-3 h-3 mr-1 inline" src="./timer.svg" alt=""  width={12}
              height={12}/>
                        <span className='ml-0.5 text-[10px] '>90 days to 6 month</span>
                    </SelectItem>

                    <SelectItem value="6 months to 1 year">
                      <Image className="w-3 h-3 mr-1 inline" src="./timer.svg" alt=""  width={12}
              height={12}/>
                        <span className='ml-1 text-[10px]'>6 months to 1 year</span>
                    </SelectItem>

                    <SelectItem value="1 year to 3 years">
                     <Image className="w-3 h-3 mr-1 inline" src="./timer.svg" alt=""  width={12}
              height={12}/>
                        <span className='ml-1 text-[10px]'>1 year to 3 years</span>
                    </SelectItem>

                    <SelectItem value="More than 3 years">
                       <Image className="w-3 h-3 mr-1 inline" src="./timer.svg" alt=""  width={12}
              height={12}/>
                        <span className='ml-1 text-[10px]'>More than 3 years</span>
                    </SelectItem>

                    <SelectItem value="Not sure yet">
                      <Image className="w-3 h-3 mr-1 inline" src="./timer.svg" alt=""  width={12}
              height={12}/>
                        <span className='ml-1 text-[10px]'>Not sure</span>
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default StayingFor