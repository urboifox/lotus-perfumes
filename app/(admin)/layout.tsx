import { ReactNode } from "react";
import DashboardNav from "@/app/(admin)/_components/DashboardNav";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <DashboardNav />
      <>{children}</>
    </div>
  );
}
