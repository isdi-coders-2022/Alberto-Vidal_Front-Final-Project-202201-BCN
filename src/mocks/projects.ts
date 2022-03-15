import { Factory } from "fishery";
import ObjectId from "bson-objectid";
import { faker } from "@faker-js/faker";
import { DBProject, ProjectCard } from "../types/projectTypes";

const projectFactory = Factory.define<DBProject>(() => ({
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

export const generateRandomProject = (): DBProject => projectFactory.build();
export const generateRandomProjects = (total: number): ProjectCard[] =>
  projectFactory.buildList(total);
