import React from "react";
import { Import } from "lucide-react";
import { Trash2 } from "lucide-react";

const Actions = () => {
  return (
    <>
      <div className="h-full overflow-hidden rounded-lg bg-neutral-100 p-4">
        <div className="flex flex-col gap-4">
          <button className="flex cursor-pointer gap-2 rounded-lg border border-neutral-400 px-2 py-2 transition-colors duration-250 hover:bg-neutral-400 hover:text-white">
            <Import />
            Archive Note
          </button>
          <button className="flex cursor-pointer gap-2 rounded-lg border border-neutral-400 px-2 py-2 transition-colors duration-250 hover:bg-neutral-400 hover:text-white">
            <Trash2 />
            Delete Note
          </button>
        </div>
      </div>
    </>
  );
};

export default Actions;
