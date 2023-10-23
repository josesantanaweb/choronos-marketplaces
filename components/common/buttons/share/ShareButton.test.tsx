import { render, fireEvent, screen } from "@testing-library/react";
import ShareButton from "./ShareButton";

describe("ShareButton Component", () => {
  it('should render button with specified size and disabled state', () => {
    // Mock the ComponentVisible function
    jest.mock('../../../../hooks/useVisible.tsx', () => ({
      ComponentVisible: jest.fn().mockReturnValue({
        ref: { current: null },
        isVisible: false,
        setIsVisible: jest.fn(),
      }),
    }));

    // Render the ShareButton component with specified size and disabled state
     const { getByTestId } = render(<ShareButton size="small" disabled />);

    // Assert that the button is rendered with the specified size and is disabled
    const button = getByTestId("button");
    expect(button).toHaveClass('h-[40px] w-[40px] rounded-xl text-lg');
    expect(button).toHaveClass("opacity-50");
    expect(button).toHaveClass("cursor-not-allowed");
    expect(button).toBeDisabled();
  });
});
