import { ClimateImplRepository } from "@/app/lib/data/repositories/ClimateRepository.impl";
import { OpenWeatherService } from "@/app/lib/infrastructure/services/OpenWeather.service";
import { LocalStorageService } from "../../infrastructure/services/LocalStorage.service";
import { Forecast } from "../../entities/Forecast";

export const GetForecast = async (
  lat: number,
  lon: number
): Promise<Forecast[] | null> => {
  const openWeatherService: OpenWeatherService = new OpenWeatherService();
  const localStorageService: LocalStorageService = new LocalStorageService();
  const repository = new ClimateImplRepository(openWeatherService, undefined);
  return await repository.getForecast(lat, lon);
};
