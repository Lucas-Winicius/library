export default function BookHome({ book }: { book: Book }) {
  return (
    <div className="w-11/12 flex justify-between bg-white rounded-xl border border-gray-300 px-6 py-3 text-xl font-semibold shadow">
      <div>
        <h1>
          {book.name} <span className="font-normal">-</span> {book.category}
        </h1>
      </div>
      <div>
        <h1>
          <span className="font-normal">De:</span> {book.author} -{" "}
          <span className="font-normal">Qtd:</span> {book.amount}
        </h1>
      </div>
    </div>
  );
}
