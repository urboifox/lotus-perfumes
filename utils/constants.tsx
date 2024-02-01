import { GoGear, GoHome, GoPackage, GoPeople, GoPerson } from "react-icons/go";
import { TbPerfume } from "react-icons/tb";

export const HOST =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://lotus-perfumes.vercel.app";

export const dashboardNavLinks = [
  {
    icon: <GoPackage className="w-5 h-5" />,
    href: "/dashboard/orders",
    content: "Orders",
  },
  {
    icon: <GoPeople className="w-5 h-5" />,
    href: "/dashboard/users",
    content: "Users",
  },
  {
    icon: <TbPerfume className="w-5 h-5" />,
    href: "/dashboard/perfumes",
    content: "Perfumes",
  },
  {
    icon: <GoGear className="w-5 h-5" />,
    href: "/dashboard/settings",
    content: "Settings",
  },
  {
    icon: <GoPerson className="w-5 h-5" />,
    href: "/profile",
    content: "Profile",
  },
  {
    icon: <GoHome className="w-5 h-5" />,
    href: "/home",
    content: "Home",
  },
];
