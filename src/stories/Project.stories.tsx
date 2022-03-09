/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Project from "../components/Project";
import { ProjectProps } from "../types/projectTypes";

export default {
  title: "Project",
  component: Project,
} as ComponentMeta<typeof Project>;

const Template = (args: ProjectProps) => {
  return <Project {...args} />;
};

export const ProjectCard: ComponentStory<typeof Project> = Template.bind({});
ProjectCard.args = {
  project: {
    author: {
      name: "kiv",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    preview:
      "https://i.pinimg.com/474x/c0/68/bb/c068bb6bf2f3f07bca71fad7ed33966c.jpg",
  },
};
