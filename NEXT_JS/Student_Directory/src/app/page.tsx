// Home page introducing the Campus Directory application
import Link from "next/link";
import { students } from "../data/students";
import StudentCard from "../components/StudentCard";

export default function HomePage() {
  // Take first 3 students as quick featured preview on home page
  const featuredStudents = students.slice(0, 3);

  return (
    <div>
      {/* Hero section */}
      <section className="hero-box">
        <h1 className="hero-title">Welcome to Campus Directory</h1>
        <p className="hero-subtitle">
          Search, explore, and view verified student profiles, academic standings,
          and enrolled subjects across campus departments.
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/students" className="btn btn-primary">
            Browse All Students &rarr;
          </Link>
          <Link href="/departments" className="btn btn-secondary">
            View Departments
          </Link>
        </div>

        {/* Quick stats row */}
        <div className="stats-row">
          <div className="stat-card">
            <p className="stat-number">{students.length}</p>
            <p className="stat-label">Active Students</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">3</p>
            <p className="stat-label">Departments</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">100%</p>
            <p className="stat-label">Verified Data</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">App Router</p>
            <p className="stat-label">Next.js &amp; TS</p>
          </div>
        </div>
      </section>

      {/* Featured preview section */}
      <section style={{ marginBottom: "32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <div>
            <h2 className="section-title">Featured Profiles</h2>
            <p className="text-muted" style={{ fontSize: "0.85rem" }}>
              Quick preview of students currently registered in the directory.
            </p>
          </div>
          <Link href="/students" className="card-link">
            See all {students.length} students &rarr;
          </Link>
        </div>

        <div className="student-grid">
          {featuredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="profile-card">
        <h2 className="section-title">About Campus Directory</h2>
        <p className="text-muted">
          This project is built as a clean, beginner-friendly Next.js App Router application in TypeScript. It demonstrates core Next.js principles including Server Components, dynamic routes (`/students/[id]`), custom 404 (`not-found.tsx`), loading states (`loading.tsx`), and error boundaries (`error.tsx`), all styled with simple, standard CSS.
        </p>
      </section>
    </div>
  );
}
