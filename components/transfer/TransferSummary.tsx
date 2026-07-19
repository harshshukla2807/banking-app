import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TransferSummaryProps {
  fromAccount: string;
  recipient: string;
  amount: string;
}

export default function TransferSummary({
  fromAccount,
  recipient,
  amount,
}: TransferSummaryProps) {
  const transferAmount = Number(amount) || 0;

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Transfer Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex justify-between">
          <span className="text-slate-500">From</span>
          <span className="font-medium">{fromAccount}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">To</span>
          <span className="font-medium">
            {recipient || "--"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Amount</span>
          <span className="font-medium">
            ₹{transferAmount.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Transfer Fee</span>
          <span className="font-medium text-green-600">
            Free
          </span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold">
          <span>Total Debit</span>
          <span>₹{transferAmount.toLocaleString()}</span>
        </div>

        <div className="rounded-lg bg-slate-100 p-4">
          <p className="text-sm text-slate-600">
            Transfers are processed instantly in this demo.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}