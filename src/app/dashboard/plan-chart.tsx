"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { quarter: "Q1", plan: 0.8, actual: 0.6 },
  { quarter: "Q2", plan: 2.2, actual: 1.7 },
  { quarter: "Q3", plan: 3.0, actual: 2.3 },
  { quarter: "Q4", plan: 1.6, actual: 1.2 },
];

const chartConfig = {
  plan: {
    label: "Plan",
    color: "#1f2937", // Dark gray/black
  },
  actual: {
    label: "Actual",
    color: "#f97316", // Orange
  },
};

export default function PlanCard() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Plan vs Actual</CardTitle>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#1f2937] rounded-sm"></div>
              <span>Plan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#f97316] rounded-sm"></div>
              <span>Actual</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              className="opacity-30"
            />
            <XAxis
              dataKey="quarter"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-sm"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}m`}
              domain={[0, 3]}
              ticks={[0, 1, 2, 3]}
              className="text-sm"
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dashed"
                  labelFormatter={(value) => `Quarter ${value}`}
                  formatter={(value, name) => [
                    `${value}m`,
                    chartConfig[name as keyof typeof chartConfig]?.label ||
                      name,
                  ]}
                />
              }
            />
            <Bar
              dataKey="plan"
              fill="var(--color-plan)"
              radius={[2, 2, 0, 0]}
              maxBarSize={60}
            />
            <Bar
              dataKey="actual"
              fill="var(--color-actual)"
              radius={[2, 2, 0, 0]}
              maxBarSize={60}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
