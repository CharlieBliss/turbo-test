"use client"

export default async function IndexPage() {
  let userFetch = await fetch(process.env.BASE_URL + "/api/users");
  let usersJson
  if(!userFetch.ok) {
    usersJson = await userFetch.json();
    console.log("PAGE LEVEL", usersJson)
  } else {
    usersJson = {body: []}
  }
  return (
    <div>
      <h1>Hello World</h1>
      {usersJson.body.map((jUser: any) => (
        <div key={jUser.id}>{jUser.name}</div>
      ))}
    </div>
  );
}
