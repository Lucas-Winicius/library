import BookHome from "@/components/BookHome";

export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const data = await fetch(`${apiUrl}/books`, { next: { revalidate: 3600 } });
  const books: Book[] = (await data.json()) || [];

  return (
    <div className="flex-grow flex flex-col items-center justify-around space-y-3 py-4">
      {books.map((book) => (
        <BookHome book={book} key={book.id} />
      ))}
    </div>
  );
}
