"use client";

import { FilePlusIcon } from "@/lib/icons";
import { ChangeEvent, useState } from "react";
import handleCreate from "../handlers/create.handler";

export default function Create() {
  const [book, setBook] = useState<BookCreate>({
    amount: 0,
    author: "",
    category: "",
    name: "",
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  return (
    <div className="flex justify-between bg-slate-100 min-w-max rounded space-x-3 py-1 px-5 w-10/12 font-medium text-lg">
      <input
        type="text"
        className="bg-transparent"
        name="name"
        onChange={handleFormChange}
        placeholder="O livro"
        value={book.name}
      />
      <input
        type="text"
        className="bg-transparent"
        name="category"
        onChange={handleFormChange}
        placeholder="Aventura"
        value={book.category}
      />
      <input
        type="text"
        className="bg-transparent"
        name="author"
        onChange={handleFormChange}
        placeholder="Lucas Winicius"
        value={book.author}
      />
      <input
        type="text"
        className="bg-transparent"
        name="amount"
        onChange={handleFormChange}
        placeholder="23"
        value={book.amount}
      />
      <button onClick={() => handleCreate(book)}>
        <FilePlusIcon color="black" />
      </button>
    </div>
  );
}
