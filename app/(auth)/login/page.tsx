import LotusLogo from "@/components/LotusLogo";
import LoginForm from "@/app/(auth)/login/_components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 px-4 sm:px-0 min-h-screen w-full">
      <Link href="/" className="flex flex-col items-center gap-5">
        <LotusLogo />
      </Link>
      <LoginForm />
    </main>
  );
}
