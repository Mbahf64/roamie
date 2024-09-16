import React, { useState } from 'react';
import { Search } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function input({ value, onChange }) {

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(value !== ''); // Keeps focused state if there's input.

  return (


    <>
      <div className="flex relative">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="destination-input md:w-[428px] "
          placeholder="Find your Destination..."
          aria-label="Search for a destination"
        />
        <div className="custom-button">
          <Search className="w-5 h-5 text-[#646d80]" />
        </div>
      </div>
     
     
  
    </>
  );
};


