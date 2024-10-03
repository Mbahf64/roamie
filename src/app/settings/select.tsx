import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Country {
  value: string;
  label: string;
  flag: string;
}

const Country: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    value: "nigeria",
    label: "Nigeria",
    flag: "/Nigeria.svg"
  });
  
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const countries: Country[] = [
    { value: "united-kingdom", label: "UK", flag: "/Nigeria.svg" },
    { value: "japan", label: "Japan", flag: "/Nigeria.svg" },
    { value: "nigeria", label: "Nigeria", flag: "/Nigeria.svg" },
    { value: "usa", label: "USA", flag: "/Nigeria.svg" },
    { value: "ghana", label: "Ghana", flag: "/Nigeria.svg" },
    { value: "spain", label: "Spain", flag: "/Nigeria.svg" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (country: Country): void => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Selected Country Display */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-[#e5eaf0] text-[#292d32] text-sm font-normal font-Galano leading-none flex items-center justify-between cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsOpen(!isOpen);
          }
        }}
      >
        <span className="text-[#292d32] text-sm">
          {selectedCountry.label}
        </span>
        <Image
          src={selectedCountry.flag}
          width={24}
          height={24}
          alt=""
          className="object-contain"
          priority
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border border-[#e5eaf0] rounded-lg shadow-lg z-10">
          {countries.map((country) => (
            <div
              key={country.value}
              onClick={() => handleSelect(country)}
              className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-[#f6faff]"
              role="option"
              aria-selected={selectedCountry.value === country.value}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSelect(country);
                }
              }}
            >
              <span className="text-[#292d32] text-sm font-Galano">
                {country.label}
              </span>
              <Image
                src={country.flag}
                width={24}
                height={24}
                alt=""
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Country;