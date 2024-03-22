import { GetClimateByCityName } from "@/app/lib/domain/usecases/GetClimateByCityName";
import { OpenWeatherService } from "@/app/lib/infrastructure/services/OpenWeather.service";
import SearchBox from "@/app/ui/components/SearchBox/SearchBox";
import OverViewToday from "@/app/ui/components/OverviewToday/OverViewToday";
import { envsPublic } from "@/app/lib/config/envs";
import { Suspense } from "react";
import Favorites from "./ui/components/Favorites/Favorites";
import { GetForecast } from "./lib/domain/usecases/GetForecast";
import Forecast from "./ui/components/Forecast/Forecast";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    city?: string;
  };
}) {
  const openWeatherService: OpenWeatherService = new OpenWeatherService();
  const cityDefault = searchParams?.city ?? envsPublic.CITY;
  let loading = true;
  const data = await GetClimateByCityName(cityDefault, openWeatherService);
  const forecast = await GetForecast(data?.lat ?? 0, data?.lon ?? 0);
  loading = false;
  return (
    <main className="flex min-h-screen flex-col px-20 py-10">
      {loading && <>Cargando</>}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Weather App</h1>
        <SearchBox />
      </div>
      {loading && "...cargando"}
      <Suspense fallback={<>...cargando</>}>
        {data && <OverViewToday climate={data} />}
      </Suspense>
      {forecast && <Forecast forecastList={forecast} />}
    </main>
  );
}
