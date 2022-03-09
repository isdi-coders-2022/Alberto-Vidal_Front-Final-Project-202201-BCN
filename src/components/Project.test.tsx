import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Project from "./Project";

describe("Given a project component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 2 images and 4 buttons with accessible names: like, coments, share, bookmark", () => {
      const expectedLinkNames = ["like", "comment", "share", "bookmark"];
      const props = {
        id: "1",
        author: {
          name: "kiv",
          avatar: "avatar",
        },
        preview: "preview",
      };
      const onClick = jest.fn();
      const expectedNumberOfImages = 2;

      render(<Project project={props} onClick={onClick} />);
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

  describe("When it's rendered and clicked on the like link", () => {
    test("Then the action passed should be performed", () => {
      const likeLink = "like";
      const props = {
        id: "1",
        author: {
          name: "kiv",
          avatar: "avatar",
        },
        preview: "preview",
      };
      const onClick = jest.fn();

      render(<Project project={props} onClick={onClick} />);
      const like = screen.getByRole("link", { name: likeLink });
      userEvent.click(like);

      expect(onClick).toHaveBeenCalled();
    });
  });
});
