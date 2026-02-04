"use client";

import TopBar from "./TopBar";
import Hero from "./Hero";
import InputsCard from "./InputsCard";
import OutputCard from "./OutputCard";
import ChartsRow from "./ChartsRow";
import FooterSection from "./FooterSection";
import { bsPrice, bsGreeks } from "@/lib/blackScholes";
import type { BSInputs } from "@/lib/blackScholes";
import { useState, useRef } from "react";

const DEFAULT_INPUTS: BSInputs = {
  type: "call",
  S: 187.23,
  K: 185,
  T: 0.12,
  r: 0.04,
  sigma: 0.23,
};

export default function AppShell() {
  const [inputs, setInputs] = useState<BSInputs>(DEFAULT_INPUTS);
  const inputsRef = useRef<HTMLDivElement>(null);

  const price = bsPrice(inputs);
  const greeks = bsGreeks(inputs);

  const handleScrollToSliders = () => {
    inputsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Hero onScrollToSliders={handleScrollToSliders} />
      <main className="w-full pt-0 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={inputsRef}
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            <InputsCard inputs={inputs} onChange={setInputs} />
            <OutputCard price={price} greeks={greeks} />
          </div>
          <div className="mt-8">
            <ChartsRow inputs={inputs} />
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}

