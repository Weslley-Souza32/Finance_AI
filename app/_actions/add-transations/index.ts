"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";

export const addTransactions = async (
  params: Prisma.TransactionCreateInput,
) => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  await db.transaction.create({
    data: { ...params, userId },
  });
};
