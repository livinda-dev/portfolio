import Container from "../Container";
import SectionHeader from "../SectionHeader";
import { skills } from "@/data/skills";

function Bar({ level }: { level?: number }) {
  const width = Math.max(0, Math.min(100, level ?? 0));
  return (
    <div className="h-2 w-full rounded bg-zinc-200 dark:bg-zinc-800">
      <div className="h-2 rounded bg-black transition-all dark:bg-white" style={{ width: `${width}%` }} />
    </div>
  );
}

export default function Skills() {
  const groups = Array.from(
    skills.reduce<Map<string, typeof skills>>((acc, s) => {
      const arr = acc.get(s.category) ?? [];
      arr.push(s);
      acc.set(s.category, arr);
      return acc;
    }, new Map()).entries()
  );

  return (
    <section id="skills" className="scroll-mt-24">
      <Container className="py-16">
        <SectionHeader title={<>Skills</>} subtitle={<>Technologies I use frequently.</>} />
        <div className="grid gap-8 sm:grid-cols-2">
          {groups.map(([category, list]) => (
            <div key={category} className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{category}</h3>
              <ul className="space-y-4">
                {list.map((s) => (
                  <li key={s.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{s.name}</span>
                      {typeof s.level === "number" && <span className="text-zinc-500 dark:text-zinc-400">{s.level}%</span>}
                    </div>
                    <Bar level={s.level} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
