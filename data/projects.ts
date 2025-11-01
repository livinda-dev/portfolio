export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string; // path under public/
  link?: string; // live link
  repo?: string; // source code
  tags?: string[]; // for optional filtering
};

export const projects: Project[] = [
  {
    title: "Rental & Property Management System",
    description:
      "A full-stack system to manage tenants, owners, invoices, and properties with complex relational data.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind"],
    image: "/projects/placeholder.svg",
    tags: ["Full-Stack", "Web"],
  },
  {
    title: "Flutter Expense Tracker",
    description:
      "Mobile app with authentication and backend integration to track expenses across categories.",
    tech: ["Flutter", "Dart", "Firebase"],
    image: "/projects/placeholder.svg",
    tags: ["Flutter", "Mobile"],
  },
  {
    title: "React + Firebase E-learning Platform",
    description:
      "Platform for hosting courses, managing content, and processing payments.",
    tech: ["React", "Firebase", "Stripe"],
    image: "/projects/placeholder.svg",
    tags: ["Frontend", "Web"],
  },
  {
    title: "Next.js + Supabase Auth App",
    description: "Next.js app with Supabase auth and Google login.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    image: "/projects/placeholder.svg",
    tags: ["Full-Stack", "Web"],
  },
  {
    title: "CV Builder (Flutter)",
    description: "Flutter app to build and export professional resumes.",
    tech: ["Flutter", "Dart"],
    image: "/projects/placeholder.svg",
    tags: ["Flutter", "Mobile"],
  },
];
