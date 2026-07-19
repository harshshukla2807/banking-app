"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { month: "Jan", amount: 12000 },
  { month: "Feb", amount: 9000 },
  { month: "Mar", amount: 15000 },
  { month: "Apr", amount: 11000 },
  { month: "May", amount: 17000 },
  { month: "Jun", amount: 13000 },
];

export default function SpendingChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Monthly Spending</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="amount"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}