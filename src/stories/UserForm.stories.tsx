/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import UserForm, { UserFormProps } from "../components/UserForm/UserForm";
import store from "../redux/store";

export default {
  title: "UserForm",
  component: UserForm,
} as ComponentMeta<typeof UserForm>;

const Template = (args: UserFormProps) => (
  <BrowserRouter>
    <Provider store={store}>
      <UserForm {...args} />
    </Provider>
  </BrowserRouter>
);

export const UserFormComponent: ComponentStory<typeof UserForm> = Template.bind(
  {}
);
