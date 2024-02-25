export default function BookHome({ book }: { book: Book }) {
  return (
    <div className="w-11/12 flex justify-center items-center bg-white rounded-xl border border-gray-300 text-xl font-semibold shadow">
      <div className="hidden md:flex justify-between w-full px-6 py-3">
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
      <div className="flex md:hidden justify-between w-full text-base font-medium px-3 py-2">
        <h1>{book.name}</h1>
        <h1>{book.category}</h1>
      </div>
    </div>
  );
}
