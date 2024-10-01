import { BbsData } from "@/app/types/types";
import Link from "next/link";

  const getDetailBbsData = async (id: number) => {
    const res = await fetch(`http://localhost:3000/api/post/${id}`, {
      cache: 'no-store',
    });

    const bbsDetailData: BbsData = await res.json();

    return bbsDetailData;
  }

export default async function Page({
  params
}: {
  params: {id: number}
}) {

  const bbsDetailData = await getDetailBbsData(params.id);
  
  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{bbsDetailData?.title}</h1>
        <p className="text-gray-500">{bbsDetailData.username}</p>
      </div>

      <div className="mb-8">
        <p className="text-gray-700">{bbsDetailData.content}</p>
      </div>

      <Link href='/' className="bg-blue-400 text-card font-bold py-2 px-4 rounded-md">Back</Link>
    </div>
  );
}
