import LotusLogo from "@/components/LotusLogo";
import NavLink from "@/components/NavLink";
import Link from "next/link";
import NavbarUserPart from "./NavbarUserPart";

export default async function HomeNav() {
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

      <NavbarUserPart />
    </header>
  );
}
