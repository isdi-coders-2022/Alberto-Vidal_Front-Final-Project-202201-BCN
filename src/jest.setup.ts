/* eslint-disable @typescript-eslint/no-unused-vars */
import "@testing-library/jest-dom";
import "whatwg-fetch";
import "dotenv/config";
import { server } from "./mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
