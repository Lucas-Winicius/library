"use client";
import Cookies from "js-cookie";
import Link from "next/link";

export default function DashboardLink() {
  const userRole = Cookies.get("role");

  if (userRole === "ADMIN") return <Link href="/dashboard/books">Painel</Link>;

  return <p className="text-zinc-500">Painel</p>;
}
