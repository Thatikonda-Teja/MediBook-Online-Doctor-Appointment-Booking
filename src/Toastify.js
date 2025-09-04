
import { toast } from "react-toastify";

export const showSuccess = (msg) =>
  toast.success(msg, {
    position: "top-right",
    autoClose: 2000,
    theme: "colored",
  });

export const showError = (msg) =>
  toast.error(msg, {
    position: "top-right",
    autoClose: 3000,
    theme: "colored",
  });

export const showInfo = (msg) =>
  toast.info(msg, {
    position: "bottom-left",
    autoClose: 2500,
  });

export const showWarning = (msg) =>
  toast.warning(msg, {
    position: "bottom-right",
    autoClose: 2500,
  });
