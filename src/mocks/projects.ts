import { Factory } from "fishery";
import ObjectId from "bson-objectid";
import { faker } from "@faker-js/faker";
import { ProjectResponse } from "../types/projectTypes";

const projectFactory = Factory.define<ProjectResponse>(() => ({
  author: {
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    id: ObjectId().toHexString(),
  },
  likes: Math.floor(Math.random() * 10),
  repo: faker.internet.url(),
  production: faker.internet.url(),
  preview: faker.internet.url(),
  id: ObjectId().toHexString(),
}));

export const generateRandomProject = (): ProjectResponse =>
  projectFactory.build();
export const generateRandomProjects = (total: number): ProjectResponse[] =>
  projectFactory.buildList(total);
