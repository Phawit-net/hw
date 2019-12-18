import { Icon, notification } from "antd";
import React from "react";

const successLoginNotification = () => {
  notification.open({
    message: "Login Successful",
    description: "Enjoy with Fakebook",
    icon: <Icon type="check" style={{ color: "#54b600" }} />
  });
};

const failLoginNotification = message => {
  notification.open({
    message: "Login fail",
    description: message,
    icon: <Icon type="close" style={{ color: "#dc4d4d" }} />
  });
};

export {successLoginNotification , failLoginNotification}