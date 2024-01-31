"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../../_components/CustomInput";
import EmailInput from "../../_components/EmailInput";
import PasswordInput from "../../_components/PasswordInput";
import SubmitButton from "@/components/SubmitButton";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { HOST } from "@/utils/constants";

export default function RegisterForm() {
  const router = useRouter();
  const [globalError, setGlobalError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = async (
    data: RegisterInputs
  ) => {
    try {
      setGlobalError("");
      const response = await fetch(`${HOST}/api/auth/register`, {
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
        console.log(json.message);
        setGlobalError(json.data.error);
      }
    } catch (error) {
      console.log(error);
      setGlobalError("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-xl flex flex-col gap-3 h-full"
    >
      <CustomInput
        register={register}
        error={!!errors.name}
        isLoading={isSubmitting}
        label="Name"
        name="name"
      />
      <EmailInput
        register={register}
        isLoading={isSubmitting}
        error={!!errors.email}
      />
      <CustomInput
        register={register}
        error={!!errors.address}
        isLoading={isSubmitting}
        label="Address"
        name="address"
      />
      <CustomInput
        register={register}
        error={!!errors.phone}
        isLoading={isSubmitting}
        label="Phone Number"
        name="phone"
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
      <SubmitButton content="Register" isSubmitting={isSubmitting} />
      <Divider className="mt-4 mb-2" />
      <div>
        Already have an account?{" "}
        <Link className="text-center text-primary" href="/login">
          Login
        </Link>
      </div>
    </form>
  );
}
