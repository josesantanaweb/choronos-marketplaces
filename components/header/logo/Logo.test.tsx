import { render, fireEvent, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo Component", () => {
  it("should render a Link component with a Chronos logo Image inside", () => {
    render(<Logo />);
    const linkElement = screen.getByRole("link", { name: /home/i });
    const imageElement = screen.getByAltText(
      /Chronos logo/i
    );
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
    expect(linkElement).toContainElement(imageElement);
  });
});
