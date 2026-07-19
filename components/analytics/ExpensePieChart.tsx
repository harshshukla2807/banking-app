"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { expenseBreakdown } from "@/data/analytics";

const COLORS = ["#2563eb", "#16a34a", "#dc2626", "#f59e0b", "#7c3aed"];

export default function ExpensePieChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Expense Breakdown</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={expenseBreakdown}
                label={false}
                dataKey="value"
                nameKey="name"
                innerRadius={55}
                outerRadius={95}
                paddingAngle={4}
                cornerRadius={8}
              >
                {expenseBreakdown.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 10px 25px rgba(0,0,0,.12)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 space-y-3">
  {expenseBreakdown.map((item, index) => (
    <div
      key={item.name}
      className="flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <div
          className="h-3 w-3 rounded-full"
          style={{
            backgroundColor: COLORS[index],
          }}
        />

        <span>{item.name}</span>
      </div>

      <span className="font-semibold">
        {item.value}%
      </span>
    </div>
  ))}
</div>
      </CardContent>
    </Card>
  );
}
