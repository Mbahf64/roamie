import React from "react";
import Link from "next/link";

export default function CountryImageGrid({ countries }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3  ">
      {countries.map((country) => (
       <Link
       key={country.id}
       href={{
         pathname: "/questionaire-2",
         query: { country: country.name, text: country.text }
       }}
     >
       <div className="relative overflow-hidden rounded-lg cursor-pointer w">
         <img className="w-full h-auto object-cover" alt={country.name} src={country.image} />
         <div className="absolute inset-0 flex flex-col items-start justify-center ml-8">
           <img className="w-8 h-8 object-cover" alt={country.name} src={country.flag} />
           <h3 className="text-[#292d32] text-2xl font-normal mb-1">{country.name}</h3>
           <p className="text-[#646d80] text-xs font-normal text-center">{country.text}</p>
         </div>
       </div>
     </Link>
      ))}
    </div>
  );
};



// sm:w-[306px] sm:h-[200px] md:w-[362px] md:h-[446px]
