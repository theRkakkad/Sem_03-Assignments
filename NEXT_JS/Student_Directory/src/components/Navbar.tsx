// Navigation bar component with brand logo and main site links
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        {/* Brand logo link */}
        <Link href="/" className="nav-brand">
          <span>🎓</span>
          <span>Campus Directory</span>
        </Link>

        {/* Navigation links */}
        <nav className="nav-links">
          <Link href="/students" className="nav-link">
            Students
          </Link>
          <Link href="/departments" className="nav-link">
            Departments
          </Link>
          <Link href="/#about" className="nav-link">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
