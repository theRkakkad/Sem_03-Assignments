// Client component for filtering students by name and department
"use client";

import { useState } from "react";
import { Student } from "../types/student";
import StudentCard from "./StudentCard";

export default function StudentFilter({ students }: { students: Student[] }) {
  // Search query text state
  const [search, setSearch] = useState("");
  // Selected department filter state
  const [department, setDepartment] = useState("All");

  // Filter students based on name and selected course
  const filteredStudents = students.filter((student) => {
    const matchesName = student.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesDepartment =
      department === "All" || student.course === department;
    return matchesName && matchesDepartment;
  });

  return (
    <div>
      {/* Search input and department filter bar */}
      <div className="filter-bar">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search students by name..."
          className="search-input"
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="filter-select"
        >
          <option value="All">All departments</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Design">Design</option>
          <option value="Business">Business</option>
        </select>
      </div>

      {/* Grid of students */}
      {filteredStudents.length > 0 ? (
        <div className="student-grid">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <div className="loading-box">
          <p className="text-muted">No students found matching your criteria.</p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setDepartment("All");
            }}
            className="btn btn-secondary"
            style={{ marginTop: "12px" }}
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Counter footer */}
      <div style={{ marginTop: "20px", paddingTop: "14px", borderTop: "1px solid #e2e8f0", fontSize: "0.85rem", color: "#64748b" }}>
        Showing {filteredStudents.length} of {students.length} students
      </div>
    </div>
  );
}
