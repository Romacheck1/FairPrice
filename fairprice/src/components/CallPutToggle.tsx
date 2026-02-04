"use client";

interface CallPutToggleProps {
  value: "call" | "put";
  onChange: (value: "call" | "put") => void;
}

export default function CallPutToggle({ value, onChange }: CallPutToggleProps) {
  return (
    <div className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--panel)] p-1">
      <button
        onClick={() => onChange("call")}
        className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
          value === "call"
            ? "bg-[var(--accent)] text-white shadow-sm"
            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        }`}
      >
        Call
      </button>
      <button
        onClick={() => onChange("put")}
        className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
          value === "put"
            ? "bg-[var(--accent)] text-white shadow-sm"
            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        }`}
      >
        Put
      </button>
    </div>
  );
}

