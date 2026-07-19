import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recentTransactions } from "@/data/dashboard";

export default function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Recent Transactions
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div
              key={transaction.name}
              className="flex items-center justify-between border-b pb-3 last:border-none"
            >
              <span>{transaction.name}</span>

              <span
                className={
                  transaction.amount.startsWith("+")
                    ? "font-semibold text-green-600"
                    : "font-semibold text-red-500"
                }
              >
                {transaction.amount}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}