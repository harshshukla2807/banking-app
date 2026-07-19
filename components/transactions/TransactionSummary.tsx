import { transactions } from "@/data/transactions";
import { Card, CardContent } from "@/components/ui/card";

export default function TransactionSummary() {
  const totalCredit = transactions
    .filter((t) => t.type === "Credit")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalDebit = transactions
    .filter((t) => t.type === "Debit")
    .reduce((sum, t) => sum + t.amount, 0);

  const pending = transactions.filter(
    (t) => t.status === "Pending"
  ).length;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-slate-500">
            Total Credit
          </p>

          <h2 className="mt-2 text-2xl font-bold text-green-600">
            ₹{totalCredit.toLocaleString()}
          </h2>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-slate-500">
            Total Debit
          </p>

          <h2 className="mt-2 text-2xl font-bold text-red-500">
            ₹{totalDebit.toLocaleString()}
          </h2>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-slate-500">
            Pending Transactions
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {pending}
          </h2>
        </CardContent>
      </Card>
    </div>
  );
}