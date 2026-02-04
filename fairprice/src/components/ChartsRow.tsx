"use client";

import ChartCard from "./ChartCard";
import { bsPrice, bsGreeks } from "@/lib/blackScholes";
import type { BSInputs } from "@/lib/blackScholes";

interface ChartsRowProps {
  inputs: BSInputs;
}

export default function ChartsRow({ inputs }: ChartsRowProps) {
  // Generate Price vs Stock data
  const priceVsStockData = [];
  const stockRange = inputs.S * 0.85;
  const stockMax = inputs.S * 1.15;
  const stockStep = (stockMax - stockRange) / 60;
  for (let S = stockRange; S <= stockMax; S += stockStep) {
    const price = bsPrice({ ...inputs, S });
    priceVsStockData.push({ x: Number(S.toFixed(2)), y: Number(price.toFixed(2)) });
  }

  // Generate Delta vs Stock data
  const deltaVsStockData = [];
  for (let S = stockRange; S <= stockMax; S += stockStep) {
    const greeks = bsGreeks({ ...inputs, S });
    deltaVsStockData.push({ x: Number(S.toFixed(2)), y: Number(greeks.delta.toFixed(4)) });
  }

  // Generate Vega vs Volatility data
  const vegaVsVolData = [];
  const volMin = 0.05;
  const volMax = 0.60;
  const volStep = (volMax - volMin) / 60;
  for (let sigma = volMin; sigma <= volMax; sigma += volStep) {
    const greeks = bsGreeks({ ...inputs, sigma });
    vegaVsVolData.push({ x: Number(sigma.toFixed(3)), y: Number(greeks.vega.toFixed(4)) });
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <ChartCard
        title="Price vs Stock"
        data={priceVsStockData}
        xLabel="Stock Price ($)"
        yLabel="Option Price ($)"
      />
      <ChartCard
        title="Delta vs Stock"
        data={deltaVsStockData}
        xLabel="Stock Price ($)"
        yLabel="Delta"
      />
      <ChartCard
        title="Vega vs Volatility"
        data={vegaVsVolData}
        xLabel="Volatility (σ)"
        yLabel="Vega"
      />
    </div>
  );
}

