// ============================
// React Coding Task (Advanced)
// ============================
//
// Title: Student Management List — Interview Challenge
//
// Goal:
// Build a fully interactive Student Management component that demonstrates
// advanced list handling in React: dynamic rendering, keys, search, sort,
// add/remove, conditional styling, and summary calculations.
//
// Deliverable:
// A single React component (or small set of components) that satisfies all
// requirements below. Use functional components and hooks (useState, useEffect
// if needed). Tailwind classes are optional — use any styling you prefer.
//
// ---------------------------------------------------------------------------
// REQUIREMENTS (Implement all of these)
//
// 1) Initial Data:
//    Start with this student array in component state:
//      const initialStudents = [
//        { id: 1, name: "Vamseee", course: "React", marks: 85 },
//        { id: 2, name: "Krishna", course: "JavaScript", marks: 70 },
//        { id: 3, name: "Ravindra", course: "Python", marks: 45 },
//        { id: 4, name: "Reddy", course: "NodeJS", marks: 92 },
//        { id: 5, name: "Reddy", course: "CSS", marks: 68 },
//      ];
//    Keep students in state: const [students, setStudents] = useState(initialStudents);
//
// 2) Render List:
//    - Render student cards using students.map(...).
//    - Each card shows: name, course, marks, and two action buttons (Delete, Edit).
//    - Use `key={student.id}` on each rendered item.
//
// 3) Search (real-time):
//    - A text input to search by name (case-insensitive).
//    - Display only matching students as the user types.
//
// 4) Sorting:
//    - Two buttons or a select:
//        a) Sort by Name (A → Z)
//        b) Sort by Marks (High → Low)
//    - Toggling sort should update the rendered list. Keep original data in state.
//
// 5) Add New Student:
//    - Form inputs: name (text), course (text), marks (number).
//    - On submit, validate inputs (name non-empty, marks 0–100).
//    - Add new student with a unique id (generate safely, e.g., timestamp or increment).
//
// 6) Delete Student:
//    - Implement Delete button to remove a student from state.
//
// 7) Edit Student (in-place):
//    - Implement Edit: clicking Edit turns the card into editable inputs (name, course, marks).
//    - Save updates the student in state; Cancel reverts changes.
//
// 8) Conditional Styling (based on marks):
//    - marks >= 80  -> green-ish card
//    - 50 <= marks < 80 -> yellow-ish card
//    - marks < 50 -> red-ish card
//    (Use CSS classes or inline styles; ensure distinction is visible.)
//
// 9) Summary Section:
//    - Show total students currently displayed (after search/filter).
//    - Show overall average marks (compute from the currently displayed list).
//    - Show count of students in each grade band (A: >=80, B:50-79, C:<50).
//
// 10) Accessibility & Keys:
//    - Ensure interactive elements have accessible labels (aria-labels where appropriate).
//    - Keys must be stable and unique (do NOT use array index if items can be reordered).
//
// ---------------------------------------------------------------------------
// EXTRA / BONUS (optional, but good for interview)
// - Persist students to localStorage so page refresh preserves list.
// - Add pagination for long lists (page size 5 or 10).
// - Add multi-column sorting (e.g., by course, then by marks).
// - Add undo for delete (snackbar with Undo).
// - Add CSV export / import of students.
// - Add unit tests for helper functions (e.g., average, sort).
//
// ---------------------------------------------------------------------------
// Starter component skeleton (you should implement the internals):

import React, { useState, useMemo } from "react";

export default function StudentManager() {
  const initialStudents = [
    { id: 1, name: "Vamseee", course: "React", marks: 85 },
    { id: 2, name: "Krishna", course: "JavaScript", marks: 70 },
    { id: 3, name: "Ravindra", course: "Python", marks: 45 },
    { id: 4, name: "Reddy", course: "NodeJS", marks: 92 },
    { id: 5, name: "Reddy", course: "CSS", marks: 68 },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [query, setQuery] = useState("");
  const [sortMode, setSortMode] = useState(null); // "name" | "marks" | null
  const [newStudent, setNewStudent] = useState({ name: "", course: "", marks: "" });

  // TODO:
  // - implement handleSearch, handleSort, handleAdd, handleDelete, handleEdit
  // - compute filteredAndSorted = students filtered by query then sorted by sortMode
  // - compute summary (total, average, grade counts)
  // - render UI: search input, sort buttons, add form, list, summary

  return (
    <div className="student-manager">
      {/* Search */}
      {/* Sort Controls */}
      {/* Add New Student Form */}
      {/* Student Cards (map over filteredAndSorted) */}
      {/* Summary */}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Evaluation Criteria (what interviewer will look for):
// - Correct usage of keys and map()
// - Proper state updates (avoid mutating state directly)
// - Clean component structure (extract child components if needed)
// - Correct filtering, sorting, and calculations
// - Input validation and basic UX (confirmations, cancel edit)
// - Accessibility and stable keys
// - Bonus features implemented cleanly (if any)
//
// ---------------------------------------------------------------------------
// Example test cases to verify manually:
// 1) Search "Reddy" -> only two Reddy cards appear.
// 2) Sort by Marks -> highest marks should appear first.
// 3) Add student with marks 78 -> should appear and affect average.
// 4) Edit a student's marks below 50 -> card style should change to red.
// 5) Delete a student -> list length decreases and summary updates.
//
// ---------------------------------------------------------------------------
// Good luck! Implement the details and paste your solution if you'd like
// feedback or code review.
//
// ============================
// End of Task
// ============================
