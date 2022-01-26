import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userLogin } from "../reducers/loginReducer";
import { setNotification } from "../reducers/notificationReducer";
import LoginForm from "../components/LoginForm";
import AdminPanel from "../components/AdminPanel";

const Admin = () => {
  const dispatch = useDispatch();
  const handleLogin = async (username, password) => {
    dispatch(userLogin(username, password)).then(() => {
      dispatch(setNotification("logged in " + username, "success", 5));
    });
  };
  const login = useSelector((state) => state.login);
  return (
    <>{!login.token ? <LoginForm login={handleLogin} /> : <AdminPanel />}</>
  );
};

export default Admin;
