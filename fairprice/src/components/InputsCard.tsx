"use client";

import SliderRow from "./SliderRow";
import CallPutToggle from "./CallPutToggle";
import type { BSInputs } from "@/lib/blackScholes";

interface InputsCardProps {
  inputs: BSInputs;
  onChange: (inputs: BSInputs) => void;
}

export default function InputsCard({ inputs, onChange }: InputsCardProps) {
  const updateInput = <K extends keyof BSInputs>(
    key: K,
    value: BSInputs[K]
  ) => {
    onChange({ ...inputs, [key]: value });
  };

  return (
    <div className="rounded-xl bg-[var(--panel)] p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">
        Parameters
      </h2>
      <div className="space-y-6">
        <div>
          <label className="mb-3 block text-sm font-medium text-[var(--text-primary)]">
            Option Type
          </label>
          <CallPutToggle
            value={inputs.type}
            onChange={(type) => updateInput("type", type)}
          />
        </div>
        <SliderRow
          label="Stock Price"
          symbol="S"
          min={50}
          max={500}
          step={0.01}
          value={inputs.S}
          onChange={(S) => updateInput("S", S)}
        />
        <SliderRow
          label="Strike Price"
          symbol="K"
          min={50}
          max={500}
          step={0.01}
          value={inputs.K}
          onChange={(K) => updateInput("K", K)}
        />
        <SliderRow
          label="Time to Expiration"
          symbol="T"
          min={0.01}
          max={2}
          step={0.01}
          value={inputs.T}
          onChange={(T) => updateInput("T", T)}
        />
        <SliderRow
          label="Risk-Free Rate"
          symbol="r"
          min={0}
          max={0.15}
          step={0.001}
          value={inputs.r}
          onChange={(r) => updateInput("r", r)}
        />
        <SliderRow
          label="Volatility"
          symbol="σ"
          min={0.05}
          max={1}
          step={0.01}
          value={inputs.sigma}
          onChange={(sigma) => updateInput("sigma", sigma)}
        />
      </div>
    </div>
  );
}

