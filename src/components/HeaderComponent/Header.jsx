import { Settings } from "lucide-react";
import { Search } from "lucide-react";
import React from "react";

const Logo = ({ className }) => {
  return (
    <>
      <div className={`flex justify-between ${className}`}>
        <div className="hidden max-w-md items-center gap-6 lg:flex">
          <div className="relative">
            <label className="relative flex items-center">
              <Search className="absolute left-3 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search your notes..."
                className="rounded-lg border bg-white py-2 pr-4 pl-10 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </label>
          </div>
          <button className="cursor-pointer">
            <Settings className="mr-4" size={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Logo;
