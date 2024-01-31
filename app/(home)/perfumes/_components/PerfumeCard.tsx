import Link from "next/link";
import ComponentTag from "./ComponentTag";
import { IoFemale, IoMale, IoMaleFemale } from "react-icons/io5";

export default function PerfumeCard({ perfume }: { perfume: PerfumeType }) {
  return (
    <article className="bg-primary shadow-lg pt-5 px-3 pb-3 rounded-md">
      <div className="flex gap-1 flex-wrap justify-center">
        {perfume.components.map((component: ComponentType, i: number) => {
          return <ComponentTag key={i} component={component} />;
        })}
      </div>
      {/* <div className="bg-red-500 mt-3 rounded-md aspect-square">as</div> */}
      <div className="bg-background/30 flex items-center justify-between mt-4 p-2 rounded-md">
        <span className="text-2xl font-semibold">
          {perfume.for === "male" ? (
            <IoMale className="w-4 h-4" color="var(--background)" />
          ) : perfume.for === "female" ? (
            <IoFemale className="w-4 h-4" color="var(--background)" />
          ) : (
            <IoMaleFemale className="w-4 h-4" color="var(--background)" />
          )}
        </span>
        <Link
          className="bg-background font-medium text-primary text-tiny p-1 px-2 rounded-lg"
          href={`/perfumes/${perfume._id}`}
        >
          View
        </Link>
      </div>
    </article>
  );
}
