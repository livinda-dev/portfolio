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
    title: "Rental & Property Management System (Rentinis)",
    description:
      "A full-stack system to manage tenants, owners, invoices, and properties with complex relational data.",
    tech: ["React Refine", "Laravel", "PostgreSQL", "Ant Design"],
    image: "/projects/rentinis.png",
    tags: ["Full-Stack", "Web"],
      link: "https://youtu.be/klZS4qHUNCk",
  },
  // {
  //   title: "Race Tracking (Flutter)",
  //   description:
  //     "Mobile app that allow the host to track race results and participants.",
  //   tech: ["Flutter", "Dart", "Firebase"],
  //   image: "/projects/race-tracking.png",
  //   tags: ["Flutter", "Mobile"],
  //     link: "https://www.youtube.com/watch?v=I5RPUsm1wM4",
  // },
  {
    title: "React + Express E-learning Platform",
    description:
      "Platform for hosting courses, managing content, and processing payments.",
    tech: ["React", "Express", "MongoDB", "Tailwind"],
    image: "/projects/infinity.png",
    tags: ["Frontend", "Web"],
      link: "https://youtu.be/rf_dM_Vw_o8",
  },
  {
    title: "តាមដាន-Tamdan(In Process)",
    description: "A Web application that connects with the AI agent to sent user the news everyday",
    tech: ["Next.js", "Supabase", "Tailwind","AI Agent"],
    image: "/projects/tamdan.png",
    tags: ["Full-Stack", "Web"],
      link: "https://www.youtube.com/watch?v=I5RPUsm1wM4",
  },
  {
    title: "CV Builder (Flutter)",
    description: "Flutter app to build and export professional resumes.",
    tech: ["Flutter", "Dart"],
    image: "/projects/cv.jpg",
    tags: ["Flutter", "Mobile"],
      link: "https://youtu.be/QCD8xciXAk0",
  },
];
