"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import EmailInput from "@/app/(auth)/_components/EmailInput";
import PasswordInput from "@/app/(auth)/_components/PasswordInput";
import SubmitButton from "@/components/SubmitButton";
import { HOST } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function LoginForm() {
  const [globalError, setGlobalError] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = async (data: LoginInputs) => {
    setGlobalError("");
    try {
      const response = await fetch(`${HOST}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
        body: JSON.stringify(data),
      });
      const json = await response.json();

      if (json.status === "success") {
        router.push("/");
      } else {
        setGlobalError(json.data.error);
      }
    } catch (error: any) {
      console.error(error.message);
      setGlobalError("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-xl h-full flex flex-col gap-3"
    >
      <EmailInput
        register={register}
        isLoading={isSubmitting}
        error={!!errors.email}
      />
      <PasswordInput
        register={register}
        isLoading={isSubmitting}
        error={!!errors.password}
      />
      {globalError && (
        <span className="text-red-500 mt-4 text-sm w-full flex items-center justify-center py-2 rounded-lg bg-red-500/15">
          {globalError}
        </span>
      )}
      <SubmitButton content="Login" isSubmitting={isSubmitting} />

      <Divider className="mt-4 mb-2" />
      <div>
        Don&apos;t have an account?{" "}
        <Link className="text-primary" href="/register">
          Register
        </Link>
      </div>
    </form>
  );
}
