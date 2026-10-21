// Custom 404 page shown when a student ID or route cannot be found
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ maxWidth: "600px", margin: "24px auto" }}>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/" className="card-link">
          Directory
        </Link>
        <span>/</span>
        <span>Not Found</span>
      </div>

      {/* Main not found card */}
      <div className="not-found-box">
        <span className="badge" style={{ marginBottom: "12px" }}>
          &bull; 404 &middot; ROUTE NOT FOUND
        </span>

        <h1 className="hero-title" style={{ fontSize: "1.6rem", marginTop: "8px" }}>
          Student or department not found
        </h1>

        <p
          className="text-muted"
          style={{ margin: "12px auto 24px auto", maxWidth: "420px" }}
        >
          The requested directory entry or path could not be located. It may
          have moved or the identifier might be invalid.
        </p>

        {/* Action buttons */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/students" className="btn btn-primary">
            Return to Students Directory
          </Link>
          <Link href="/departments" className="btn btn-secondary">
            Browse All Departments
          </Link>
        </div>
      </div>
    </div>
  );
}
