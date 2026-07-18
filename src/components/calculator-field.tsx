type CalculatorFieldProps = {
  label: string; value: number; onChange: (v: number) => void; id: string;
  suffix?: string; min?: number; max?: number; step?: number;
};

export default function CalculatorField({ label, value, onChange, id, suffix, min = 0, max, step = 1 }: CalculatorFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs font-semibold text-[#78716c]">
        {label}
        {suffix && <span className="ml-1 font-normal text-[#a8a29e]">({suffix})</span>}
      </label>
      <input
        id={id} type="number" value={value} min={min} max={max} step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-lg border border-[#e8e4d9] bg-[#faf8f5] px-3.5 py-2.5 text-sm font-medium text-[#1a1a1a] outline-none transition-colors focus:border-[#b45309] focus:bg-white"
      />
    </div>
  );
}
