"use client";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

type UserDropdownProps = {
  user: { id: string; role: string };
};

export default function UserDropdown({ user }: UserDropdownProps) {
  const router = useRouter();
  async function handleLogout() {
    await fetch("/api/auth/logout", {
      cache: "no-store",
    });
    router.refresh();
  }
  return (
    <Dropdown>
      <DropdownTrigger className="cursor-pointer">
        <Avatar color="primary" showFallback className="text-background" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {user.role !== "user" ? (
          <DropdownItem key="dashboard">Dashboard</DropdownItem>
        ) : (
          <DropdownItem key="profile">Profile</DropdownItem>
        )}
        <DropdownItem
          as={Link}
          href="/"
          onClick={handleLogout}
          key="logout"
          className="text-danger"
          color="danger"
        >
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
