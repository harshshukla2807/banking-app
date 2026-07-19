export default function WelcomeHeader() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          Good Morning, Harsh 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Here's what's happening with your finances today.
        </p>
      </div>

      <div className="text-right">
        <p className="text-sm text-slate-500">
          {today}
        </p>
      </div>
    </div>
  );
}