/* eslint-disable import/prefer-default-export */
import { DefaultRequestBody, rest } from "msw";
import { generateRandomProjects } from "./projects";

const projects = generateRandomProjects(5);
const url = "https://apiurlapiurl.com/";

export const handlers = [
  rest.get<DefaultRequestBody>(`${url}projects/all`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        projects,
      })
    )
  ),

  rest.delete<DefaultRequestBody>(`${url}projects/delete/*`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({}))
  ),

  rest.post<DefaultRequestBody>(`${url}user/login`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: "utnaehutnehtn" }))
  ),
  rest.post<DefaultRequestBody>(`${url}user/register`, (req, res, ctx) =>
    res(ctx.status(200))
  ),
];
