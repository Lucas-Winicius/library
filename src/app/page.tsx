export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const data = await fetch(`${apiUrl}/books`);
  const books: Book[] = (await data.json()) || [];

  return <div>{JSON.stringify(books)}</div>;
}
