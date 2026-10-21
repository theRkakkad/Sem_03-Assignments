// Department mock data extracted from page for clean modular structure
import { Department } from "../types/department";

export const departments: Department[] = [
  {
    id: "cs",
    name: "Computer Science",
    description:
      "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    specializations: 4,
    enrolledStudents: 320,
  },
  {
    id: "design",
    name: "Design",
    description:
      "User experience research, visual communication, interaction design, and product prototyping.",
    specializations: 3,
    enrolledStudents: 185,
  },
  {
    id: "business",
    name: "Business",
    description:
      "Strategic management, financial technology, international entrepreneurship, and analytics.",
    specializations: 3,
    enrolledStudents: 240,
  },
];
