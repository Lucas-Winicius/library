"use client";
import BookHome from "@/components/Books";
import Empty from "@/components/Empty";
import Loading from "@/components/loading";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";
  const [books, setBooks] = useState<Book[]>([]);
  const [status, setStatus] = useState<RequestState>("LOADING");

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (search !== "")
      fetch(`${apiUrl}/books/search?q=${search}`)
        .then((d) => d.json())
        .then((d) => setBooks(d))
        .then(() => setStatus("LOADED"))
        .catch(() => setStatus("ERROR"));
  }, [search]);

  if (status === "LOADING") return <Loading />;

  if (status === "ERROR") return <h1>ERROR!!</h1>;

  if (books.length)
    return (
      <div className="flex-grow flex flex-col items-center justify-around space-y-3 py-4 w-full">
        {books.map((book) => (
          <BookHome book={book} key={book.id} />
        ))}
      </div>
    );

  return <Empty />;
}
