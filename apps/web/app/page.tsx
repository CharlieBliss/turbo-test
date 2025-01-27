import { prisma } from "@repo/database";

export default async function IndexPage() {
  const users = await prisma.user.findMany();
  let userFetch = await fetch(process.env.BASE_URL + "/api/users");
  let usersJson
  if(!userFetch.ok) {
    usersJson = await userFetch.json();
  console.log(usersJson)
  } else {
    usersJson = {body: []}
  }
  return (
    <div>
      <h1>Hello World</h1>
      {users.map((user) => (
        <div key={user.id}>{user.id}</div>
      ))}
      {usersJson.body.map((jUser: any) => (
        <div key={jUser.id}>{jUser.name}</div>
      ))}
    </div>
  );
}
