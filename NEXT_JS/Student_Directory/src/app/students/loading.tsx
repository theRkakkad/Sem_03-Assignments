// Loading UI displayed while the students page or data is loading
export default function StudentsLoading() {
  return (
    <div className="loading-box">
      <div
        className="avatar"
        style={{ margin: "0 auto 16px auto", width: "48px", height: "48px", fontSize: "1.2rem" }}
      >
        ⏳
      </div>
      <h2 className="section-title">Loading Students Directory...</h2>
      <p className="text-muted" style={{ fontSize: "0.85rem", marginTop: "4px" }}>
        Please wait while student records are retrieved.
      </p>
    </div>
  );
}
