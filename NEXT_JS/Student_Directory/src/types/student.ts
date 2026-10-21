// Type definition for Student representing profile and academic information
export type Student = {
  id: string;
  name: string;
  course: string;
  year: number;
  email: string;
  city: string;
  skills: string[];
  about: string;
  // Optional extra fields to match the campus directory UI design
  avatarColor?: string;
  enrolledSemester?: string;
  standing?: string;
  subjects?: {
    code: string;
    title: string;
    credits: string;
  }[];
  specialization?: string;
};
