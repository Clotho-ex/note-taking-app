import { ChevronRight, House, Import, TagIcon } from "lucide-react";
import React from "react";
import useButtonStore from "../../store/ButtonStore";

const SideBar = () => {
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

  // Get section states and toggle function from the store
  const activeSection = useButtonStore((state) => state.activeSection);
  const setActiveSection = useButtonStore((state) => state.setActiveSection);

  return (
    <div className="fixed ml-3 hidden h-full w-[240px] flex-col border-r border-gray-300 lg:flex">
      <button
        onClick={() => setActiveSection("allNotes")}
        className="mt-6 flex w-full cursor-pointer items-center gap-4"
      >
        <House color="#335cff" />
        All Notes
        {activeSection === "allNotes" && <ChevronRight className="ml-[75px]" />}
      </button>
      <button
        onClick={() => setActiveSection("archivedNotes")}
        className="mt-4 flex w-full cursor-pointer items-center gap-4"
      >
        <Import color="#335cff" />
        Archived Notes
        {activeSection === "archivedNotes" && (
          <ChevronRight className="ml-[30px]" />
        )}
      </button>
      <hr className="my-2 border-t border-gray-300" />
      <p className="mt-2">Tags</p>

      {tags.map((tag, index) => (
        <div
          key={index}
          className="flex place-items-center rounded-lg pt-2 pr-2 pb-2"
        >
          <TagIcon size={18} />
          <span className="ml-3">{tag}</span>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
