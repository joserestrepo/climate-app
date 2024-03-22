"use client";

import React, { useEffect, useState } from "react";
import { Climate } from "@/app/lib/entities/Climate";
import { envsPublic } from "@/app/lib/config/envs";
import Image from "next/image";
import CurrentDate from "../CurrentDate/CurrentDate";
import {
  MdLocationOn,
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import { AddFavorite } from "@/app/lib/domain/usecases/AddFavorite";
import { GetFavorites } from "@/app/lib/domain/usecases/GetFavorites";
import { useClimateLocalStorage } from "../OverviewToday/context/ClimateContext";

interface ClimateCardProps {
  climate: Climate;
}

const ClimateCard: React.FC<ClimateCardProps> = ({ climate }) => {
  const { climateMap, setClimateMap } = useClimateLocalStorage();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(climateMap.has(String(climate.id)));
  }, [climateMap, climate.id]);

  const handleAddFavorite = () => {
    const mapAux = new Map(climateMap);
    if (isFavorite) {
      mapAux.delete(String(climate.id));
    } else {
      mapAux.set(String(climate.id), climate);
    }
    setClimateMap(mapAux);
    setIsFavorite(!isFavorite);
    AddFavorite(mapAux);
  };

  return (
    <div
      className="bg-very-dark-desaturated-blue px-8 py-7 border-solid border-[1px] 
                    border-gray-400 rounded-md flex flex-col gap-2 relative"
    >
      <button
        className="absolute top-5 right-5 text-2xl cursor-pointer"
        onClick={handleAddFavorite}
      >
        {isFavorite ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
      </button>
      <Image
        src={`${envsPublic.API_URL_IMAGE}/${climate.icon}.png`}
        width={100}
        height={100}
        alt="Icon climate"
      />
      <h2 className="text-3xl font-semibold">{climate.temperature}°C</h2>
      <p className="capitalize text-md">{climate.description}</p>
      <hr className="border-gray-400 mt-3 mb-3" />
      <h2 className="text-md flex items-center gap-1">
        <MdLocationOn /> {climate.city}
      </h2>
      <CurrentDate />
    </div>
  );
};

export default ClimateCard;
