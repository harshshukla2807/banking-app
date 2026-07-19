import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const accounts = [
  {
    name: "Savings Account",
    balance: "₹180000",
  },
  {
    name: "Current Account",
    balance: "₹74,300",
  },
  {
    name: "Credit Card",
    balance: "-₹12,400",
  },
];

export default function AccountOverview() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Account Overview</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {accounts.map((account) => (
          <div
            key={account.name}
            className="flex justify-between border-b pb-4 last:border-none"
          >
            <span>{account.name}</span>

            <span className="font-semibold">
              {account.balance}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}