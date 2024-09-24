import React, { useState } from "react";
import { Search } from "lucide-react";


export default function input({ value, onChange }) {
 
 

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
          <Search className=" text-[#646d80]" width={20} height={20} />
        </div>
      </div>
    </>
  );
}
