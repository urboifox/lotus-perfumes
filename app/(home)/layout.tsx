import { ReactNode } from "react";
import HomeNav from "./_components/HomeNav";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HomeNav />
      {children}
    </>
  );
}
