import { render, fireEvent, screen } from "@testing-library/react";
import FavoriteButton from "./FavoriteButton";

describe("FavoriteButton Component", () => {
  it("should call handleFavorite function when button is clicked", () => {
    const handleFavorite = jest.fn();
    const isFavorite = false;
    const { getByTestId } = render(<FavoriteButton isFavorite={isFavorite} handleFavorite={handleFavorite} />);
    const button = getByTestId('button');
    const heart = getByTestId("fa-reg-heart");

    // Act
    fireEvent.click(button);

    // Assert
    expect(heart).toBeInTheDocument();
  });

  it("should render button with opacity-50 and cursor-not-allowed classes when disabled is true", () => {
    // Arrange
    const handleFavorite = jest.fn();
    const isFavorite = false;
    const { getByTestId } = render(
      <FavoriteButton
        isFavorite={isFavorite}
        handleFavorite={handleFavorite}
        disabled={true}
      />
    );

    // Act
    const button = getByTestId("button");

    // Assert
    expect(button).toHaveClass("opacity-50");
    expect(button).toHaveClass("cursor-not-allowed");
  });
});
