"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { analyticsData } from "@/data/analytics";

export default function IncomeExpenseChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Income vs Expenses</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
  <LineChart
    data={analyticsData}
    margin={{
      top: 20,
      right: 20,
      left: 10,
      bottom: 10,
    }}
  >
    <CartesianGrid
      strokeDasharray="4 4"
      vertical={false}
      stroke="#e5e7eb"
    />

    <XAxis
      dataKey="month"
      tickLine={false}
      axisLine={false}
    />

    <YAxis
      tickLine={false}
      axisLine={false}
      tickFormatter={(value) => `₹${value / 1000}k`}
    />

    <Tooltip
      contentStyle={{
        borderRadius: "12px",
        border: "none",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      }}
      formatter={(value: number) => [
        `₹${value.toLocaleString()}`,
      ]}
    />

    <Legend />

    <Line
      type="monotone"
      dataKey="income"
      stroke="#22c55e"
      strokeWidth={4}
      dot={{
        r: 5,
      }}
      activeDot={{
        r: 8,
      }}
    />

    <Line
      type="monotone"
      dataKey="expenses"
      stroke="#ef4444"
      strokeWidth={4}
      dot={{
        r: 5,
      }}
      activeDot={{
        r: 8,
      }}
    />
  </LineChart>
</ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}