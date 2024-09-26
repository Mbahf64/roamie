"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Input from "./input";
import CountryImageGrid from "./countryImageGrid";
import Select from "../select";

const countryData = [
  {
    id: 1,
    name: "England",
    flag: "/uk.svg",
    text: "Uk",
    image: "/Ellipse.svg",
  },
  {
    id: 2,
    name: "Rome",
    flag: "/Italy.svg",
    text: "ITALY",
    image: "/Ellipse.svg",
  },
  {
    id: 3,
    name: "Tokyo",
    flag: "/Japan.svg",
    text: "JAPAN",
    image: "/Ellipse.svg",
  },
  {
    id: 4,
    name: "Paris",
    flag: "/Italy.svg",
    text: "FRANCE",
    image: "/Ellipse.svg",
  },
 
];

export default function Page() {  // Changed 'page' to 'Page'
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countryData);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCountries(countryData); // Show all countries when search is empty
    } else {
      const results = countryData.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(results);
    }
  }, [searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main className="sf-pro ">
      <header className="flex justify-between items-center mx-[1.3em] lg:mx-[1em]  mt-9 ">
        <Image
          src="/roamie_logo.svg"
          width={82}
          height={34}
          alt="logo"
          className="fixed"
        />

        <div className="hidden flex-row items-center justify-center fixed right-5 mt-4">
          <span className="text-[#646d80] text-[12px] font-normal pr-2 font-['SF Pro'] leading-[14px]">
            You&#39;re from  {/* Escaped apostrophe */}
          </span>
          <Select />
        </div>
      </header>
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.svg"
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100} // Ensures image quality is high across all screens
        />
      </div>

      <div className="min-h-[88vh] flex flex-col items-center gap-2 justify-end lg:justify-center mx-[1.5em] overflow-hidden -mb-8">
        <button className="bg-[#292d32] px-6 py-4 rounded-[18px] text-white text-xs font-normal flex gap-1 md:hidden mb-1">
          <Link className="flex" href="/">
            <Image className="image" alt="" src="/arrow_back.svg"  width={16}
          height={16} />
            Go back
          </Link>
        </button>

        <div className="lg:mb-[2rem] text-center gap-3 my-[1rem]">
          <p className="text-[#292d32] text-base lg:text-[40px] font-['SF Pro'] mb-4">
            Hey, Micheal!
          </p>
          <p className="w-full text-[#646d80] text-[7vw] lg:text-base font-normal font-['SF Pro'] leading-tight">
          What city are you visiting?
          </p>
        </div>

        <Input value={searchTerm} onChange={handleSearch} />

        {filteredCountries.length > 0 ? (
          <CountryImageGrid countries={filteredCountries} />
        ) : (
          <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-tight">
            No matching cities found.
          </div>
        )}

        <div className="h-5 justify-center items-center gap-[5px] flex mt-[1rem] md:hidden">
          <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-tight">
            Can&#39;t find your City?  {/* Escaped apostrophe */}
          </div>
          <div className="text-[#292d32] text-sm font-normal font-['SF Pro'] underline leading-tight">
            Tell us where it is
          </div>
        </div>
      </div>
    </main>
  );
}
