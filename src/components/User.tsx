"use client";
import { SignOutIcon, UserIcon } from "@/lib/icons";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function User() {
  const userToken = Cookies.get("user_secret");
  const router = useRouter();

  const handleLogout = () => {
    Cookies.set("user_secret", "", { expires: 0 });
    Cookies.set("role", "", { expires: 0 });

    router.refresh();
  };

  if (userToken)
    return (
      <button
        onClick={handleLogout}
        className="flex items-center space-x-2 justify-center text-lg"
      >
        <p>Sair</p>
        <SignOutIcon />
      </button>
    );

  return (
    <Link
      href="/account"
      className="flex items-center space-x-2 justify-center"
    >
      <p className="text-zinc-500">Fazer Login</p>
      <UserIcon color="#71717a" />
    </Link>
  );
}
