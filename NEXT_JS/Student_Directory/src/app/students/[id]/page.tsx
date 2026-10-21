// Dynamic student detail page displaying full profile and academic record
import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "../../../data/students";

// Pre-render static HTML pages for all student profiles at build time (SSG)
export async function generateStaticParams() {
  const params: { id: string }[] = [];
  students.forEach((student, index) => {
    params.push({ id: student.id });
    // Also pre-render simple numeric index so /students/1 works
    params.push({ id: String(index + 1) });
  });
  return params;
}

// Helper function to extract initials from full name
function getInitials(name: string): string {
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

// Helper to get descriptive academic year label
function getStudyYearLabel(year: number): string {
  if (year === 1) return "1st Year (Freshman)";
  if (year === 2) return "2nd Year (Sophomore)";
  if (year === 3) return "3rd Year (Junior)";
  return "4th Year (Senior)";
}

export default async function StudentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the asynchronous route parameters in Next.js
  const { id } = await params;

  // Find student by ID (e.g. "STU-1042", "1042", or index like "1")
  const decodedId = decodeURIComponent(id).toLowerCase();
  const numericIndex = parseInt(decodedId, 10);

  const student =
    students.find(
      (item) =>
        item.id.toLowerCase() === decodedId ||
        item.id.replace("STU-", "").toLowerCase() === decodedId
    ) ||
    (!isNaN(numericIndex) && numericIndex >= 1 && numericIndex <= students.length
      ? students[numericIndex - 1]
      : undefined);

  // If no student exists with this ID, show the custom 404 page
  if (!student) {
    notFound();
  }

  const initials = getInitials(student.name);
  const studyYear = getStudyYearLabel(student.year);
  const standingText = student.standing || `${student.year}th Year Undergraduate`;
  const enrolledTerm = student.enrolledSemester || "Fall 2022";

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      {/* Top breadcrumb navigation */}
      <div className="breadcrumb">
        <Link href="/students" className="card-link">
          Students
        </Link>
        <span>/</span>
        <span>{student.name}</span>
      </div>

      {/* Back to students link */}
      <div>
        <Link href="/students" className="back-link">
          &larr; Back to students
        </Link>
      </div>

      {/* Main student profile card */}
      <div className="profile-card">
        {/* Profile Header: Avatar, Name, and Badges */}
        <div className="profile-header">
          <div className="avatar-large">{initials}</div>
          <div>
            <h1 className="page-title">{student.name}</h1>
            <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
              <span className="student-id">{student.id}</span>
              <span className="badge badge-green">Active Student</span>
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* 2x2 Info Grid */}
        <div className="info-grid">
          <div>
            <p className="info-label">Department</p>
            <p className="info-value">{student.course}</p>
          </div>
          <div>
            <p className="info-label">Study Year</p>
            <p className="info-value">{studyYear}</p>
          </div>
          <div>
            <p className="info-label">Email</p>
            <p className="info-value">
              <a href={`mailto:${student.email}`} className="card-link">
                {student.email}
              </a>
            </p>
          </div>
          <div>
            <p className="info-label">Enrolled &amp; Location</p>
            <p className="info-value">
              {enrolledTerm} &middot; {student.city}
            </p>
          </div>
        </div>

        <hr className="divider" />

        {/* About section */}
        <div style={{ marginBottom: "20px" }}>
          <h2 className="section-title">About</h2>
          <p className="text-muted">{student.about}</p>
        </div>

        {/* Skills list */}
        <div style={{ marginBottom: "20px" }}>
          <p className="info-label">Key Skills &amp; Competencies</p>
          <div className="skills-list">
            {student.skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <hr className="divider" />

        {/* Academic Details & Enrolled Subjects */}
        <div>
          <h2 className="section-title">Academic Details</h2>
          <p className="text-muted" style={{ fontSize: "0.85rem", marginBottom: "12px" }}>
            <strong>Department:</strong> {student.course} &nbsp;|&nbsp;{" "}
            <strong>Standing:</strong> {standingText}
          </p>

          {/* Subjects table */}
          {student.subjects && student.subjects.length > 0 && (
            <div>
              <p className="info-label" style={{ marginBottom: "6px" }}>
                Enrolled Subjects
              </p>
              <div className="subjects-table">
                {student.subjects.map((subject) => (
                  <div key={subject.code} className="subject-row">
                    <span>
                      <strong>{subject.code}:</strong> {subject.title}
                    </span>
                    <span style={{ color: "#64748b" }}>{subject.credits}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* System Record footer info outside card */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.75rem",
          color: "#94a3b8",
          marginTop: "12px",
          padding: "0 4px",
        }}
      >
        <p>
          System Record ID: 0948-{student.course.slice(0, 2).toUpperCase()}-{initials}
        </p>
        <p>Last validated: Oct 24, 2024</p>
      </div>
    </div>
  );
}
