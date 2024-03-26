import formatDate from "../libs/formatDate";
import fullDate from "../libs/fullDate";

export default function User({ user }: { user: User }) {
  return (
    <div className="flex w-11/12 items-center justify-between bg-slate-100 px-5 py-2 rounded shadow">
      <h1 className="w-2/12 overflow-hidden" title={user.nick}>
        {user.nick}
      </h1>
      <h1 className="w-2/12 overflow-hidden" title={user.name}>
        {user.name}
      </h1>
      <h1 className="">{user.admin ? "Sim" : "Não"}</h1>
      <h1 className="" title={fullDate(user.createdAt)}>
        {formatDate(user.createdAt)}
      </h1>
    </div>
  );
}
