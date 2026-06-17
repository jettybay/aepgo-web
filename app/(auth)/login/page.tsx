import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-md rounded-xl border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="mt-1 text-sm text-zinc-600">Add your login form here.</p>

        <div className="mt-6 flex items-center justify-between">
          <Link
            href="/signup"
            className="text-sm font-medium text-zinc-800 hover:underline"
          >
            Create account
          </Link>
          <Link
            href="/otp"
            className="text-sm font-medium text-zinc-800 hover:underline"
          >
            I have a code
          </Link>
        </div>
      </div>
    </div>
  );
}

