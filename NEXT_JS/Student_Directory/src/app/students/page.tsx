// Students directory page listing all students with search and filter
import type { Metadata } from "next";
import { students } from "../../data/students";
import StudentFilter from "../../components/StudentFilter";

export const metadata: Metadata = {
  title: "Students Directory - Campus Directory",
  description: "Browse students and view their profiles at Campus Directory.",
};

export default function StudentsPage() {
  return (
    <div>
      {/* Page Title & Subtitle */}
      <div className="page-header">
        <h1 className="page-title">Students</h1>
        <p className="page-subtitle">Browse students and view their profiles.</p>
      </div>

      {/* Interactive student search and cards list */}
      <StudentFilter students={students} />
    </div>
  );
}
