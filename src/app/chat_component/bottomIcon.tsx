import React from "react";
import Image from "next/image";

const BottomIcon = () => {
  return (
    <div className="fixed lg:flex flex-col items-center bottom-[2rem] left-0 ml-[1em] z-50 hidden">
      <div className="mb-4">
        <Image
          src="./sidebar-right.svg"
          alt="sidebar-right"
          width={24}
          height={24}
        />
      </div>
      <div className="relative inline-block">
        <Image
          src="./user-bg.svg"
          width={64}
          height={64}
          alt="bg"
          className="block w-[40px] h-[40px]"
        />
        <Image
          src="/avatar.png"
          width={30}
          height={30}
          alt="user"
          className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        />
      </div>
    </div>
  );
};

export default BottomIcon;

<Image
  className="w-3 h-3 mr-1 inline"
  src="./timer.svg"
  alt=""
  width={12}
  height={12}
/>;
