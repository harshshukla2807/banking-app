import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Salary Credited",
    description: "₹65,000 has been credited to your account.",
    time: "2 hours ago",
    color: "bg-green-500",
  },
  {
    id: 2,
    title: "Transfer Successful",
    description: "₹2,500 sent to Rahul Sharma.",
    time: "Yesterday",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Electricity Bill Due",
    description: "Payment due tomorrow.",
    time: "Tomorrow",
    color: "bg-yellow-500",
  },
];

export default function Notifications() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2">
        <Bell className="h-5 w-5 text-blue-600" />
        <CardTitle>Notifications</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex gap-3 border-b pb-4 last:border-none"
          >
            <div
              className={`mt-2 h-3 w-3 rounded-full ${notification.color}`}
            />

            <div className="flex-1">
              <h3 className="font-medium">{notification.title}</h3>

              <p className="text-sm text-slate-500">
                {notification.description}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {notification.time}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}