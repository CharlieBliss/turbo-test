"use client"
import { useEffect, useState } from "react";


const fetchStuff = async (setUsersJson: any) => {
  let userFetch = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/users");
  let usersJson
  if(!userFetch.ok) {
    usersJson = await userFetch.json();
    console.log("PAGE LEVEL", usersJson)
  } else {
    usersJson = {body: []}
  }
  return setUsersJson(usersJson)
}
export default function IndexPage() {
  const [usersJson, setUsersJson] = useState({ body: [] });
  useEffect (( )=>{
    fetchStuff(setUsersJson)
  }, [])
  return (
    <div>
      <h1>Hello World</h1>
      {usersJson.body.map((jUser: any) => (
        <div key={jUser.id}>{jUser.name}</div>
      ))}
    </div>
  );
}
