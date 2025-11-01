export type Skill = {
  name: string;
  level?: number; // 0-100 optional
  category: "Frontend" | "Backend" | "Mobile" | "Database" | "Tools";
};

export const skills: Skill[] = [
  { name: "HTML", level: 90, category: "Frontend" },
  { name: "CSS", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "Redux Toolkit", level: 75, category: "Frontend" },
  { name: "Next.js", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Flutter", level: 70, category: "Mobile" },
  { name: "Dart", level: 70, category: "Mobile" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Express", level: 70, category: "Backend" },
  { name: "PostgreSQL", level: 70, category: "Database" },
  { name: "Firebase", level: 75, category: "Backend" },
];
