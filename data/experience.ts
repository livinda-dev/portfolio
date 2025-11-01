export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "CamMob Co. Ltd",
    role: "Full-Stack Web Developer Intern",
    period: "3 months",
    summary:
      "Worked across frontend and backend tasks, collaborating with a small team to deliver features and fix bugs.",
    bullets: [
      "Implemented UI components with React and Tailwind CSS",
      "Built REST APIs with Node.js and Express",
      "Integrated PostgreSQL and Firebase for data storage and auth",
      "Participated in code reviews and agile ceremonies",
    ],
  },
];
