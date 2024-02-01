import { Button, Skeleton } from "@nextui-org/react";

export default function NavSkeleton() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="rounded-lg">
        <Button variant="bordered" color="primary">
          Login
        </Button>
      </Skeleton>
      <Skeleton className="rounded-lg">
        <Button className="text-background" color="primary" variant="shadow">
          Get Started
        </Button>
      </Skeleton>
    </div>
  );
}
