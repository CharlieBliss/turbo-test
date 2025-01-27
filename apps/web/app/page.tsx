'use client'
import { prisma } from "@repo/database";

export default async function IndexPage() {
  console.log(prisma)

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
