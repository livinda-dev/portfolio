import Image from "next/image";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <Container className="py-16">
        <SectionHeader title={<>Projects</>} subtitle={<>A selection of projects I built. Replace screenshots and links with yours.</>} />
        <ul className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.title} className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
              <div className="relative aspect-[16/9]">
                <Image src={p.image} alt={`${p.title} screenshot`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-1">
                  {p.link && (
                    <a className="text-sm font-medium text-black hover:underline dark:text-white" href={p.link} target="_blank" rel="noopener noreferrer">
                      Live ↗
                    </a>
                  )}
                  {p.repo && (
                    <a className="text-sm font-medium text-black hover:underline dark:text-white" href={p.repo} target="_blank" rel="noopener noreferrer">
                      Code ↗
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
