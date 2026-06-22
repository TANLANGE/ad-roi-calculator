'use client';

type ResultCardProps = {
  label: string;
  value: string;
  accent?: boolean;
};

export default function ResultCard({ label, value, accent = false }: ResultCardProps) {
  return (
    <div
      className={`rounded-xl border p-5 text-center ${
        accent
          ? 'border-cyan-400/30 bg-cyan-400/10'
          : 'border-cyan-400/10 bg-slate-800'
      }`}
    >
      <p className="text-sm text-slate-400">{label}</p>
      <p
        className={`mt-2 text-2xl font-bold ${
          accent ? 'text-cyan-300' : 'text-slate-50'
        }`}
      >
        {value}
      </p>
    </div>
  );
}
