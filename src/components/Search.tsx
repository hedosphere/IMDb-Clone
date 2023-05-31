"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!search) return;
    // console.log(9);
    if (search) {
      router.push(`/search/${search}`);
      //
    }
  };
  return (
    <div className="mb-6 max-w-[90vw] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex justify-between gap-3 items-center px-2"
      >
        <input
          type="text"
          onChange={(e: any) => setSearch(e.target.value)}
          value={search}
          placeholder="Search Keywords... "
          className="h-10 w-full bg-transparent text-lg outline-none placeholder-gray-400   "
        />
        <button
          onSubmit={handleSubmit}
          disabled={!search}
          className=" disabled:text-gray-400 text-amber-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
