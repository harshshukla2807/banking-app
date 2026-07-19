"use client";

import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ArrowLeftRight,
  Send,
  ChartColumn,
  User,
  LogOut,
  Landmark,
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: ArrowLeftRight,
  },
  {
    title: "Transfer",
    href: "/transfer",
    icon: Send,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: ChartColumn,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const handleClick=()=>{
    redirect('/')
  }

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      {/* Logo */}

      <div className="flex h-16 items-center gap-3 border-b px-6">
        <Landmark className="h-7 w-7 text-blue-600" />

        <h1 className="text-xl font-bold">
          ABC Bank
        </h1>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}

      <div className="border-t p-4">
        <button onClick={handleClick} className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-slate-600 transition hover:bg-slate-100">
          <LogOut size={20} />

          Logout
        </button>
      </div>
    </aside>
  );
}