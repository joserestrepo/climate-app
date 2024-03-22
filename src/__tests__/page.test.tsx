import { envs } from "@/app/lib/config/envs";
import { OpenWeatherService } from "@/app/lib/infrastructure/services/OpenWeather.service";
import axios from "axios";

const mockResponse = {
  data: {
    icon: "sunny",
    temperature: 25,
    description: "Sol",
    city: "Santa Marta",
    windSpeed: 10,
    humidity: 50,
    pressure: 1010,
    visibility: 10000,
    sunrise: 1616500000,
    sunset: 1616540000,
  },
};
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("OpenWeatherService", () => {
  let openWeatherService: OpenWeatherService;

  beforeEach(() => {
    openWeatherService = new OpenWeatherService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("getCurrentClimateByCity returns climate data for a given city", async () => {
    const city = "Santa Marta";
    const expectedUrl = `${envs.API_URL}/weather?q=${city}&appid=${envs.API_KEY}&lang=es&units=metric`;

    mockedAxios.get.mockResolvedValue(mockResponse);

    const result = await openWeatherService.getCurrentClimateByCity(city);

    expect(mockedAxios.get).toHaveBeenCalledWith(expectedUrl);

    expect(result).toEqual(mockResponse.data);
  });

  test("getCurrentClimateByCity returns null on error", async () => {
    const city = "Santa Marta";

    mockedAxios.get.mockRejectedValue(new Error("API Error"));

    const result = await openWeatherService.getCurrentClimateByCity(city);

    expect(mockedAxios.get).toHaveBeenCalled();

    expect(result).toBeNull();
  });

  test("getForecastByCoordinates returns forecast data for given coordinates", async () => {
    const lat = 10.123;
    const lon = -74.567;
    const expectedUrl = `${envs.API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${envs.API_KEY}&lang=es&units=metric`;

    const expectedForecast = [
      {
        dt: 1616439600,
        main: { temp: 25 },
        weather: [{ main: "Sunny", icon: "" }],
      },
      {
        dt: 1616526000,
        main: { temp: 20 },
        weather: [{ main: "Cloudy", icon: "" }],
      },
    ];

    mockedAxios.get.mockResolvedValue({ data: { list: expectedForecast } });

    const result = await openWeatherService.getForecast(lat, lon);

    expect(mockedAxios.get).toHaveBeenCalledWith(expectedUrl);
    expect(result).toEqual({ list: expectedForecast });
  });

  test("getForecastByCoordinates returns null on error", async () => {
    const lat = 10.123;
    const lon = -74.567;

    mockedAxios.get.mockRejectedValue(new Error("API Error"));

    const result = await openWeatherService.getForecast(lat, lon);

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result).toBeNull();
  });
});
