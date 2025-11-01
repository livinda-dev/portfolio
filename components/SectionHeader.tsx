import { ReactNode } from "react";

export default function SectionHeader({ title, subtitle }: { title: ReactNode; subtitle?: ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>}
    </div>
  );
}
