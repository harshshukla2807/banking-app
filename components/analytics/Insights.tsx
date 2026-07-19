import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Insights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Insights</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="rounded-lg bg-green-50 p-4">
          <p className="font-semibold text-green-700">
            Savings Increased
          </p>

          <p className="text-sm text-slate-600">
            You saved ₹18,000 this month.
          </p>
        </div>

        <div className="rounded-lg bg-yellow-50 p-4">
          <p className="font-semibold text-yellow-700">
            Highest Spending
          </p>

          <p className="text-sm text-slate-600">
            Shopping accounts for 35% of your expenses.
          </p>
        </div>

        <div className="rounded-lg bg-blue-50 p-4">
          <p className="font-semibold text-blue-700">
            Income Growth
          </p>

          <p className="text-sm text-slate-600">
            Income increased by 8% compared to last month.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}