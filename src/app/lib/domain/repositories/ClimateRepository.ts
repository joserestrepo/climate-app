import { Climate } from "@/app/lib/entities/Climate";
import { Forecast } from "../../entities/Forecast";

export interface ClimateRepository {
  getClimateByCityName(city: string): Promise<Climate | null>;
  
  getForecast(lat: number, lon: number) : Promise<Forecast[] | null>;

  addFavorite(climate: Map<string, Climate>): void;

  getFavorites(): Map<string, Climate>;
}
