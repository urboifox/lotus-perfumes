import { GoPackage, GoPerson } from "react-icons/go";
import { TbPerfume } from "react-icons/tb";
import { getAllPerfumes } from "@/lib/functions/getAllPerfumes";
import { getAllUsers } from "@/lib/functions/getAllUsers";
import { getAllOrders } from "@/lib/functions/getAllOrders";
import DashboardMainCard from "../_components/DashboardMainCard";
import { Suspense } from "react";

export default async function DashboardPage() {
  // const usersData = getAllUsers();
  // const perfumesData = getAllPerfumes();
  // const ordersData = getAllOrders();

  // const [users, perfumes, orders] = await Promise.all([
  //   usersData,
  //   perfumesData,
  //   ordersData,
  // ]);

  return (
    <main className="px-3 pt-5">
      <h1 className="font-bold text-3xl text-primary">Dashboard</h1>
      {/* <main className="mt-10 flex gap-5 flex-wrap w-full">
        <Suspense>
          <DashboardMainCard
            icon={<GoPackage className="w-5 h-5" />}
            name="orders"
            data={orders.data.orders}
          />
        </Suspense>
        <Suspense>
          <DashboardMainCard
            icon={<GoPerson className="w-5 h-5" />}
            name="users"
            data={users.data.users}
          />
        </Suspense>
        <Suspense>
          <DashboardMainCard
            icon={<TbPerfume className="w-5 h-5" />}
            name="perfumes"
            data={perfumes.data.perfumes}
          />
        </Suspense>
      </main> */}
    </main>
  );
}
