import MoreDashboard from "../components/MoreDashboard";
import Titles from "./components/Titles";
import User from "./components/User";

export default async function Users() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const data = await fetch(`${apiUrl}/users`, { next: { revalidate: 30 } });
  const users: User[] = (await data.json()) || [];

  return (
    <div className="flex flex-col items-center w-full space-y-3 my-4">
      <Titles />
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
      <MoreDashboard />
    </div>
  );
}
