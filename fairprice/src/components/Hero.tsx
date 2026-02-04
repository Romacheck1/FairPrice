"use client";

interface HeroProps {
  onScrollToSliders: () => void;
}

export default function Hero({ onScrollToSliders }: HeroProps) {
  return (
    <section className="w-full pt-16 pb-12 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl">
            Black-Scholes, Made Visual
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
            Explore option pricing theory through interactive sliders and real-time
            calculations. See how Greeks change as you adjust parameters.
          </p>
          <div className="mt-10">
            <button
              onClick={onScrollToSliders}
              className="rounded-lg bg-[var(--accent)] px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
            >
              Try the sliders
            </button>
          </div>
          <div className="mt-12 rounded-lg bg-[var(--panel)] p-6 shadow-sm">
            <div className="overflow-x-auto">
              <div className="text-center font-mono text-sm sm:text-base">
                <div className="text-[var(--text-secondary)]">Call Option Price:</div>
                <div className="mt-2 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
                  C = S₀N(d₁) - Ke⁻ʳᵀN(d₂)
                </div>
                <div className="mt-4 text-xs text-[var(--text-secondary)] sm:text-sm">
                  where d₁ = [ln(S₀/K) + (r + σ²/2)T] / (σ√T)
                  <br />
                  and d₂ = d₁ - σ√T
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

