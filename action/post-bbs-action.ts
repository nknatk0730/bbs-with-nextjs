'use server';

import { formScheme } from "@/app/bbs-posts/create/page";
import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const postBbs = async (formData: z.infer<typeof formScheme>) => {

  await prisma.post.create({
    data: formData,
  });

  revalidatePath('/');
  redirect('/');
}