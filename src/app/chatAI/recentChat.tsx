import React from 'react'
const suggestionsData = [
    {
      id: 1,
      icon: "./messages-.svg",
      text: "How can I stay out of trouble.",
      time: "10 hours ago",
    },
    {
      id: 2,
      icon: "./messages-.svg",
      text: "What is the process for visa renewal?",
      time: "12 hours ago",
    },
    {
      id: 3,
      icon: "./messages-.svg",
      text: "Best places to visit in Japan.",
      time: "14 hours ago",
    },
    {
      id: 4,
      icon: "./messages-.svg",
      text: "Steps to learn programming quickly.",
      time: "1 day ago",
    },
    {
      id: 5,
      icon: "./messages-.svg",
      text: "How to create a business plan?",
      time: "2 days ago",
    },
    {
      id: 6,
      icon: "./messages-.svg",
      text: "How to save money while traveling?",
      time: "3 days ago",
    },
  ];
  
const recentChat = () => {
    return (
        <div className=''>
            
            {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                <div className="w-[90vw] h-[82px] p-9 bg-[#f6faff] rounded-2xl border border-[#e5eaf0] justify-start items-center inline-flex cursor-pointer">
                    <div className="w-[291px] self-stretch flex-col justify-start items-start gap-3 inline-flex">
                        <div className="self-stretch justify-start items-center gap-3 inline-flex">
                            <div className="w-4 h-4 justify-center items-center flex">
                                <img src="./messages-.svg" alt="" />
                            </div>
                            <div className="w-[262px] h-4 text-[#292d32] text-sm font-normal font-['SF Pro'] leading-none">How can I stay out of trouble.</div>
                        </div>
                        <div className="self-stretch text-[#646d80] text-[11px] font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">10 hours ago</div>
                    </div>
                </div>
            </div> */}
<div className="w-[90vw] lg:w-[40vw] 2xl:w-[31vw] mt-9">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-6 2xl:gap-y-5">
        {suggestionsData.map((item) => (
          <div
            key={item.id}
            className="w-[90vw] h-[82px] md:w-[100px] md:h-[82px] lg:w-[185px] lg:h-[150px] p-4 bg-[#f6faff] rounded-2xl border border-[#e5eaf0] flex items-center cursor-pointer"
          >
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="flex items-center gap-3 lg:flex lg:flex-col lg:items-start">
                <div className="w-4 h-4 flex justify-center items-center">
                  <img src={item.icon} alt="icon" />
                </div>
                <div className="text-[#292d32] text-sm font-normal font-['SF Pro'] leading-none">
                  {item.text}
                </div>
              </div>
              <div className="text-[#646d80] text-[11px] font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">
                {item.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
         
        </div>
    )
}

export default recentChat






