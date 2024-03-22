import { envs } from "../../config/envs";
import axios from "axios";

export class OpenWeatherService {
  private readonly apiKey: string;
  private readonly apiUrl: string;

  constructor() {
    this.apiKey = envs.API_KEY;
    this.apiUrl = envs.API_URL;
  }

  async getCurrentClimateByCity(city: string): Promise<unknown> {
    const url = `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}&lang=es&units=metric`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return null;
    }
  }

  async getForecast(lat: number, lon: number): Promise<unknown> {
    const url = `${this.apiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&lang=es&units=metric`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return null;
    }
  }
}
