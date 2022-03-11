/* eslint-disable import/prefer-default-export */
import { rest } from "msw";
import { ProjectShape } from "../types/projectTypes";
import { generateRandomProjects } from "./projects";

const projects = generateRandomProjects(5);

export const handlers = [
  rest.get<ProjectShape[]>(
    `https://apiurlapiurl.com/projects/all`,
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          projects,
        })
      )
  ),
];
