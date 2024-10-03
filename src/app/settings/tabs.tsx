import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Select from "./select"

type TabType = "general" | "account";

interface FormData {
  fullName: string;
  whatDoYouDo: string;
  email: string;
  password: string;
}

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("general");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    whatDoYouDo: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setIsDropdownOpen(false);
  };

  // className="text-[#292d32] text-xs font-normal font-['SF Pro'] leading-[14.40px] tracking-tight"
  return (
    <div className="w-[90vw] lg:w-full  lg:flex h-full items-start justify-start">
      {/* Side Navigation */}
      {/* Mobile Dropdown */}
      <div className="relative md:hidden ">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-[90vw] flex items-center justify-between h-14 px-5 pt-[18px] pb-4 font-semibold bg-white rounded-2xl  border border-[#e5eaf0] "
        >
          <span className="font-Galano">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </span>
          <ChevronDown
            className={`transform transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0  mt-1 bg-white border rounded-lg shadow-lg z-10 w-[90vw]">
            <button
              className={`w-full text-left py-2 px-4 font-Galano font-normal ${
                activeTab === "general"
                  ? " text-[#292d32] "
                  : "hover:bg-gray-50"
              }`}
              onClick={() => handleTabChange("general")}
            >
              General
            </button>
            <button
              className={`w-full text-left py-2 px-4 font-Galano font-normal ${
                activeTab === "account"
                  ? " text-[#292d32]"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => handleTabChange("account")}
            >
              Account
            </button>
          </div>
        )}
      </div>

      {/* Desktop Side Navigation */}
      <div className="hidden md:block w-1/4 p-4">
        <button
          className={`w-full text-left py-2 px-4 rounded-lg mb-2 font-Galano ${
            activeTab === "general"
              ? "bg-[#f6faff] text-[#292d32] font-semibold"
              : ""
          }`}
          onClick={() => setActiveTab("general")}
        >
          General
        </button>
        <button
          className={`w-full text-left py-2 px-4 rounded-lg font-Galano ${
            activeTab === "account"
              ? "bg-[#f6faff] text-[#292d32] font-semibold"
              : ""
          }`}
          onClick={() => setActiveTab("account")}
        >
          Account
        </button>
      </div>

      {/* Form Content */}
      <div className="w-[90vw] lg:w-3/4 lg:pl-6 mt-7 lg:mt-0">
        <form onSubmit={handleSubmit}>
          {activeTab === "general" && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="text-[#292d32] text-sm font-medium font-Satoshi leading-none"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-[#e5eaf0] text-[#292d32] text-sm font-normal font-Galano leading-none"
                  placeholder="Fullname"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="whatDoYouDo"
                  className="text-[#292d32] text-sm font-medium font-Satoshi leading-none"
                >
                  What should we call you?
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.whatDoYouDo}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-[#e5eaf0] text-[#292d32] text-sm font-normal font-Galano leading-none"
                  placeholder="What should we call you?"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="emailaddress"
                  className="text-[#292d32] text-sm font-medium font-Satoshi leading-none"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.whatDoYouDo}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-[#e5eaf0] text-[#292d32] text-sm font-normal font-Galano leading-none"
                  placeholder="Email Address"
                />
              </div>
            </>
          )}

          {activeTab === "account" && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="whatDoYouDo"
                  className="text-[#292d32] text-sm font-medium font-Satoshi leading-none"
                >
                  Nationality
                </label>
                <Select />
              </div>




              <div className="mb-4">
                <label
                  htmlFor="emailaddress"
                  className="text-[#292d32] text-sm font-medium font-Satoshi leading-none"
                >
                  Residence
                </label>
                   <Select />
              </div>
            </>
          )}
          <div className="w-full flex items-end justify-end">
            <button
              type="submit"
              className="h-[41px] px-6 py-3 bg-[#292d32] rounded-[99px] border border-[#e5eaf0] transition duration-300"
            >
              <div className="text-white text-sm font-normal font-['Galano Grotesque'] leading-none">
                Save Changes
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tabs;
