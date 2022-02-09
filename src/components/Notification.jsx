import { useSelector } from "react-redux";
import React from "react";
import success from "../assets/success.png";
import error from "../assets/error.png";

const Notification = () => {
  const notification = useSelector((state) => state.notifications);
  return notification === "" ? null : (
    <div id="notification" className={notification.type}>
      <div>
        <span>{notification.content}</span>
        <img src={notification.type === "success" ? success : error} alt="" />
      </div>
    </div>
  );
};

export default Notification;
