/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Projects from "../components/Projects/Projects";
import store from "../redux/store";
import { ProjectsProps } from "../types/projectTypes";

export default {
  title: "Project",
  component: Projects,
} as ComponentMeta<typeof Projects>;

const Template = (args: ProjectsProps) => (
  <BrowserRouter>
    <Provider store={store}>
      <Projects {...args} />
    </Provider>
  </BrowserRouter>
);

export const ProjectsList: ComponentStory<typeof Projects> = Template.bind({});
ProjectsList.args = {
  projects: [
    {
      id: "1",
      author: {
        username: "kiv",
        avatar:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
      preview:
        "https://i.pinimg.com/474x/c0/68/bb/c068bb6bf2f3f07bca71fad7ed33966c.jpg",
    },
    {
      id: "1",
      author: {
        username: "kiv",
        avatar:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
      preview:
        "https://i.pinimg.com/474x/c0/68/bb/c068bb6bf2f3f07bca71fad7ed33966c.jpg",
    },
    {
      id: "1",
      author: {
        username: "kiv",
        avatar:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
      preview:
        "https://i.pinimg.com/474x/c0/68/bb/c068bb6bf2f3f07bca71fad7ed33966c.jpg",
    },
  ],
};
