import { ChevronRight, House, Import, TagIcon } from "lucide-react";
import React from "react";

const SideBar = () => {
  const menuItems = [
    { icon: <House color="#335CFF" size={20} />, label: "All Notes" },
    { icon: <Import color="#335CFF" size={20} />, label: "Archived Notes" },
  ];

  const tags = [
    "Cooking",
    "Dev",
    "Fitness",
    "Health",
    "Personal",
    "React",
    "Recipes",
    "Shopping",
    "Travel",
    "TypeScript",
  ];

  return (
    <div className="col-span-4">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className="-ml-2 flex w-[240px] cursor-pointer rounded-lg p-2"
        >
          {item.icon}
          <span className="mr-14 ml-4 text-sm">{item.label}</span>
          <ChevronRight color="#ffffff" size={20} className="opacity-0" />
        </button>
      ))}

      <div className="mt-2 w-[240px] border-b-1"></div>
      <p className="mt-2">Tags</p>

      {tags.map((tag, index) => (
        <div
          key={index}
          className="-ml-2 flex place-items-center rounded-lg p-2"
        >
          <TagIcon size={18} />
          <span className="ml-3">{tag}</span>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
