import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import Favorites from "@/app/ui/components/Favorites/Favorites";
import { useRouter } from "next/navigation";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: jest.fn(),
}));

// Mock the Climate context hook
jest.mock(
  "./../../../app/ui/components/OverviewToday/context/ClimateContext.tsx",
  () => ({
    useClimateLocalStorage: () => ({
      climateMap: new Map([
        ["1", { id: "1", city: "City 1" }],
        ["2", { id: "2", city: "City 2" }],
        ["3", { id: "3", city: "City 3" }],
      ]),
    }),
  })
);

// Mock Next.js useRouter and usePathname hooks
jest.mock("next/navigation", () => ({
  usePathname: jest.fn().mockReturnValue("/path"),
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
}));

describe("Favorites component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Favorites />);
    expect(getByText("Ciudades Favoritas")).toBeInTheDocument();
    expect(getByText("City 1")).toBeInTheDocument();
    expect(getByText("City 2")).toBeInTheDocument();
    expect(getByText("City 3")).toBeInTheDocument();
  });

  it("handles click event correctly", () => {
    const { getByText } = render(<Favorites />);

    fireEvent.click(getByText("City 1"));

    expect(useRouter().replace).toHaveBeenCalledWith("/path?city=City+1");
  });
});
