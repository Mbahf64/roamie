import React from "react";
import { Search } from "lucide-react";

// Define the props interface
interface InputProps {
  value: string; // value is a string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // onChange is a function
}

export default function Input({ value, onChange }: InputProps) {
  return (
    <div className="flex relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="destination-input md:w-[428px]"
        placeholder="Find your Destination..."
        aria-label="Search for a destination"
      />
      <div className="custom-button">
        <Search className="text-[#646d80]" width={20} height={20} />
      </div>
    </div>
  );
}
