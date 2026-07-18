type ResultCardProps = { label: string; value: string; accent?: boolean };

export default function ResultCard({ label, value, accent = false }: ResultCardProps) {
  return (
    <div className={`rounded-lg p-4 text-center ${accent ? 'bg-[#fef7ed]' : 'bg-[#faf8f5]'}`}>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#a8a29e]">{label}</p>
      <p className={`mt-1 text-xl font-bold tabular-nums ${accent ? 'text-[#92400e]' : 'text-[#1a1a1a]'}`}>{value}</p>
    </div>
  );
}
