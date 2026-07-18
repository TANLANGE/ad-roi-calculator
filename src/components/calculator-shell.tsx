import type { ReactNode } from 'react';

type CalculatorShellProps = {
  title: string;
  description: string;
  left: ReactNode;
  right: ReactNode;
};

export default function CalculatorShell({ title, description, left, right }: CalculatorShellProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h1>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">{description}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          {left}
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          {right}
        </div>
      </div>
    </section>
  );
}
