import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SecuritySettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Button variant="outline">
          Change Password
        </Button>

        <Button variant="outline" disabled>
          Enable Two-Factor Authentication
        </Button>
      </CardContent>
    </Card>
  );
}