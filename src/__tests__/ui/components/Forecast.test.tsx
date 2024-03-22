import React from "react";
import { render } from "@testing-library/react";
import Forecast from "@/app/ui/components/Forecast/Forecast";
import type { Forecast as ForecastType } from "@/app/lib/entities/Forecast";

describe("Forecast component", () => {
  it("renders correctly", () => {
    // Mock de datos de pronóstico
    const forecastList: ForecastType[] = [
      {
        dt: 1616439600,
        main: { temp: 25 },
        weather: { main: "Sunny", icon: "010" },
      },
      {
        dt: 1616526000,
        main: { temp: 20 },
        weather: { main: "Clouds", icon: "010" },
      },
    ];

    // Renderizar el componente Forecast con los datos de pronóstico
    const { getByText, getAllByTestId } = render(
      <Forecast forecastList={forecastList} />
    );

    // Verificar que el título se renderice correctamente
    expect(getByText("Próximos 5 días")).toBeInTheDocument();

    // Verificar que se rendericen los componentes CardForecast adecuadamente para cada pronóstico
    const cardForecasts = getAllByTestId("card-forecast");
    expect(cardForecasts.length).toBe(forecastList.length);

    // Verificar que se muestren los datos correctos en cada CardForecast
    forecastList.forEach((forecast, index) => {
      expect(getByText(`${forecast.main.temp}°C`)).toBeInTheDocument();
      expect(getByText(forecast?.weather?.main)).toBeInTheDocument();
    });
  });
});
