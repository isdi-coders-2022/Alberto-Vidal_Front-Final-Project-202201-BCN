import { render, screen } from "@testing-library/react";
import Project from "./Project";

describe("Given a project component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 2 images and 4 buttons with accessible names: like, coments, share, bookmark", () => {
      const expectedButtons = ["like", "comments", "share", "bookmark"];
      const expectedNumberOfImages = 2;

      render(<Project />);
      const images = screen.getAllByRole("img");
      const buttons = expectedButtons.map((buttonName) => {
        return screen.getByRole("button", { name: buttonName });
      });

      expect(images).toHaveLength(expectedNumberOfImages);
      buttons.forEach((button) => {
        expect(button).toBeInTheDocument();
      });
    });
  });
});
