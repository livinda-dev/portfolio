import Container from "../Container";
import SectionHeader from "../SectionHeader";
import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <Container className="py-16">
        <SectionHeader title={<>Contact</>} subtitle={<>Feel free to reach out via email or connect on GitHub and LinkedIn.</>} />
        <ul className="grid gap-4 sm:grid-cols-3">
          <li>
            <a className="block rounded-lg border border-zinc-200 p-5 text-center hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900" href={`mailto:${siteConfig.email}`}>
              <div className="text-sm font-medium">Email</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{siteConfig.email}</div>
            </a>
          </li>
          <li>
            <a className="block rounded-lg border border-zinc-200 p-5 text-center hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900" href={siteConfig.github} target="_blank" rel="noopener noreferrer">
              <div className="text-sm font-medium">GitHub</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">View profile</div>
            </a>
          </li>
          <li>
            <a className="block rounded-lg border border-zinc-200 p-5 text-center hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
              <div className="text-sm font-medium">LinkedIn</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">View profile</div>
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
}
