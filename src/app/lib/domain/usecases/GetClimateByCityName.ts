import { ClimateImplRepository } from "@/app/lib/data/repositories/ClimateRepository.impl";
import { Climate } from "@/app/lib/entities/Climate";
import { OpenWeatherService } from "@/app/lib/infrastructure/services/OpenWeather.service";
import { LocalStorageService } from "../../infrastructure/services/LocalStorage.service";

export const GetClimateByCityName = async (
  city: string,
  openWeatherService: OpenWeatherService,
  localStorageService?: LocalStorageService
): Promise<Climate | null> => {
  const repository = new ClimateImplRepository(openWeatherService, undefined);
  return await repository.getClimateByCityName(city);
};
