"use client";
import { Badge, Button } from "@nextui-org/react";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import UserDropdown from "./UserDropdown";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { checkAuthClient } from "@/utils/checkAuthClient";
import NavSkeleton from "./NavSkeleton";

export default function NavbarUserPart() {
  const [user, setUser]: [TokenData, Dispatch<SetStateAction<null>>] =
    useState(null);

  const [loading, setLoading] = useState(true);

  const checkAuth = useMemo(() => checkAuthClient, []);

  useEffect(() => {
    (async () => {
      const user = await checkAuth();
      setUser(user);
      setLoading(false);
    })();
  }, [checkAuth]);

  if (loading) {
    return (
      <>
        <NavSkeleton />
      </>
    );
  }

  return (
    <>
      {!user ? (
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
