import LotusLogo from "@/components/LotusLogo";
import NavLink from "@/components/NavLink";
import { Badge, Button } from "@nextui-org/react";
import Link from "next/link";
import UserDropdown from "./UserDropdown";
import { BiCart } from "react-icons/bi";
import { checkAuth } from "@/utils/checkAuth";

export default async function HomeNav({
  user,
}: {
  user: { id: string; role: string } | null;
}) {
  return (
    <header className="sticky top-0 mb-10 container mx-auto font-medium px-3 py-5 flex items-center justify-between">
      <Link href={"/home"}>
        <LotusLogo />
      </Link>

      <nav className="hidden sm:flex items-center gap-3">
        <NavLink href={"/home"}>Home</NavLink>
        <NavLink exact href={"/perfumes"}>
          Perfumes
        </NavLink>
        <NavLink exact href={"/perfumes/create"}>
          Create your own
        </NavLink>
      </nav>

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
    </header>
  );
}

export async function getServerSideProps() {
  const user = await checkAuth();

  return {
    props: {
      user,
    },
  };
}
