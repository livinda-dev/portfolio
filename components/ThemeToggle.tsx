"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title="Toggle theme"
    >
      <span aria-hidden>{isDark ? "🌙" : "☀️"}</span>
    </button>
  );
}
