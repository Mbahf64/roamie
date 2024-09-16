"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Input from "./input";
import Search from "./search";
import CountryImageGrid from "./countryImageGrid";

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
    flag: "/italy.svg",
    text: "ITALY",
    image: "/Ellipse.svg",
  },
  {
    id: 3,
    name: "Tokyo",
    flag: "/japan.svg",
    text: "JAPAN",
    image: "/Ellipse.svg",
  },
  {
    id: 4,
    name: "Paris",
    flag: "/italy.svg",
    text: "FRANCE",
    image: "/Ellipse.svg",
  },
];

export default function page() {
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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    // <main className="sf-pro my-10">
    //   <div className="fixed inset-0 -z-10">
    //     <Image
    //       src="/background.svg"
    //       alt="background"
    //       layout="fill"
    //       objectFit="cover"
    //     />
    //   </div>

    //   <div className="min-h-[88vh] flex flex-col items-center gap-3 justify-end lg:justify-center mx-[1.5em] overflow-hidden -mb-8">
    //     <button className="bg-[#292d32] px-6 py-4  rounded-[18px] text-white text-xs font-normal flex gap-1 md:hidden mb-1">
    //       <Link className="flex" href="/">
    //         <img className="image" alt="" src="/arrow_back.svg" />
    //         Go back
    //       </Link>
    //     </button>
    //     <div className="lg:mb-[4rem] text-center gap-2 my-[1rem]">
    //       <p className="text-[#292d32] text-base lg:text-[40px] font-['SF Pro']">
    //         Hey, Micheal!
    //       </p>
    //       <p className="w-[] text-[#646d80] text-[25px] lg:text-base font-normal font-['SF Pro'] leading-tight">
    //         What City are you Visiting?
    //       </p>
    //     </div>

    //     {/* <Search /> */}

    //     <Input value={searchTerm} onChange={handleSearch} />
    //     {filteredCountries.length > 0 ? (
    //       <CountryImageGrid countries={filteredCountries} />
    //     ) : (
    //       <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-tight">
    //         No matching cities found.
    //       </div>
    //     )}

    //     <div className="h-5 justify-center items-center gap-[5px] flex my-[2rem] md:hidden">
    //       <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-tight">
    //         Can't find your City?
    //       </div>
    //       <div className="text-[#292d32] text-sm font-normal font-['SF Pro'] underline leading-tight">
    //         Tell us where it is
    //       </div>
    //     </div>
    //   </div>
    // </main>

    <main className="sf-pro my-10">
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
            <img className="image" alt="" src="/arrow_back.svg" />
            Go back
          </Link>
        </button>

        <div className="lg:mb-[2rem] text-center gap-3 my-[1rem]">
          <p className="text-[#292d32] text-base lg:text-[40px] font-['SF Pro'] mb-4">
            Hey, Micheal!
          </p>
          <p className="w-full text-[#646d80] text-[30px] lg:text-base font-normal font-['SF Pro'] leading-tight">
            What City are you planning to visit?
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
            Can't find your City?
          </div>
          <div className="text-[#292d32] text-sm font-normal font-['SF Pro'] underline leading-tight">
            Tell us where it is
          </div>
        </div>
      </div>
    </main>
  );
}
