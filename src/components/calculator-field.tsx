'use client';

type CalculatorFieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  id: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
};

export default function CalculatorField({
  label,
  value,
  onChange,
  id,
  suffix,
  min = 0,
  max,
  step = 1,
}: CalculatorFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-300">
        {label}
        {suffix && <span className="ml-1 text-slate-500">{suffix}</span>}
      </label>
      <input
        id={id}
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        className="w-full rounded-lg border border-cyan-400/20 bg-slate-800 px-4 py-2.5 text-slate-50 outline-none transition-colors focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
      />
    </div>
  );
}
