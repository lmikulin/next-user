import { NextResponse } from "next/server";
import prisma from '@/lib/prisma';

// TODO: error handling
export async function POST(request: Request) {
  try {
    const { username } = await request.json();
    const user = await prisma.user.create({
      data: {
        username
      }
    });

    console.log('created user', user)
    return NextResponse.json({ message: "SUCCESS" })

  } catch (error) {
    console.log('register user error', error);
    return NextResponse.json({ message: "Error saving new user" });
  }
}