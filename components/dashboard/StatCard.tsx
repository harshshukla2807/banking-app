import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  amount: string;
}

export default function StatCard({
  title,
  amount,
}: StatCardProps) {
  return (
    <Card>
      <CardContent className="space-y-2 p-6">
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <h2 className="text-2xl font-bold">
          {amount}
        </h2>
      </CardContent>
    </Card>
  );
}