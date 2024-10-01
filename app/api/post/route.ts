import prisma from "@/lib/prismaClient"
import { NextResponse } from "next/server";

export const GET =  async () => {
  const allBbsPosts = await prisma.post.findMany();

  return NextResponse.json(allBbsPosts);
}

// export const POST =  async (req: Request) => {

//   const formData = await req.json();

//   const post = await prisma.post.create({
//     data: formData,
//   });

//   return NextResponse.json(post);
// }