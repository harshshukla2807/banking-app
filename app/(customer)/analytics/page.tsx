import AnalyticsCards from "@/components/analytics/AnalyticsCards";
import IncomeExpenseChart from "@/components/analytics/IncomeExpenseChart";
import ExpensePieChart from "@/components/analytics/ExpensePieChart";
import CategoryProgress from "@/components/analytics/CategoryProgress";
import Insights from "@/components/analytics/Insights";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Analytics
        </h1>

        <p className="mt-2 text-slate-500">
          Track your financial insights and spending habits.
        </p>
      </div>

      <AnalyticsCards />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <IncomeExpenseChart />
        </div>

        <ExpensePieChart />
      </div>

      <CategoryProgress />

      <Insights />
    </div>
  );
}