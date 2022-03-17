import { ToastOptions, UpdateOptions } from "react-toastify";

export const defaultToast: ToastOptions = {
  pauseOnFocusLoss: false,
  pauseOnHover: false,
};

export const resolved: UpdateOptions = {
  render: "success",
  type: "success",
  isLoading: false,
  autoClose: 2000,
  closeButton: true,
  closeOnClick: true,
};

export const rejected: UpdateOptions = {
  render: "error",
  type: "error",
  isLoading: false,
  autoClose: 2000,
  closeButton: true,
  closeOnClick: true,
};

export const deleted: UpdateOptions = {
  render: "deleted 🗑",
  type: "info",
  isLoading: false,
  autoClose: 2000,
  closeButton: true,
  closeOnClick: true,
};
