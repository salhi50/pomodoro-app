import React from "react"
import { NotificationAPIStatus } from "../types";
import { getNotificationAPIStatus } from "../utils";

const useNotificationAPI = () => {
  const [status, setStatus] = React.useState<NotificationAPIStatus>(getNotificationAPIStatus);

  function requestPermission() {
    if(status !== "unavailable") {
      Notification.requestPermission()
      .then(() => setStatus(getNotificationAPIStatus()))
      .catch((e) => {
        console.error(e)
        setStatus("unavailable")
      })
    }
  }

  function notify(title: string, options?: NotificationOptions) {
    const n = new Notification(title, options)
    return n;
  }

  return {
    status,
    requestPermission,
    notify
  }
}

export default useNotificationAPI