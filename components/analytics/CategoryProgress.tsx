import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { expenseBreakdown } from "@/data/analytics";

export default function CategoryProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending Categories</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {expenseBreakdown.map((item) => (
          <div key={item.name}>
            <div className="mb-2 flex justify-between">
              <span>{item.name}</span>

              <span>{item.value}%</span>
            </div>

            <div className="h-3 rounded-full bg-slate-200">
              <div
                className="h-3 rounded-full bg-blue-600"
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}