import { Card, CardContent } from "@/components/ui/card";

export default function AuthCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
}