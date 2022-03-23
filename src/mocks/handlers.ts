/* eslint-disable import/prefer-default-export */
import { DefaultRequestBody, rest } from "msw";
import { generateRandomProject, generateRandomProjects } from "./projects";

const url = "https://apiurlapiurl.com/";

export const handlers = [
  rest.get<DefaultRequestBody>(`${url}projects/all`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        projects: generateRandomProjects(5),
      })
    )
  ),

  rest.delete<DefaultRequestBody>(`${url}projects/delete/*`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({}))
  ),
  rest.post<DefaultRequestBody>(`${url}projects/new`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json(generateRandomProject()))
  ),

  rest.post<DefaultRequestBody>(`${url}user/login`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: "utnaehutnehtn" }))
  ),
  rest.post<DefaultRequestBody>(`${url}user/register`, (req, res, ctx) =>
    res(ctx.status(200))
  ),
  rest.put<DefaultRequestBody>(`${url}projects/edit`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(generateRandomProject()))
  ),
];

export const errorHandlers = [
  rest.get<DefaultRequestBody>(`${url}projects/all`, (req, res, ctx) =>
    res(ctx.status(403))
  ),
  rest.delete<DefaultRequestBody>(`${url}projects/delete/*`, (req, res, ctx) =>
    res(ctx.status(403))
  ),
  rest.put<DefaultRequestBody>(`${url}projects/edit`, (req, res, ctx) =>
    res(ctx.status(403))
  ),
];
