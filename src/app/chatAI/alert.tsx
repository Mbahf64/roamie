import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  {
    id: 7,
    icon: "./messages-.svg",
    text: "How to save money while traveling?",
    time: "3 days ago",
  },
  {
    id: 8,
    icon: "./messages-.svg",
    text: "How to save money while traveling?",
    time: "3 days ago",
  },
  {
    id: 9,
    icon: "./messages-.svg",
    text: "How to save money while traveling?",
    time: "3 days ago",
  },
  {
    id: 9,
    icon: "./messages-.svg",
    text: "How to save money while traveling?",
    time: "3 days ago",
  },
  {
    id: 9,
    icon: "./messages-.svg",
    text: "How to save money while traveling?",
    time: "3 days ago",
  },
  {
    id: 9,
    icon: "./messages-.svg",
    text: "How to save money while traveling?",
    time: "3 days ago",
  },
];

//   const recentChat = () => {
//     const [isGridVisible, setIsGridVisible] = useState(true);

// const toggleGridVisibility = () => {
//   setIsGridVisible(!isGridVisible);
// };
const alert = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="gap-3 flex items-center lg:-mr-[0rem] 2xl:-m-[0rem] cursor-pointer">
          <p className="text-[#646d80] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight">
            View all
          </p>
          <img src="./arrow-right.svg" alt="" />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <ScrollArea className="w-[90vw] lg:w-[43vw] 2xl:w-[31vw] lg:h-full">
          <div className="w-[90vw] lg:w-[43vw] 2xl:w-[31vw] ">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {suggestionsData.map((item) => (
                <div
                  key={item.id}
                  className="w-[43vw] h-[82px] lg:w-[184.8px] 2xl:w-[190px] lg:h-[130px] cursor-pointer p-4 bg-[#f6faff] rounded-2xl border border-[#e5eaf0] justify-start items-center inline-flex"
                >
                  <div className="flex flex-col justify-start items-start gap-3.5 ">
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
        </ScrollArea>

        <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              {/* <AlertDialogAction>Continue</AlertDialogAction> */}
            </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default alert;
