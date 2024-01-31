import { Button, Spinner } from "@nextui-org/react";

export default function SubmitButton({
  isSubmitting,
  content,
}: {
  isSubmitting: boolean;
  content: string;
}) {
  return (
    <Button
      type="submit"
      color="primary"
      variant="solid"
      className="w-full mt-4 text-background rounded-md"
    >
      {isSubmitting ? (
        <>
          <Spinner size="sm" color="default" labelColor="foreground" />
        </>
      ) : (
        <>{content}</>
      )}
    </Button>
  );
}
