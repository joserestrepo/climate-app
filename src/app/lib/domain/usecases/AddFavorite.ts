import { ClimateImplRepository } from "../../data/repositories/ClimateRepository.impl";
import { Climate } from "../../entities/Climate";
import { LocalStorageService } from "../../infrastructure/services/LocalStorage.service";
import { OpenWeatherService } from "../../infrastructure/services/OpenWeather.service";

export const AddFavorite = (climateMap: Map<string, Climate>) => {
  const openWeatherService: OpenWeatherService = new OpenWeatherService();
  const localStorageService: LocalStorageService = new LocalStorageService();
  const repository = new ClimateImplRepository(
    openWeatherService,
    localStorageService
  );
  repository.addFavorite(climateMap);
};
