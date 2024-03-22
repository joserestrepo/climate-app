import React from "react";
import { render } from "@testing-library/react";
import { FaBeer } from "react-icons/fa";
import { InfoCardProps } from "@/app/ui/components/InfoCard/types/InfoCard.type";
import InfoCard from "@/app/ui/components/InfoCard/InfoCard";

describe("InfoCard component", () => {
  test("renders InfoCard component with correct data", () => {
    const mockInfo: InfoCardProps = {
      Icon: FaBeer,
      title: "Test Title",
      text: "Test Text",
    };

    const { getByText, getByTestId } = render(<InfoCard {...mockInfo} />);

    expect(getByTestId("info-card-icon")).toBeInTheDocument();

    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Text")).toBeInTheDocument();
  });
});
