import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowDownRight,
  ArrowUpRight,
  IndianRupee,
  PiggyBank,
} from "lucide-react";

const analyticsCards = [
  {
    title: "Income",
    value: "₹63,000",
    change: "+8%",
    positive: true,
    icon: IndianRupee,
  },
  {
    title: "Expenses",
    value: "₹27,500",
    change: "-12%",
    positive: false,
    icon: ArrowDownRight,
  },
  {
    title: "Savings Rate",
    value: "56%",
    change: "+5%",
    positive: true,
    icon: PiggyBank,
  },
];

export default function AnalyticsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {analyticsCards.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.title}
            className="transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h2>

                <div
                  className={`mt-2 flex items-center gap-1 text-sm ${
                    card.positive
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {card.positive ? (
                    <ArrowUpRight size={16} />
                  ) : (
                    <ArrowDownRight size={16} />
                  )}

                  {card.change} this month
                </div>
              </div>

              <div className="rounded-full bg-blue-100 p-4">
                <Icon
                  size={28}
                  className="text-blue-600"
                />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}