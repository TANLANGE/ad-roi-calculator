'use client';

import type { ReactNode } from 'react';

type CalculatorShellProps = {
  title: string;
  description: string;
  left: ReactNode;
  right: ReactNode;
};

export default function CalculatorShell({
  title,
  description,
  left,
  right,
}: CalculatorShellProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-center text-2xl font-bold text-slate-50 sm:text-3xl">
        {title}
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
        {description}
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-cyan-400/15 bg-slate-900 p-8">
          {left}
        </div>
        <div className="rounded-2xl border border-cyan-400/15 bg-slate-900 p-8">
          {right}
        </div>
      </div>
    </section>
  );
}
