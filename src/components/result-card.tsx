type ResultCardProps = {
  label: string;
  value: string;
  accent?: boolean;
};

export default function ResultCard({ label, value, accent = false }: ResultCardProps) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        accent
          ? 'border-amber-200 bg-amber-50'
          : 'border-slate-100 bg-slate-50'
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</p>
      <p
        className={`mt-1 text-2xl font-semibold tabular-nums ${
          accent ? 'text-amber-700' : 'text-slate-900'
        }`}
      >
        {value}
      </p>
    </div>
  );
}
