import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { BbsData } from "../types/types";

type BbsDataProps = {
  bbsData: BbsData
}

export const BbsCard = ({
  bbsData
}: BbsDataProps) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{bbsData.title}</CardTitle>
          <CardDescription>{bbsData.username}</CardDescription>
        </CardHeader>
        <CardContent>{bbsData.content}</CardContent>
        <CardFooter className="flex justify-between">
          <Link href={`/bbs-posts/${bbsData.id}`} className="text-sky-400">
            Read more
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}