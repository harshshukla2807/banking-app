import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import StatCard from "@/components/dashboard/StatCard";
import SpendingChart from "@/components/dashboard/SpendingChart";
import AccountOverview from "@/components/dashboard/AccountOverview";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import QuickActions from "@/components/dashboard/QuickActions";
import Notifications from "@/components/dashboard/Notifications";
import SavingsGoal from "@/components/dashboard/SavingsGoal";
import UpcomingBills from "@/components/dashboard/UpcomingBills";

import { dashboardStats } from "@/data/dashboard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <WelcomeHeader />

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.title} title={stat.title} amount={stat.amount} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SpendingChart />
        </div>

        <AccountOverview />
      </section>

      <section className="grid gap-6">
        <QuickActions />
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentTransactions />
        </div>

        <Notifications />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <SavingsGoal />

        <UpcomingBills />
      </section>
    </div>
  );
}
