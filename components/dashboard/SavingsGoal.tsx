"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PiggyBank } from "lucide-react";

export default function SavingsGoal() {
  const saved = 72000;
  const goal = 100000;

  const percentage = (saved / goal) * 100;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2">
        <PiggyBank className="h-5 w-5 text-green-600" />
        <CardTitle>Savings Goal</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex justify-between text-lg font-semibold">
          <span>₹{saved.toLocaleString()}</span>

          <span>₹{goal.toLocaleString()}</span>
        </div>

        <Progress value={percentage} />

        <div className="flex justify-between text-sm text-slate-500">
          <span>{percentage.toFixed(0)}% Completed</span>

          <span>₹{(goal - saved).toLocaleString()} Remaining</span>
        </div>
      </CardContent>
    </Card>
  );
}