"use client";
import { MagnifyingGlassIcon } from "@/lib/icons";
import { FormEvent } from "react";
import { useState } from "react";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`Pesquisando por: ${searchValue}`);
    setSearchValue("");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center rounded-full bg-stone-800 py-1 px-4"
    >
      <input
        type="search"
        className="bg-transparent text-sm h-6 outline-none text-white font-medium"
        placeholder="Tente pesquisar algo"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">
        <MagnifyingGlassIcon size={18} />
      </button>
    </form>
  );
}
