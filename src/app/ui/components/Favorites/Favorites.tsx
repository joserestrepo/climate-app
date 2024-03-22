"use client";

import React from "react";
import { useClimateLocalStorage } from "../OverviewToday/context/ClimateContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Climate } from "@/app/lib/entities/Climate";

const Favorites = () => {
  const { climateMap } = useClimateLocalStorage();
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (climate: Climate) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("city", climate.city);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      {climateMap && (
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Ciudades Favoritas</h1>
          <div
            className="flex overflow-auto gap-3 mt-4"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "gray transparent",
            }}
          >
            {Array.from(climateMap).map(([key, value]) => (
              <button
                className="w-fit bg-very-dark-desaturated-blue flex 
                    items-center gap-8 p-8 rounded-lg cursor-pointer"
                key={value.id}
                onClick={() => handleClick(value)}
              >
                {value.city}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Favorites;
