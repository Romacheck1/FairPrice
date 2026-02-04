"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ChartCardProps {
  title: string;
  data: Array<{ x: number; y: number }>;
  xLabel?: string;
  yLabel?: string;
}

export default function ChartCard({ title, data, xLabel, yLabel }: ChartCardProps) {
  return (
    <div className="rounded-xl bg-[var(--panel)] p-6 shadow-lg">
      <h3 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">
        {title}
      </h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
            <XAxis
              dataKey="x"
              stroke="var(--text-secondary)"
              tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
              label={xLabel ? { value: xLabel, position: "insideBottom", offset: -5, fill: "var(--text-secondary)" } : undefined}
            />
            <YAxis
              dataKey="y"
              stroke="var(--text-secondary)"
              tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
              label={yLabel ? { value: yLabel, angle: -90, position: "insideLeft", fill: "var(--text-secondary)" } : undefined}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--panel)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "var(--text-primary)" }}
            />
            <Line
              type="monotone"
              dataKey="y"
              stroke="var(--accent)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

