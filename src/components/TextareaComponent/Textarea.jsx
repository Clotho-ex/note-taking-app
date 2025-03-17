import React from "react";
import useNoteStore from "../../store/noteStore";

const Textarea = () => {
  const selectedNote = useNoteStore((state) => state.selectedNote);

  return (
    <>
      <div className="mb-2 border-b border-gray-300 px-4">
        <h1 className="text-2xl font-bold">
          {selectedNote ? selectedNote.title : "Title of the Note"}
        </h1>
        <p className="py-2">
          {selectedNote ? selectedNote.tags.join(", ") : "Tags"}
        </p>
        <p className="py-2">
          {selectedNote
            ? selectedNote.isArchived
              ? "Archived"
              : "Active"
            : "Status"}
        </p>
        <p className="py-2">
          {selectedNote
            ? `Last Edited: ${selectedNote.date}`
            : "Last Edited: Now"}
        </p>
      </div>
      <div className="mb-2 border-b border-gray-300 py-2">
        <textarea
          autoFocus
          defaultValue={selectedNote ? selectedNote.content : ""}
          className="w-full overflow-x-scroll lg:h-[460px] 2xl:h-[570px]"
        />
      </div>
      <div className="flex gap-4 py-1">
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
