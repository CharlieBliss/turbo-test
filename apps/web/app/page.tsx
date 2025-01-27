import { prisma } from "@repo/database";

export default async function IndexPage() {
  console.log(prisma._engineConfig)
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
