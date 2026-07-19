import TransactionsTable from "@/components/transactions/TransactionsTable";
import TransactionSummary from "@/components/transactions/TransactionSummary";

export default function TransactionsPage() {
  return (
    <div className="space-y-8">
      <div>

        <p className="mt-2 text-slate-500">
          View all your recent banking transactions.
        </p>
      </div>
      <TransactionSummary />

      <TransactionsTable />
    </div>
  );
}