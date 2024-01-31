import { Input } from "@nextui-org/react";

interface EmailInputProps {
  register: any;
  isLoading: boolean;
  error: boolean;
}

export default function EmailInput({
  register,
  isLoading,
  error,
}: EmailInputProps) {
  return (
    <Input
      variant="underlined"
      type="text"
      label="Email"
      labelPlacement="inside"
      isRequired
      {...register("email", {
        required: true,
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
      })}
      isInvalid={error}
      isDisabled={isLoading}
      errorMessage={error && "Please enter a valid email"}
    />
  );
}
