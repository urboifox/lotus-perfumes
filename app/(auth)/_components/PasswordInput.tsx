import { Input } from "@nextui-org/react";
import { ReactNode } from "react";

interface PasswordInputProps {
  register: any;
  error: boolean;
  isLoading: boolean;
}

export default function PasswordInput({
  register,
  error,
  isLoading,
}: PasswordInputProps): ReactNode {
  return (
    <Input
      variant="underlined"
      type="password"
      label="Password"
      labelPlacement="inside"
      isRequired
      isDisabled={isLoading}
      {...register("password", { required: true, minLength: 6 })}
      isInvalid={error}
      errorMessage={error && "Password must be at least 6 characters"}
    />
  );
}
