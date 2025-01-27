import { prisma } from "@repo/database";

export default async function IndexPage() {
  const users = await prisma.user.findMany();
  return (
    <div>
      <h1>Hello World</h1>
      {users.map((user) => (
        <div key={user.id}>{user.id}</div>
      ))}
    </div>
  );
}
