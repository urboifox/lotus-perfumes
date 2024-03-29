import PerfumeCard from "@/app/(home)/perfumes/_components/PerfumeCard";
import styles from "./perfumes.module.css";
import { getAllPerfumes } from "@/lib/functions/getAllPerfumes";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lotus | Perfumes",
};

export default async function Perfumes() {
  const perfumesData = await getAllPerfumes();
  const perfumes: PerfumeType[] = perfumesData.data.perfumes;

  return (
    <main className={`pb-10 container mx-auto px-5`} id="perfumes-container">
      <section className={styles.perfumesContainer}>
        {perfumes.map((perfume: PerfumeType, i: number) => {
          return <PerfumeCard key={i} perfume={perfume} />;
        })}
        {perfumes.length === 0 && (
          <div className="w-full flex items-center justify-center">
            <h1 className="text-4xl font-medium">No perfumes found</h1>
          </div>
        )}
      </section>
      <div className="w-full flex items-center justify-center">
        <Link href={"/perfumes/create"} className="mx-auto mt-10">
          <Button color="primary" className="text-background" variant="shadow">
            Create Your Own!
          </Button>
        </Link>
      </div>
    </main>
  );
}
