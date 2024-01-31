import { Badge, Button } from "@nextui-org/react";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import UserDropdown from "./UserDropdown";

export default function NavbarUserPart({
  user,
}: {
  user: { id: string; role: string } | null;
}) {
  return (
    <>
      {user === null ? (
        <div className="flex items-center gap-3">
          <Link className="hidden md:flex" href={"/login"}>
            <Button variant="bordered" color="primary">
              Login
            </Button>
          </Link>
          <Link href={"/register"}>
            <Button
              className="text-background"
              color="primary"
              variant="shadow"
            >
              Get Started
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <Link href={"/cart"} className="flex justify-center items-center">
            <Badge content={0} color="primary" className="text-background">
              <BiCart className="w-7 h-7" />
            </Badge>
          </Link>
          <UserDropdown user={user} />
        </div>
      )}
    </>
  );
}
