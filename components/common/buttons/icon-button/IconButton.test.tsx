import { render, fireEvent, screen } from "@testing-library/react";
import IconButton from "./IconButton";

describe("IconButton Component", () => {
  it("should render button with specified size and icon", () => {
    render(<IconButton size="small" icon="search" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("h-[40px] w-[40px] rounded-xl text-lg");
  });

  it("should render button with eagle icon and Image component", () => {
    render(<IconButton icon="eagle" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    const image = screen.getByAltText("eagle");
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass("w-5");
  });
});
