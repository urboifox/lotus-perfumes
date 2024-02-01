"use client";
import { handleLogout } from "@/utils/handleLogout";
import { Button, Link } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { dashboardNavLinks } from "@/utils/constants";
import { GoSignOut } from "react-icons/go";
import { motion } from "framer-motion";

export default function DashboardNav() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="relative flex justify-start">
      <motion.nav
        animate={{ x: open ? "0" : "-100px" }}
        transition={{
          damping: 50,
          duration: 0.3,
        }}
        className={`fixed md:sticky top-0 bg-neutral-100 px-2 pt-3 h-screen w-max md:w-60 max-w-xs items-start justify-start`}
      >
        <Button
          onClick={() => setOpen((prev) => !prev)}
          className={`md:hidden absolute -right-10 top-32 rounded-l-none ${
            open ? "" : "bg-secondary/20"
          }`}
          color="secondary"
          isIconOnly
        >
          <IoMenu className="w-5 h-5" />
        </Button>
        <div className="flex flex-col gap-2">
          {dashboardNavLinks.map((link, i) => {
            return (
              <Button
                as={Link}
                key={i}
                startContent={link.icon}
                href={link.href}
                color="secondary"
              >
                <span className="hidden md:flex">{link.content}</span>
              </Button>
            );
          })}
          <Button
            as={Link}
            startContent={<GoSignOut className="w-5 h-5" />}
            href="/"
            color="danger"
            onClick={() => handleLogout(router)}
          >
            <span className="hidden md:flex">Logout</span>
          </Button>
        </div>
      </motion.nav>
    </div>
  );
}
