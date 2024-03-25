import Book from "./components/Book";
import Titles from "./components/Titles";

export default async function Dashboard() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const data = await fetch(`${apiUrl}/books`, { next: { revalidate: 1800 } });
  const books: Book[] = (await data.json()) || [];

  return (
    <div className="flex-grow flex flex-col items-center justify-around space-y-3 py-4 overflow-x-scroll">
      <Titles />
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </div>
  );
}
