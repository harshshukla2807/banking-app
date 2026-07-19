import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";

const bills = [
  {
    id: 1,
    name: "Electricity",
    due: "Tomorrow",
    amount: 2450,
  },
  {
    id: 2,
    name: "Netflix",
    due: "20 Jul",
    amount: 649,
  },
  {
    id: 3,
    name: "Internet",
    due: "22 Jul",
    amount: 999,
  },
];

export default function UpcomingBills() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2">
        <CalendarClock className="h-5 w-5 text-orange-600" />
        <CardTitle>Upcoming Bills</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {bills.map((bill) => (
          <div
            key={bill.id}
            className="flex items-center justify-between rounded-lg border p-3 transition hover:bg-slate-50"
          >
            <div>
              <p className="font-medium">{bill.name}</p>

              <p className="text-sm text-slate-500">
                Due: {bill.due}
              </p>
            </div>

            <span className="font-semibold">
              ₹{bill.amount.toLocaleString()}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}