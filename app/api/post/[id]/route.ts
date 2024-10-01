import prisma from "@/lib/prismaClient"
import { NextResponse } from "next/server";

export const GET = async (
  request: Request, 
  { params }: { params: { id: string } }
) => {
  if (!params || !params.id) {
    return NextResponse.json({ error: "ID is missing" }, { status: 400 });
  }

  const id = parseInt(params.id);  // idを整数に変換

  try {
    const bbsDetailData = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });

    if (!bbsDetailData) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(bbsDetailData);
  } catch (error) {
    console.error("Error occurred:", error);  // エラーをログに出力
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
