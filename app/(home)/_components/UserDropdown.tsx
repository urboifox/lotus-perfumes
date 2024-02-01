"use client";

import { handleLogout } from "@/utils/handleLogout";
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

  return (
    <Dropdown>
      <DropdownTrigger className="cursor-pointer">
        <Avatar color="primary" showFallback className="text-background" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {user.role !== "user" ? (
          <DropdownItem
            key="dashboard"
            as={Link}
            className="text-foreground"
            href={"/dashboard"}
          >
            Dashboard
          </DropdownItem>
        ) : (
          <DropdownItem key="profile">Profile</DropdownItem>
        )}
        <DropdownItem
          as={Link}
          href="/"
          onClick={() => handleLogout(router)}
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
