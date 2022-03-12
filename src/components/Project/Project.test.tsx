import { Details } from "@mui/icons-material";
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
          username: "kiv",
          avatar: "avatar",
        },
        preview: "preview",
      };
      const expectedNumberOfImages = 2;

      render(
        <Project project={props} onClick={jest.fn()} deleteAction={jest.fn()} />
      );
      const images = screen.getAllByRole("img");
      const links = expectedLinkNames.map((linkName) =>
        screen.getByRole("link", { name: linkName })
      );

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
          username: "kiv",
          avatar: "avatar",
        },
        preview: "preview",
      };
      const onClick = jest.fn();

      render(
        <Project project={props} onClick={onClick} deleteAction={jest.fn()} />
      );
      const like = screen.getByRole("link", { name: likeLink });
      userEvent.click(like);

      expect(onClick).toHaveBeenCalled();
    });
  });

  describe("When it's rendered and clicked on the delete link", () => {
    test("Then the action passed should be performed", () => {
      const deleteLink = "delete";
      const props = {
        id: "1",
        author: {
          username: "kiv",
          avatar: "avatar",
        },
        preview: "preview",
      };
      const onDelete = jest.fn();

      render(
        <Project project={props} onClick={jest.fn()} deleteAction={onDelete} />
      );
      const deleteClickable = screen.getByRole("link", { name: deleteLink });
      userEvent.click(deleteClickable);

      expect(onDelete).toHaveBeenCalled();
    });
  });
});
