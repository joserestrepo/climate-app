import { envsPublic } from "@/app/lib/config/envs";
import { Forecast } from "@/app/lib/entities/Forecast";
import Image from "next/image";
import React from "react";
import {
  unixTimeToDate,
  unixTimeToDateTime,
} from "../../../../lib/utils/unixTimeToDate";

const CardForecast: React.FC<Forecast> = ({ dt, main, weather }) => {
  return (
    <div
      className="bg-very-dark-desaturated-blue flex 
                    items-center justify-between gap-8 px-8 rounded-lg p-3"
      data-testid="card-forecast"
    >
      <div className="flex flex-col gap-1">
        <p className="text-xs text-gray-400">{unixTimeToDateTime(dt)}</p>
        <p className="text-sm">{unixTimeToDate(dt)}</p>
      </div>
      <div className="flex gap-4 items-center">
        <Image
          src={`${envsPublic.API_URL_IMAGE}/${weather.icon}.png`}
          width={40}
          height={40}
          alt="Icon climate"
        />
        <div className="">
          <p className="text-sm">{main.temp}°C</p>
          <p className="text-xs text-gray-400">{weather.main}</p>
        </div>
      </div>
    </div>
  );
};

export default CardForecast;
