"use client";
import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-black/50">
      <Container className="flex items-center justify-between py-3">
        <Link href="#home" className="text-base font-semibold tracking-tight">
          Sok Chanda
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 md:hidden dark:border-zinc-800"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="i-heroicons-bars-3 text-xl">≡</span>
        </button>
      </Container>
      {open && (
        <div className="border-t border-black/5 bg-white dark:border-white/10 dark:bg-black md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <ThemeToggle />
          </Container>
        </div>
      )}
    </header>
  );
}
