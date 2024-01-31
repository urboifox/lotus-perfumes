import { Input } from "@nextui-org/react";

interface EmailInputProps {
  register: any;
  isLoading: boolean;
  error: boolean;
  label: string;
  name: string;
}

export default function CustomInput({
  register,
  isLoading,
  error,
  label,
  name,
}: EmailInputProps) {
  return (
    <Input
      variant="underlined"
      type="text"
      label={label}
      labelPlacement="inside"
      isRequired
      {...register(name, {
        required: true,
      })}
      isInvalid={error}
      isDisabled={isLoading}
      errorMessage={error && "This field is required"}
    />
  );
}
