import React from "react";
import { render } from "@testing-library/react";
import CurrentDate from "@/app/ui/components/CurrentDate/CurrentDate";

beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2022, 2, 21));
});

afterAll(() => {
  jest.useRealTimers();
});

describe("CurrentDate component", () => {
  test("renders CurrentDate component with correct formatted date", () => {
    const { getByText } = render(<CurrentDate />);

    expect(getByText("21 marzo 2022")).toBeInTheDocument();
  });
});
