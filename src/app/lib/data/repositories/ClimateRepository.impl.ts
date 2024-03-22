import { Climate } from "@/app/lib/entities/Climate";
import { ClimateRepository } from "@/app/lib/domain/repositories/ClimateRepository";
import { OpenWeatherService } from "@/app/lib/infrastructure/services/OpenWeather.service";
import { LocalStorageService } from "../../infrastructure/services/LocalStorage.service";
import { KeyLocalStorage } from "../../domain/models/localStorage.enum";
import { Forecast } from "../../entities/Forecast";

export class ClimateImplRepository implements ClimateRepository {
  private readonly openWeatherService: OpenWeatherService;
  private readonly localStorageService?: LocalStorageService;

  constructor(
    openWeatherService: OpenWeatherService,
    localStorageService?: LocalStorageService
  ) {
    this.openWeatherService = openWeatherService;
    this.localStorageService = localStorageService;
  }

  async getClimateByCityName(city: string): Promise<Climate | null> {
    const climateData: any =
      await this.openWeatherService.getCurrentClimateByCity(city);
    if (climateData) {
      return {
        city: climateData?.name,
        temperature: climateData?.main?.temp,
        description: climateData?.weather[0]?.description,
        windSpeed: climateData?.wind?.speed,
        humidity: climateData?.main?.humidity,
        pressure: climateData?.main?.pressure,
        visibility: climateData?.visibility,
        sunrise: climateData?.sys?.sunrise,
        sunset: climateData?.sys?.sunset,
        icon: climateData?.weather[0]?.icon,
        id: climateData?.id,
        lat: climateData?.coord?.lat,
        lon: climateData?.coord?.lon,
      };
    }
    return null;
  }

  async getForecast(lat: number, lon: number): Promise<Forecast[] | null> {
    const forecastData: any = await this.openWeatherService.getForecast(
      lat,
      lon
    );
    if (forecastData) {
      return forecastData?.list?.map(
        (item: any): Forecast => ({
          dt: item?.dt,
          main: {
            temp: item?.main?.temp,
          },
          weather: {
            main: item?.weather[0]?.main,
            icon: item?.weather[0]?.icon,
          },
        })
      );
    }
    return null;
  }

  addFavorite(climate: Map<string, Climate>): void {
    const mapToArray = Array.from(climate, ([name, value]) => ({
      name,
      value,
    }));
    const jsonArray = JSON.stringify(mapToArray);

    if (this.localStorageService) {
      this.localStorageService.set(KeyLocalStorage.FAVORITES, jsonArray);
    }
  }

  getFavorites(): Map<string, Climate> {
    const jsonFromStorage = this.localStorageService?.get(
      KeyLocalStorage.FAVORITES
    );

    const array = JSON.parse(jsonFromStorage ?? "[]");

    const climateMap = new Map<string, Climate>();

    array.forEach((item: { name: string; value: Climate }) => {
      climateMap.set(item.name, item.value);
    });

    return climateMap;
  }
}
