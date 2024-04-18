export default function BookHome({ book, tag }: { book: Book; tag?: string }) {
  return (
    <div
      className={`flex flex-col items-center min-w-full ${
        !tag ? "justify-center" : ""
      }`}
    >
      <div
        className={`relative self-start float-right top-2 sm:left-16 left-6 text-xs bg-black text-white justify-center rounded-sm px-2 py-px h-min ${
          !tag ? "hidden" : "flex"
        }`}
      >
        <p>{`${tag}`}</p>
      </div>
      <div className="w-11/12 flex justify-center items-center bg-white rounded-xl border border-zinc-500 text-xl font-semibold shadow">
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
    </div>
  );
}
