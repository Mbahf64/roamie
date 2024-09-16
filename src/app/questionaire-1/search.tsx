// import React, { useState } from "react";
// import { Search } from "lucide-react";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// const DestinationSearchInput = ({ value, onChange }) => {
//   //   const [isFocused, setIsFocused] = useState(false);

//   //   const handleFocus = () => setIsFocused(true);
//   //   const handleBlur = () => setIsFocused(value !== '');

//   return (
//     <>
//       <div className="responsive-text">
//         <img src="/search.svg" alt="search" className="w-12 h-12" />
//       </div>
//     </>
//   );
// };

// export default DestinationSearchInput;


import React from 'react'

export default function search() {
  return (
    <div className="responsive-text">
    <img src="/search.svg" alt="search" className="w-12 h-12" />
  </div>
  )
}
