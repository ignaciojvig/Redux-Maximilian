import { notification } from "antd";

export const showNotification = () => {
  return notification.info({
    message: "An error was caught by rxjs pipes in this request!",
    description:
      "There's only a chance of this error to happen, keep trying to get it again",
    placement: "topRight",
  });
};
