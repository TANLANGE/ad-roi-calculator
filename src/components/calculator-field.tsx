import type React from 'react';

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
  label, value, onChange, id, suffix, min = 0, max, step = 1,
}: CalculatorFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
        {suffix && <span className="ml-1 font-normal text-slate-400">{suffix}</span>}
      </label>
      <input
        id={id}
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
      />
    </div>
  );
}
