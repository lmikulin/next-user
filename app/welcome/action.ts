'use server'

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const updateUser = async (formData: FormData) => {
  'use server'

  const username = formData.get("username") as string;
  const info = formData.get("info") as string;

  const rows = await prisma.user.updateMany({
    where: {
      username
    },
    data: {
      info
    }
  });
  revalidatePath('/welcome')
}