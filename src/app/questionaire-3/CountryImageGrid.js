// import React from "react";
// import Link from "next/link";

// const countryData = [
//   {
//     id: 1,
//     name: "England",
//     flag: "/uk.svg",
//     text: "UNITED KINGDOM",
//     image: "/Ellipse.svg",
//   },
//   {
//     id: 2,
//     name: "Rome",
//     flag: "/italy.svg",
//     text: "ITALY",
//     image: "/Ellipse.svg",
//   },
//   {
//     id: 3,
//     name: "Tokyo",
//     flag: "/japan.svg",
//     text: "JAPAN",
//     image: "/Ellipse.svg",
//   },
//   {
//     id: 4,
//     name: "Paris",
//     flag: "/italy.svg",
//     text: "FRANCE",
//     image: "/Ellipse.svg",
//   },
// ];

// const CountryImageGrid = () => {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
//       {countryData.map((country) => (
//         <Link className="" href="/questionaire-2">
//           <div
//             key={country.id}
//             className="relative overflow-hidden rounded-lg cursor-pointer"
//           >
//             <img
//               className="w-full h-auto object-cover"
//               alt={country.name}
//               src={country.image}
//             />
//             <div className="absolute inset-0 flex flex-col items-start justify-center ml-8 ">
//               <img
//                 className="w-8 h-8 object-cover"
//                 alt={country.name}
//                 src={country.flag}
//               />
//               <h3 className="text-[#292d32] text-2xl font-normal mb-1">
//                 {country.name}
//               </h3>
//               <p className="text-[#646d80] text-xs font-normal text-center">
//                 {country.text}
//               </p>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default CountryImageGrid;

// //

import React from "react";
import Link from "next/link";

const CountryImageGrid = ({ countries }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {countries.map((country) => (
       <Link
       key={country.id}
       href={{
         pathname: "/questionaire-2",
         query: { country: country.name, text: country.text }
       }}
     >
       <div className="relative overflow-hidden rounded-lg cursor-pointer">
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

export default CountryImageGrid;


