import React from "react";

const Textarea = () => {
  return (
    <>
      <div className="mb-2 border-b border-gray-300 px-4">
        <h1 className="text-xl font-semibold">Title of the Note</h1>
        <p className="py-2">Tags</p>
        <p className="py-2">Status</p>
        <p className="py-2">Last Edited: Now</p>
      </div>
      <div className="mb-2 border-b border-gray-300 py-2">
        <textarea
          autoFocus
          className="w-full overflow-x-scroll lg:h-[430px] 2xl:h-[540px]"
        />
      </div>
      <div className=" flex gap-4 py-2">
        <button className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white">
          Save Note
        </button>
        <button className="cursor-pointer rounded-lg bg-neutral-200 px-4 py-2 text-black">
          Cancel
        </button>
      </div>
    </>
  );
};

export default Textarea;
