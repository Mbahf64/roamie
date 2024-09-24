import React from "react";
import Link from "next/link";
import Image from "next/image";

const countryData = [
  {
    id: 1,

    text: "Less than 90 Days",
    image: "/Ellipse.svg",
  },
  {
    id: 2,

    text: "90 days to 6 months",
    image: "/Ellipse.svg",
  },
  {
    id: 3,

    text: "6 months to 1 year",
    image: "/Ellipse.svg",
  },
  {
    id: 4,

    text: "1 year to 3 years",
    image: "/Ellipse.svg",
  },
  {
    id: 5,

    text: "More than 3 years",
    image: "/Ellipse.svg",
  },
  {
    id: 6,

    text: "Not sure yet",
    image: "/Ellipse.svg",
  },
];

const CountryImageGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
      {countryData.map((country) => (
        <Link className="" href="/questionaire-4">
          <div
            key={country.id}
            className="relative overflow-hidden rounded-lg cursor-pointer"
          >
            <Image
              className="w-full h-auto object-cover"
              src={country.image}
              width={32}
              height={32}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center ml-8 w-[101.52px]">
              <p className="text-[#646d80] text-xl font-normal text-left">
                {country.text}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountryImageGrid;

//
