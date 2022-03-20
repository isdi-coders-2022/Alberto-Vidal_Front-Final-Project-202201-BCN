import { ToastOptions, UpdateOptions } from "react-toastify";

const updateDefaults: UpdateOptions = {
  isLoading: false,
  autoClose: 2000,
  closeButton: true,
  closeOnClick: true,
};

export const defaultToast: ToastOptions = {
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  closeButton: true,
  closeOnClick: true,
};

export const resolved: UpdateOptions = {
  render: "🚀 loaded!",
  type: "success",
  ...updateDefaults,
};

export const rejected: UpdateOptions = {
  render: "💩 error ",
  type: "error",
  ...updateDefaults,
};

export const deleted: UpdateOptions = {
  render: "🗑 deleted",
  type: "info",
  ...updateDefaults,
};
export const updated: UpdateOptions = {
  render: "✨ updated",
  type: "info",
  ...updateDefaults,
};
export const created: UpdateOptions = {
  render: "🎉 created!",
  type: "info",
  ...updateDefaults,
};
export const credentials: UpdateOptions = {
  render: "🚫 invalid credentials",
  type: "info",
  ...updateDefaults,
};
