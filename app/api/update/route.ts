import { NextResponse } from "next/server";
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';

// TODO: error handling
export async function PUT(request: Request) {
  const session = await getServerSession();
  try {
    const { info } = await request.json();

    const rows = await prisma.user.updateMany({
      where: {
        username: session?.user?.name || ''
      },
      data: {
        info
      }
    });

    console.log('prisma updated rows', rows);
    return NextResponse.json({ message: "SUCCESS" });

  } catch (error) {
    console.log('update info error', error);
    return NextResponse.json({ message: "Error updating user" });
  }
}