import React from "react";

import { useSelector } from "react-redux";

import LoginForm from "../components/LoginForm";
import ImageTable from "../components/ImageTable";

const Admin = () => {
  const login = useSelector((state) => state.login);

  // eslint-disable-next-line react/prop-types
  return <>{!login.token ? <LoginForm /> : <ImageTable />}</>;
};

export default Admin;
