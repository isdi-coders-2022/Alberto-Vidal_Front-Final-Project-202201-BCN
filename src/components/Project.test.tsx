import { render, screen } from "@testing-library/react";
import Project from "./Project";

describe("Given a project component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 2 images and 4 buttons with accessible names: like, coments, share, bookmark", () => {
      const expectedLinkNames = ["like", "comment", "share", "bookmark"];
      const props = {
        author: {
          name: "kiv",
          avatar: "avatar",
        },
        preview: "preview",
      };
      const expectedNumberOfImages = 2;

      render(<Project project={props} />);
      const images = screen.getAllByRole("img");
      const links = expectedLinkNames.map((linkName) => {
        return screen.getByRole("link", { name: linkName });
      });

      expect(images).toHaveLength(expectedNumberOfImages);
      links.forEach((link) => {
        expect(link).toBeInTheDocument();
      });
    });
  });
});
