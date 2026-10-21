// Error boundary component for handling runtime errors on the students page
"use client";

export default function StudentsError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error-box">
      <div className="error-icon">!</div>
      <h2 className="section-title">Something went wrong!</h2>
      <p className="text-muted" style={{ marginBottom: "16px", marginTop: "4px" }}>
        We could not load the students directory. Please try again.
      </p>
      <button type="button" onClick={() => reset()} className="btn btn-primary">
        Try again
      </button>
    </div>
  );
}
