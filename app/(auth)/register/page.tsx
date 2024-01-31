import LotusLogo from "@/components/LotusLogo";
import Link from "next/link";
import RegisterForm from "@/app/(auth)/register/_components/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 px-4 sm:px-0 min-h-screen w-full">
      <Link href="/" className="flex flex-col items-center gap-5">
        <LotusLogo />
      </Link>
      <RegisterForm />
    </main>
  );
}
