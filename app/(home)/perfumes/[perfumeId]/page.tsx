type PerfumePageProps = {
  params: { perfumeId: string };
};
export default function PerfumePage({ params }: PerfumePageProps) {
  const { perfumeId } = params;
  return <div>{perfumeId}</div>;
}
