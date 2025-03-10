import React, { useState } from "react";

function Result({ className }) {
  const [title, setTitle] = useState("Dynamic Title");
  const description = "All Notes";

  const mockNotes = [
    {
      title: "React Performance Optimization",
      tags: ["dev", "react"],
      date: "29 Oct 2024",
    },
    {
      title: "Japan Travel Planning",
      tags: ["Travel", "Personal"],
      date: "28 Oct 2024",
    },
    {
      title: "Favorite Pasta Recipes  ",
      tags: ["Cooking", "Recipes"],
      date: "27 Oct 2024",
    },
    {
      title: "Weekly Workout Plan",
      tags: ["Dev", "React"],
      date: "25 Oct 2024",
    },
    {
      title: "Meal Prep Ideas  ",
      tags: ["Cooking", "Health", "Recipes"],
      date: "12 Oct 2024",
    },
    {
      title: "Reading List",
      tags: ["Personal", "Dev"],
      date: "05 Oct 2024",
    },
    {
      title: "Fitness Goals 2025  ",
      tags: ["Fitness", "Personal", "Health"],
      date: "22 Sep 2024",
    },
  ];

  return (
    <div className={className}>
      <h1 className="p-4 text-xl font-semibold">{title}</h1>
      <div className="mt-[14px] border-b border-gray-300"></div>
      <div className="mx-auto grid w-fit place-self-center border-r border-gray-300 p-3">
        <button className="mt-4 mb-4 cursor-pointer rounded-lg bg-blue-500 px-8 py-2 text-white active:bg-blue-400">
          + Create New Note
        </button>
        <p className="mb-4">{description}</p>
        <div className="overflow-x-hidden">
          {mockNotes.map((note, index) => (
            <div
              key={index}
              className="mb-4 rounded-lg border-none bg-[#F3F5F8]"
            >
              {/* Title with 12px padding on all sides */}
              <h2 className="p-2 text-lg font-semibold">{note.title}</h2>

              {/* Tags with exactly 12px below title (no extra space) */}
              <div className="px-3">
                {note.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="mr-2 rounded-lg bg-[#E0E4EA] px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Date with exactly 12px below tags and 12px above bottom border */}
              <p className="p-3">{note.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Result;
