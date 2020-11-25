import React from "react";
import { useRecoilValue } from "recoil";

import { userState } from "./atoms";
export default () => {
  //const [user] = useRecoilState(userState);
  const user = useRecoilValue(userState);

  return (
    <>
      <hr />
      {user.name}
    </>
  );
};
