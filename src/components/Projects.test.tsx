import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe("Given a Projects component", () => {
  describe("When it's rendered passing an array of projects with lenght 2", () => {
    test("Then it should render 2 projects and display it's authors names", () => {
      const authors = ["kiv", "joselito"];
      const projects = [
        {
          id: "1",
          author: {
            name: authors[0],
            avatar: "avatar",
          },
          preview: "preview",
        },
        {
          id: "2",
          author: {
            name: authors[1],
            avatar: "avatar",
          },
          preview: "preview",
        },
      ];
      const expectedNumberOfProjects = projects.length;

      render(<Projects projects={projects} />);
      const renderedProjects = screen.getAllByRole("listitem");
      const authorsNames = authors.map((author) => screen.getByText(authors[0]));

      authorsNames.forEach((name) => {
        expect(name).toBeInTheDocument();
      });
      expect(renderedProjects).toHaveLength(expectedNumberOfProjects);
    });
  });
});
