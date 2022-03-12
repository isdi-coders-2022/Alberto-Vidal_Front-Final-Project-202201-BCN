/* eslint-disable import/prefer-default-export */
import { DefaultRequestBody, rest } from "msw";
import { generateRandomProjects } from "./projects";

const projects = generateRandomProjects(5);

export const handlers = [
  rest.get<DefaultRequestBody>(
    `https://apiurlapiurl.com/projects/all`,
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          projects,
        })
      )
  ),

  rest.delete<DefaultRequestBody>(
    `https://apiurlapiurl.com/projects/delete/asdasd`,
    (req, res, ctx) => res(ctx.status(200), ctx.json({}))
  ),
];
