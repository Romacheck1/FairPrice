"use client";

export default function FooterSection() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl bg-[var(--panel)] p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-semibold text-[var(--text-primary)]">
              How this demo works
            </h2>
            <ul className="space-y-4 text-[var(--text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white">
                  1
                </span>
                <div>
                  <strong className="text-[var(--text-primary)]">
                    Adjust parameters:
                  </strong>{" "}
                  Use the sliders to change stock price, strike, time to expiration,
                  risk-free rate, and volatility. Watch how the theoretical price
                  updates in real-time.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white">
                  2
                </span>
                <div>
                  <strong className="text-[var(--text-primary)]">
                    Explore the Greeks:
                  </strong>{" "}
                  Delta, Gamma, Theta, Vega, and Rho measure sensitivity to
                  different factors. These help traders understand risk and
                  position management.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white">
                  3
                </span>
                <div>
                  <strong className="text-[var(--text-primary)]">
                    Visualize relationships:
                  </strong>{" "}
                  The charts show how option price and Greeks change across
                  different stock prices and volatility levels, revealing the
                  non-linear nature of options.
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-6 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4">
            <p className="text-sm text-[var(--text-secondary)]">
              <strong className="text-[var(--text-primary)]">Data Note:</strong>{" "}
              This demo uses simulated parameters. Real market data integration
              (e.g., delayed Yahoo Finance quotes) may be added in a future
              update. All calculations are performed client-side using the
              standard Black-Scholes model with no dividends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

