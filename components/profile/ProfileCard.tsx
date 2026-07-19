import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

import { Card, CardContent } from "@/components/ui/card";

import { profile } from "@/data/profile";

export default function ProfileCard() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center p-8">
        <Avatar className="h-24 w-24">
          <AvatarFallback className="text-3xl">
            HS
          </AvatarFallback>
        </Avatar>

        <h2 className="mt-4 text-2xl font-bold">
          {profile.firstName} {profile.lastName}
        </h2>

        <p className="mt-1 text-slate-500">
          {profile.accountType}
        </p>
      </CardContent>
    </Card>
  );
}