import React from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const reason = [
  { id: 1, name: "Tourism", text: "Tourist Visa", image: "/Ellipse(b).svg" },
  { id: 2, name: "Business", text: "Business Visa", image: "/Ellipse(b).svg" },
  { id: 3, name: "Work", text: "Work Visa/Permit", image: "/Ellipse(b).svg" },
  { id: 4, name: "Investor", text: "Investor Visa", image: "/Ellipse(b).svg" },
  { id: 5, name: "Dig. Normad", text: "Normad Visa", image: "/Ellipse(b).svg" },
  { id: 6, name: "School", text: "Student Visa", image: "/Ellipse(b).svg" },
];

const CountryImageGrid = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const country = searchParams.get("country");
  const text = searchParams.get("text");
  const handleNextClick = () => {
    // Pass country and text as query params when navigating to Questionnaire 3
    router.push(`/questionaire-3?country=${country}&text=${text}`);
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
      {reason.map((country) => (
        <div
          key={country.id}
          className="relative overflow-hidden rounded-lg cursor-pointer"
          onClick={handleNextClick}
        >
          <Image
            className="w-full h-auto object-cover"
            alt={country.name}
            src={country.image}
           width={100}
            height={100} 
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center ml-6 ">
            <h3 className="text-[#292d32] text-2xl font-normal mb-1">
              {country.name}
            </h3>
            <p className="text-[#646d80] text-xs font-normal text-center">
              {country.text}
            </p>
          </div>
          
        </div>
      ))}



    </div>
  );
};

export default CountryImageGrid;

