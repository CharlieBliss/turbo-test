import { prisma } from "@repo/database";

export default async function IndexPage() {
  const users = await prisma.user.findMany();
  const userFetch = await fetch("/api/users");
  console.log(userFetch)
  return (
    <div>
      <h1>Hello World</h1>
      {users.map((user) => (
        <div key={user.id}>{user.id}</div>
      ))}
    </div>
  );
}
