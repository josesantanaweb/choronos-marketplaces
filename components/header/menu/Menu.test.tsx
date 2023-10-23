import { render, screen } from "@testing-library/react";
import Menu from "./Menu";

describe("Menu Component", () => {
  it("should render a navigation bar with two links", () => {
    render(<Menu />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(2);
  });

  it("should have proper href attributes for the links", () => {
    render(<Menu />);
    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", "dex");
    expect(links[1]).toHaveAttribute("href", "about");
  });
});
