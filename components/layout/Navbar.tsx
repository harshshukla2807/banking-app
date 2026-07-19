"use client";

import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";

import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

const titles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/transactions": "Transactions",
  "/transfer": "Transfer",
  "/analytics": "Analytics",
  "/profile": "Profile",
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div>
        <h1 className="text-2xl font-semibold">
          {titles[pathname]}
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <Input
          placeholder="Search..."
          className="w-72"
        />

        <Bell className="cursor-pointer text-slate-600" />

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>HS</AvatarFallback>
          </Avatar>

          <div>
            <p className="text-sm font-medium">
              Harsh Shukla
            </p>

            <p className="text-xs text-slate-500">
               Customer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}