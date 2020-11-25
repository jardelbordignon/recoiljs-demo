import React from "react";
import { useRecoilState } from "recoil";

import { userIdAtom } from "./atoms";

export default () => {
  const [userId, setUserId] = useRecoilState(userIdAtom);

  return (
    <nav className="menu">
      {[1, 2, 3, 4, 5].map((id) => (
        <button
          key={id}
          onClick={() => setUserId(id)}
          className={`menu-item ${id === userId && "active"}`}
        >
          User {id}
        </button>
      ))}
    </nav>
  );
};
