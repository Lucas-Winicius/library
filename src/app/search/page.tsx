"use client";
import BookHome from "@/components/BookHome";
import Empty from "@/components/Empty";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (search !== "")
      fetch(`${apiUrl}/books/search?q=${search}`)
        .then((d) => d.json())
        .then((d) => setBooks(d))
        .catch(() => []);
  }, [search]);

  if (books.length)
    return (
      <div className="flex-grow flex flex-col items-center justify-around space-y-3 py-4">
        {books.map((book) => (
          <BookHome book={book} key={book.id} />
        ))}
      </div>
    );

  return <Empty />;
}
