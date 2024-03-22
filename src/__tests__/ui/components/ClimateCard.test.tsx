import React from "react";
import { render } from "@testing-library/react";
import ClimateCard from "@/app/ui/components/ClimateCard/ClimateCard";
import { Climate } from "@/app/lib/entities/Climate";

const mockClimate: Climate = {
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
  id: 1,
  lat: 30,
  lon: 40,
};

describe("ClimateCard component", () => {
  test("renders ClimateCard component with correct climate data", () => {
    const { getByText } = render(<ClimateCard climate={mockClimate} />);

    expect(getByText("25°C")).toBeInTheDocument();
    expect(getByText("Sol")).toBeInTheDocument();
    expect(getByText("Santa Marta")).toBeInTheDocument();
  });

  test("renders ClimateCard component with image", () => {
    const { getByAltText } = render(<ClimateCard climate={mockClimate} />);

    expect(getByAltText("Icon climate")).toBeInTheDocument();
  });
});
