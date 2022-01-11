import React from "react";

import NewPostForm from "../components/NewPostForm";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/loginReducer";
import LoginForm from "../components/LoginForm";
import ImageTable from "../components/ImageTable";

const Admin = () => {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleLogout = async (event) => {
    event.preventDefault();
    dispatch(logout()).then(() => {
      console.log("logged out");
    });
  };

  // eslint-disable-next-line react/prop-types
  return (
    <>
      {!login.token ? (
        <LoginForm />
      ) : (
        <>
          <NewPostForm />
          <ImageTable />
          <button onClick={handleLogout}>logout</button>
        </>
      )}
    </>
  );
};

export default Admin;
