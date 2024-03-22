"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const SearchBox: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [city, setCity] = useState("");

  const searchCity = () => {
    const params = new URLSearchParams(searchParams?.toString());
    if (city) {
      params.set("city", city);
    } else {
      params.delete("city");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchCity();
  };

  return (
    <form onSubmit={handleSubmit} data-testid="search-form">
      <div
        className="bg-very-dark-desaturated-blue rounded-lg w-[400px] 
                        flex gap-5 items-center justify-between px-5 h-14"
      >
        <input
          className="bg-transparent border-none outline-none w-full"
          type="text"
          placeholder="Ingresa una ciudad"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          defaultValue={searchParams?.get("city")?.toString()}
        />
        <button type="submit" data-testid="button-submit">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
