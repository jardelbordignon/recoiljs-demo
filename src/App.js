import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import "./styles.css";

import { userState, userIdAtom } from "./atoms";
import Menu from "./menu";
import Footer from "./footer";

export default function App() {
  const [user, setUser] = useRecoilState(userState);
  const userId = useRecoilValue(userIdAtom);

  useEffect(() => {
    const getUser = async () => {
      const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
      const resp = await fetch(url);
      const body = await resp.json();
      setUser(body);
    };

    if (userId) getUser();
  }, [userId]);

  return (
    <>
      <Menu />
      <br />
      <span>{user.id}</span> <br />
      <strong>{user.name}</strong> <br />
      <span>{user.username}</span> <br />
      <span>{user.email}</span> <br />
      <span>{user.website}</span> <br />
      <span>{user.phone}</span> <br />
      <br />
      <Footer />
    </>
  );
}
