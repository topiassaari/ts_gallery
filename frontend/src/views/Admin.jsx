import React from "react";

import { useSelector } from "react-redux";

import LoginForm from "../components/LoginForm";
import AdminPanel from "../components/AdminPanel";

const Admin = () => {
  const login = useSelector((state) => state.login);

  return <>{!login.token ? <LoginForm /> : <AdminPanel />}</>;
};

export default Admin;
