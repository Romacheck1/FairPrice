"use client";

interface SliderRowProps {
  label: string;
  symbol: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

export default function SliderRow({
  label,
  symbol,
  min,
  max,
  step,
  value,
  onChange,
}: SliderRowProps) {
  const formatValue = (val: number): string => {
    if (val >= 1000) {
      return val.toFixed(0);
    }
    if (val >= 1) {
      return val.toFixed(2);
    }
    return val.toFixed(4);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-[var(--text-primary)]">
          {label} <span className="text-[var(--accent)]">[{symbol}]</span>
        </label>
        <span className="text-sm font-mono text-[var(--text-secondary)]">
          {formatValue(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg transition-colors"
        style={{
          background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${((value - min) / (max - min)) * 100}%, var(--border) ${((value - min) / (max - min)) * 100}%, var(--border) 100%)`,
        }}
      />
    </div>
  );
}

