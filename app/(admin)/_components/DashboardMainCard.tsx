import { capitalize } from "@/utils/capitalize";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";

type DashboardMainCardProps = {
  name: string;
  data: UserType[] | PerfumeType[] | OrderType[];
  icon: React.ReactNode;
};

export default function DashboardMainCard({
  name,
  data,
  icon,
}: DashboardMainCardProps) {
  return (
    <article className="text-white mx-auto md:mx-0 w-full lg:w-80">
      <Card>
        <CardHeader className="font-medium gap-1 flex items-center">
          {icon}
          {capitalize(name)}
        </CardHeader>
        <Divider />
        <CardBody className="flex justify-center items-center flex-col gap-2 text-tiny">
          Total
          <span className="text-5xl font-medium text-primary">
            {data.length}
          </span>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
            color="primary"
            as={Link}
            href={`/dashboard/${name.toLowerCase()}`}
          >
            More info
          </Button>
        </CardFooter>
      </Card>
    </article>
  );
}
