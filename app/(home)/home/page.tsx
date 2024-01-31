import { Button } from "@nextui-org/react";
import Link from "next/link";
import { GiLotus } from "react-icons/gi";

export default function HomePage() {
  return (
    <main>
      <section
        className="h-[80vh] container max-w-[1024px] justify-between
       mx-auto px-3 gap-3 flex flex-col md:flex-row"
      >
        <article className="max-w-lg mx-auto md:mx-0 flex flex-col h-full justify-center text-center gap-3 md:text-start md:gap-5">
          <h1 className="text-3xl font-medium md:text-6xl md:font-semibold">
            Lotus Perfumes
          </h1>
          <p className="text-sm text-opacity-70 text-foreground md:text-lg">
            Welcome to a world where fragrance is more than a scent, it&apos;s a
            signature. at Lotus we do out best to deliver the best perfumes for
            you.
          </p>
          <Link href={"/perfumes"} className="w-man">
            <Button
              color="primary"
              variant="shadow"
              className="px-10 text-background"
            >
              Explore
            </Button>
          </Link>
        </article>
        <article className="flex items-center justify-center">
          <GiLotus color="#ffa6a5" className="w-52 h-52" />
        </article>
      </section>
    </main>
  );
}
