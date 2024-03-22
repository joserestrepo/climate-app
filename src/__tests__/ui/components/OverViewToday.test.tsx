import React from "react";
import { render } from "@testing-library/react";
import OverViewToday from "@/app/ui/components/OverviewToday/OverViewToday";
import { Climate } from "@/app/lib/entities/Climate";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
  usePathname: () => "",
  useSearchParams: jest.fn(),
}));

describe("OverViewToday component", () => {
  const climateData: Climate = {
    city: "Santa Marta",
    description: "Sol",
    icon: "icon",
    windSpeed: 10,
    humidity: 50,
    pressure: 1010,
    visibility: 10000,
    sunrise: 1616500000,
    sunset: 1616540000,
    temperature: 20,
    id: 1,
    lat: 10,
    lon: 30,
  };

  test("renders OverviewToday component with correct data", () => {
    const { getByText, getByTestId } = render(
      <OverViewToday climate={climateData} />
    );

    expect(getByText("Panorama de hoy")).toBeInTheDocument();

    expect(getByText("10 km/h")).toBeInTheDocument();
    expect(getByText("50 %")).toBeInTheDocument();
    expect(getByText("1010 hPa")).toBeInTheDocument();
    expect(getByText("10 Km")).toBeInTheDocument();
    expect(getByText("06:46")).toBeInTheDocument();
    expect(getByText("17:53")).toBeInTheDocument();
  });
});
