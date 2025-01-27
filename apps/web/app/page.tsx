"use client"
import { useEffect, useState } from "react";
import { User } from "@repo/database";


const fetchStuff = async (setUsersJson: any) => {
  let userFetch = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/users");
  let usersJson
  if(userFetch.ok) {
    console.log("???")
    usersJson = await userFetch.json()
    console.log(usersJson)
  } else {
    usersJson = {body: []}
  }
  return setUsersJson(usersJson)
}
export default function IndexPage() {
  const [usersJson, setUsersJson] = useState({ body: [] });
  useEffect (( )=> {
    console.log("HELLO???")
    fetchStuff(setUsersJson)
  }, [])
  return (
    <div>
      <h1>Hello World</h1>
      {usersJson.body.map((jUser: User) => (
        <div key={jUser.id}>{jUser.name}</div>
      ))}
    </div>
  );
}
