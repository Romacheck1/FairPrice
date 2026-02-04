"use client";

import type { BSGreeks } from "@/lib/blackScholes";

interface GreeksChipsProps {
  greeks: BSGreeks;
}

export default function GreeksChips({ greeks }: GreeksChipsProps) {
  const formatGreek = (value: number): string => {
    if (Math.abs(value) < 0.0001) return "0.0000";
    return value.toFixed(4);
  };

  const greekItems = [
    { label: "Delta", symbol: "Δ", value: greeks.delta },
    { label: "Gamma", symbol: "Γ", value: greeks.gamma },
    { label: "Theta", symbol: "Θ", value: greeks.theta },
    { label: "Vega", symbol: "ν", value: greeks.vega },
    { label: "Rho", symbol: "ρ", value: greeks.rho },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {greekItems.map((greek) => (
        <div
          key={greek.label}
          className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2"
        >
          <div className="text-xs text-[var(--text-secondary)]">{greek.label}</div>
          <div className="text-sm font-semibold text-[var(--text-primary)]">
            {greek.symbol} = {formatGreek(greek.value)}
          </div>
        </div>
      ))}
    </div>
  );
}

