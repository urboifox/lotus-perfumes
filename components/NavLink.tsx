"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  exact?: boolean;
  children: ReactNode;
}

export default function NavLink({
  href,
  exact,
  children,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();

  const active = " font-bold text-primary";
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += active;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
