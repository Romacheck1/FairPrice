"use client";

import GreeksChips from "./GreeksChips";
import type { BSGreeks } from "@/lib/blackScholes";

interface OutputCardProps {
  price: number;
  greeks: BSGreeks;
}

export default function OutputCard({ price, greeks }: OutputCardProps) {
  const formatPrice = (p: number): string => {
    if (p < 0.01) return "$0.00";
    return `$${p.toFixed(2)}`;
  };

  return (
    <div className="rounded-xl bg-[var(--panel)] p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">
        Theoretical Price
      </h2>
      <div className="mb-2">
        <div className="text-4xl font-bold text-[var(--accent)] sm:text-5xl">
          {formatPrice(price)}
        </div>
        <div className="mt-2 text-xs text-[var(--text-secondary)]">
          As-of: Demo mode
        </div>
      </div>
      <div className="mb-6">
        <h3 className="mb-1 text-sm font-medium text-[var(--text-primary)]">
          Greeks
        </h3>
        <GreeksChips greeks={greeks} />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium text-[var(--text-primary)]">
          Assumptions
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            "European",
            "Lognormal",
            "Constant Vol",
            "No Dividends",
          ].map((assumption) => (
            <span
              key={assumption}
              className="rounded-full bg-[var(--cream)] px-3 py-1 text-xs font-medium text-[var(--text-primary)]"
            >
              {assumption}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

