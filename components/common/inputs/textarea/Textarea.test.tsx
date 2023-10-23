import { render, fireEvent, screen } from "@testing-library/react";
import Textarea from "./Textarea";

describe("Textarea Component", () => {
  it("should render input element with correct label and name", () => {
    render(<Textarea label="Test Label" name="test" onChange={() => {}} />);
    const inputElement = screen.getByLabelText("Test Label");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("name", "test");
  });

  it("should allow user input and trigger onChange function", () => {
    const onChangeMock = jest.fn();
    render(<Textarea label="Test Label" name="test" onChange={onChangeMock} />);
    const inputElement = screen.getByLabelText("Test Label");
    fireEvent.change(inputElement, { target: { value: "Test Value" } });
    expect(onChangeMock).toHaveBeenCalled();
  });
});
