import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import SearchBox from "@/app/ui/components/SearchBox/SearchBox";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
  usePathname: () => "",
  useSearchParams: jest.fn(),
}));

describe("SearchBox component", () => {
  test("renders SearchBox component", () => {
    const { getByPlaceholderText } = render(<SearchBox />);
    const inputElement = getByPlaceholderText("Ingresa una ciudad");
    expect(inputElement).toBeInTheDocument();
  });

  test("submits form with no city", () => {
    const { getByPlaceholderText, getByTestId } = render(<SearchBox />);

    const inputElement = getByPlaceholderText("Ingresa una ciudad");
    const formElement = getByTestId("search-form");

    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.submit(formElement);

    expect(useRouter().replace).toHaveBeenCalledWith("?");
  });

  test("submits form with correct city", () => {
    const { getByPlaceholderText, getByRole, getByTestId } = render(
      <SearchBox />
    );
    const inputElement = getByPlaceholderText("Ingresa una ciudad");
    const formElement = getByTestId("search-form");
    const city = "New York";

    fireEvent.change(inputElement, { target: { value: city } });
    fireEvent.submit(formElement);

    expect(useRouter().replace).toHaveBeenCalledWith(
      `?city=${city.replace(" ", "+")}`
    );
  });
});
