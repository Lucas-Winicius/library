"use client";
import { useState } from "react";
import formatDate from "../libs/formatDate";
import fullDate from "../libs/fullDate";
import changeRole from "../handlers/changeRole.handler";

export default function User({ user }: { user: User }) {
  const [admin, setAdmin] = useState(user.admin);

  const handleRole = () => {
    user.admin = !user.admin;
    setAdmin(user.admin);
    changeRole(user.admin, user.id);
  };

  return (
    <div className="flex w-11/12 items-center justify-between bg-slate-100 px-5 py-2 rounded shadow">
      <h1 className="w-2/12 overflow-hidden" title={user.nick}>
        {user.nick}
      </h1>
      <h1 className="w-2/12 overflow-hidden" title={user.name}>
        {user.name}
      </h1>
      <h1>
        <button onClick={handleRole}>{admin ? "Sim" : "Não"}</button>
      </h1>
      <h1 title={fullDate(user.createdAt)}>{formatDate(user.createdAt)}</h1>
    </div>
  );
}
