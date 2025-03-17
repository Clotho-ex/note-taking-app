import React from "react";
import useNoteStore from "../../store/noteStore";

function Result() {
  const activeSection = useNoteStore((state) => state.activeSection);
  const setSelectedNote = useNoteStore((state) => state.setSelectedNote);

  // Active Notes mocks with additional properties (content, isArchived)
  const mockNotes = [
    {
      title: "React Performance Optimization",
      tags: ["Dev", "React"],
      date: "29 Oct 2024",
      content:
        "This note explains React performance optimization techniques like memoization, lazy loading, and code splitting.",
      isArchived: false,
    },
    {
      title: "Japan Travel Planning",
      tags: ["Travel", "Personal"],
      date: "28 Oct 2024",
      content:
        "Plan your Japan trip itinerary, accommodation, and must-see attractions.",
      isArchived: false,
    },
    {
      title: "Favorite Pasta Recipes",
      tags: ["Cooking", "Recipes"],
      date: "27 Oct 2024",
      content:
        "A collection of pasta recipes that range from classic spaghetti to innovative fusions.",
      isArchived: false,
    },
    {
      title: "Weekly Workout Plan",
      tags: ["Dev", "React"],
      date: "25 Oct 2024",
      content:
        "Outline your weekly workout regimen with exercise tips and routines.",
      isArchived: false,
    },
    {
      title: "Meal Prep Ideas",
      tags: ["Cooking", "Health", "Recipes"],
      date: "12 Oct 2024",
      content:
        "Ideas and recipes for meal prep to maintain a healthy lifestyle throughout the week.",
      isArchived: false,
    },
    {
      title: "Reading List",
      tags: ["Personal", "Dev"],
      date: "05 Oct 2024",
      content:
        "Books and articles you plan to read, including summaries and review notes.",
      isArchived: false,
    },
    {
      title: "Fitness Goals 2025",
      tags: ["Fitness", "Personal", "Health"],
      date: "22 Sep 2024",
      content:
        "Set your fitness targets for 2025, including milestones and progress tracking.",
      isArchived: false,
    },
  ];

  // Archived Notes mocks with additional properties
  const archivedNotes = [
    {
      title: "Archived: Old React Patterns",
      tags: ["Dev", "React", "Archived"],
      date: "10 Aug 2024",
      content:
        "This note details old React patterns that are now replaced by more modern practices.",
      isArchived: true,
    },
    {
      title: "Archived: Summer Travel Memories",
      tags: ["Travel", "Personal", "Archived"],
      date: "01 Jul 2024",
      content:
        "A collection of memories and notes from past summer trips, with pictures and anecdotes.",
      isArchived: true,
    },
    {
      title: "Archived: Outdated Pasta Recipe",
      tags: ["Cooking", "Recipes", "Archived"],
      date: "15 Jun 2024",
      content:
        "An old pasta recipe that has been archived in favor of newer, healthier alternatives.",
      isArchived: true,
    },
  ];

  // Set dynamic title based on active section
  const displayTitle =
    activeSection === "archivedNotes"
      ? "Archived Notes"
      : activeSection === "allNotes"
        ? "All Notes"
        : "Dynamic Title";

  // Select notes based on the active section
  const notesToDisplay =
    activeSection === "archivedNotes" ? archivedNotes : mockNotes;

  return (
    <div>
      <h1 className="p-4 text-xl font-semibold">{displayTitle}</h1>
      <div className="mt-[14px] border-b border-gray-300"></div>
      <div className="mx-auto grid w-fit place-self-center border-r border-gray-300 p-3">
        <button className="mt-4 mb-4 cursor-pointer rounded-lg bg-blue-500 px-8 py-2 text-white active:bg-blue-400">
          + Create New Note
        </button>
        <p className="mb-4 text-neutral-500">
          Some descriptive text about whats being shown
        </p>
        <div className="overflow-x-hidden">
          {notesToDisplay.map((note, index) => (
            <div
              key={index}
              className="mb-4 cursor-pointer rounded-lg border-none bg-[#F3F5F8]"
              onClick={() => setSelectedNote(note)}
            >
              <h2 className="p-2 text-lg font-semibold">{note.title}</h2>
              <div className="px-2">
                {note.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="mr-2 rounded-lg bg-[#E0E4EA] px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="p-3">{note.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Result;
