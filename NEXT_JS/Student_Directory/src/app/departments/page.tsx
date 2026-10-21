// Academic departments directory page showing available faculties and enrolled programs
import { departments } from "../../data/departments";
import { students } from "../../data/students";
import DepartmentCard from "../../components/DepartmentCard";

export default function DepartmentsPage() {
  return (
    <div>
      {/* Header section with active faculty badge */}
      <div
        className="page-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div>
          <h1 className="page-title">Departments</h1>
          <p className="page-subtitle">
            Explore academic faculties, programs, and enrolled students.
          </p>
        </div>
        <span className="badge">&bull; 3 Active Academic Faculties</span>
      </div>

      {/* List of department cards using reusable DepartmentCard component */}
      <div className="dept-list">
        {departments.map((dept) => {
          const activeCount = students.filter(
            (s) => s.course === dept.name
          ).length;

          return (
            <DepartmentCard
              key={dept.id}
              department={dept}
              activeStudentCount={activeCount}
            />
          );
        })}
      </div>

      {/* Bottom status note */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.75rem",
          color: "#94a3b8",
          marginTop: "16px",
          padding: "0 4px",
        }}
      >
        <p>Curriculum Year 2024–2025</p>
        <p>Updated daily via Campus Records API</p>
      </div>
    </div>
  );
}
