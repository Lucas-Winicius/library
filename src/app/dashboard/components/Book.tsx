"use client";

import { ChangeEvent, useState } from "react";
import ActionButton from "./ActionButton";

export default function Book({ book }: { book: Book }) {
  const [bookData, setBook] = useState(book);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBook({ ...bookData, [name]: value });
  };

  return (
    <div className="flex justify-between bg-slate-100 min-w-max rounded py-1 px-5 w-10/12 font-medium text-lg">
      <div>
        <input
          type="text"
          name="name"
          className="bg-transparent"
          value={bookData.name}
          placeholder="O livro"
          onChange={handleFormChange}
        />
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          name="category"
          className="bg-transparent"
          value={bookData.category}
          placeholder="Aventura"
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="author"
          className="bg-transparent"
          value={bookData.author}
          placeholder="Lucas"
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="amount"
          className="bg-transparent"
          value={bookData.amount}
          placeholder="0"
          onChange={handleFormChange}
        />
        <ActionButton book={book} bookData={bookData} />
      </div>
    </div>
  );
}
