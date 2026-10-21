// Student card component displaying student summary and link to detail page
import Link from "next/link";
import { Student } from "../types/student";

// Helper function to extract initials from full name
function getInitials(name: string): string {
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

// Helper function for year display text
function getYearText(year: number): string {
  if (year === 1) return "1st Year";
  if (year === 2) return "2nd Year";
  if (year === 3) return "3rd Year";
  return `${year}th Year`;
}

export default function StudentCard({ student }: { student: Student }) {
  const initials = getInitials(student.name);
  const yearText = getYearText(student.year);

  return (
    <div className="student-card">
      <div>
        {/* Top row: Avatar initials and Student ID badge */}
        <div className="card-top">
          <div className="avatar">{initials}</div>
          <span className="student-id">{student.id}</span>
        </div>

        {/* Student Name */}
        <h3 className="student-name">{student.name}</h3>

        {/* Course and Year badge */}
        <div className="card-meta">
          <span className="badge">{student.course}</span>
          <span>{yearText}</span>
        </div>
      </div>

      {/* Card link */}
      <div className="card-footer">
        <Link href={`/students/${student.id}`} className="card-link">
          View profile &rarr;
        </Link>
      </div>
    </div>
  );
}
