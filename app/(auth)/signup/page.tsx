import AuthCard from "@/components/auth/AuthCard";

export default function SignupPage() {
  return (
    <AuthCard>
      <h1 className="mb-2 text-2xl font-bold">
        Welcome
      </h1>

      <p className="mb-6 text-sm text-muted-foreground">
        Sign in
      </p>

      <div className="space-y-4">
        <input
          placeholder="FullName"
          className="w-full rounded-md border p-2"
        />
        <input
          placeholder="Email"
          className="w-full rounded-md border p-2"
        />
        <input
          placeholder="Password"
          className="w-full rounded-md border p-2"
        />

        <input
          type="Confirm password"
          placeholder="Confirm Password"
          className="w-full rounded-md border p-2"
        />

        <button className="w-full rounded-md bg-black p-2 text-white">
          Sign Up
        </button>
      </div>
    </AuthCard>
  );
}