import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/loginReducer";
import LoginForm from "../components/LoginForm";
import ImageTable from "../components/ImageTable";

const Admin = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const error = useSelector((state) => state.images.error);
  if (error) {
    dispatch(logout());
  }

  // eslint-disable-next-line react/prop-types
  return <>{!login.token ? <LoginForm /> : <ImageTable />}</>;
};

export default Admin;
