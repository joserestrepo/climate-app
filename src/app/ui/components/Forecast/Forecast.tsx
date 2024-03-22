import React from "react";
import CardForecast from "./CardForecast/CardForecast";
import type { Forecast } from "@/app/lib/entities/Forecast";

const Forecast: React.FC<{ forecastList: Forecast[] }> = ({ forecastList }) => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold">Próximos 5 días</h1>
      <div
        className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                     xl:grid-cols-4 mt-5"
      >
        {forecastList.map((forecast, index) => (
          <CardForecast
            dt={forecast.dt}
            main={forecast.main}
            weather={forecast.weather}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
