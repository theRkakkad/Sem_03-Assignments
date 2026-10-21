// Reusable DepartmentCard component displaying faculty information
import Link from "next/link";
import { Department } from "../types/department";

export default function DepartmentCard({
  department,
  activeStudentCount,
}: {
  department: Department;
  activeStudentCount: number;
}) {
  return (
    <div className="dept-item">
      <div>
        <h2 className="section-title">{department.name}</h2>
        <p className="text-muted" style={{ margin: "4px 0 8px 0" }}>
          {department.description}
        </p>
        <p style={{ fontSize: "0.8rem", color: "#64748b" }}>
          {department.specializations} Specializations &middot;{" "}
          {department.enrolledStudents} Enrolled ({activeStudentCount} in directory)
        </p>
      </div>

      <div>
        <Link href="/students" className="btn btn-secondary">
          View students &rarr;
        </Link>
      </div>
    </div>
  );
}
