import { prisma } from '@repo/database';
import { NextRequest, NextResponse } from 'next/server';

// GET handler to retrieve a user by ID
export async function GET(
  _: NextRequest,
): Promise<NextResponse> {
	try {
	  const users = await prisma.user.findMany();
    return NextResponse.json({
      status: 200,
      body: users,
    });
  } catch (error) {
	console.log(error)
    return NextResponse.json({
      status: 400,
      body: error,
    });
  }
}