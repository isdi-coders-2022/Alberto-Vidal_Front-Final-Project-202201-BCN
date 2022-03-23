/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ProjectForm, {
  NewProjectProps,
} from "../components/ProjectForm/ProjectForm";
import store from "../redux/store";

export default {
  title: "Projectform",
  component: ProjectForm,
} as ComponentMeta<typeof ProjectForm>;

const Template = (args: NewProjectProps) => (
  <BrowserRouter>
    <Provider store={store}>
      <ProjectForm {...args} />
    </Provider>
  </BrowserRouter>
);

export const ProjectFormComponent: ComponentStory<typeof ProjectForm> =
  Template.bind({});
