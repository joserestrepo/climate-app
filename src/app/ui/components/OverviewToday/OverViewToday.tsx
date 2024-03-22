import React from "react";
import { OverViewTodayProps } from "./types/overviewToday.type";
import ClimateCard from "../ClimateCard/ClimateCard";
import InfoCard from "../InfoCard/InfoCard";
import { InfoCardProps } from "../InfoCard/types/InfoCard.type";
import { FaTint, FaWind } from "react-icons/fa";
import { unixTimeToDate } from "@/app/lib/utils/unixTimeToDate";
import {
  MdOutlineVisibility,
  MdOutlineWaterDrop,
  MdOutlineWindPower,
  MdSpeed,
  MdSunny,
  MdSunnySnowing,
} from "react-icons/md";
import Favorites from "../Favorites/Favorites";
import ClimateContextProvider from "./context/ClimateContext";

export default function OverViewToday({ climate }: OverViewTodayProps) {
  const InfoCardList: Array<InfoCardProps> = [
    {
      Icon: MdOutlineWindPower,
      title: "Velocidad del viento",
      text: `${climate.windSpeed} km/h`,
    },
    {
      Icon: MdOutlineWaterDrop,
      title: "Humedad",
      text: `${climate.humidity} %`,
    },
    {
      Icon: MdSpeed,
      title: "Presión",
      text: `${climate.pressure} hPa`,
    },
    {
      Icon: MdOutlineVisibility,
      title: "Visibilidad",
      text: `${climate.visibility / 1000} Km`,
    },
    {
      Icon: MdSunny,
      title: "Salida del sol",
      text: unixTimeToDate(climate.sunrise),
    },
    {
      Icon: MdSunnySnowing,
      title: "Puesta de sol",
      text: unixTimeToDate(climate.sunset),
    },
  ];

  return (
    <ClimateContextProvider>
      <section className="mt-16">
        <Favorites />
        <h1 className="text-3xl font-bold">Panorama de hoy</h1>
        <div className="mt-7 flex gap-5">
          <div className="w-80">
            <ClimateCard climate={climate} />
          </div>
          <div className="w-full grid grid-cols-2 gap-5">
            {InfoCardList.map((info, index) => (
              <InfoCard
                Icon={info.Icon}
                title={info.title}
                text={info.text}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </ClimateContextProvider>
  );
}
