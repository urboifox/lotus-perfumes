import { getAllPerfumes } from "@/lib/functions/getAllPerfumes";

type PerfumePageProps = {
  params: { perfumeId: string };
};
export default function PerfumePage({ params }: PerfumePageProps) {
  const { perfumeId } = params;
  return <div>{perfumeId}</div>;
}

export async function generateStaticParams() {
  const perfumesData = await getAllPerfumes();

  return perfumesData.data.perfumes.map((perfume: PerfumeType) => ({
    perfumeId: perfume._id,
  }));
}
