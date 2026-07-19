import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const actions = [
  {
    title: "Transfer Money",
    href: "/transfer",
  },
  {
    title: "Transactions",
    href: "/transactions",
  },
  {
    title: "Analytics",
    href: "/analytics",
  },
  {
    title: "Profile",
    href: "/profile",
  },
];

export default function QuickActions() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {actions.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className="block rounded-lg border p-3 transition hover:bg-slate-50"
          >
            {action.title}
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}