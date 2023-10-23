import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it('should render button with custom props', () => {
    render(
      <Button  size="small" variant="secondary" full>
        Custom Button
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("px-6 h-9 text-sm rounded-all-lg");
    expect(button).toHaveClass(
      "after-gradient-purple-100-on-hover bg-purple-dark-400"
    );
    expect(button).toHaveClass("w-full");
  })

  it("should render button with onClick function", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
