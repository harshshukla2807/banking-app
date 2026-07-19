import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";

export default function AccountInformation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Information</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">

          <InfoItem label="Customer ID" value={profile.customerId} />
          <InfoItem label="Account Number" value={profile.accountNumber} />
          <InfoItem label="Account Type" value={profile.accountType} />
          <InfoItem label="Branch" value={profile.branch} />
          <InfoItem label="IFSC Code" value={profile.ifsc} />
          <InfoItem label="Member Since" value={profile.memberSince} />

        </div>

        <div className="flex items-center justify-between border-t pt-5">
          <span className="font-medium">Account Status</span>

          <Badge className="bg-green-600">
            {profile.status}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}