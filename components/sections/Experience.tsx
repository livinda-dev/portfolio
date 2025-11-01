import Container from "../Container";
import SectionHeader from "../SectionHeader";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <Container className="py-16">
        <SectionHeader title={<>Experience</>} subtitle={<>Roles, tasks, and achievements.</>} />
        <ul className="space-y-6">
          {experiences.map((e) => (
            <li key={e.company} className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <h3 className="text-lg font-medium">{e.role}</h3>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">{e.company} • {e.period}</div>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{e.summary}</p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
