"use client";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--panel)]/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold text-[var(--accent)]">FairPrice</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[var(--cream)] px-3 py-1 text-xs font-medium text-[var(--text-primary)]">
            Portfolio Demo · Not financial advice
          </span>
        </div>
      </div>
    </header>
  );
}

