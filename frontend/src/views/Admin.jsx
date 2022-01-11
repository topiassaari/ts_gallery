import React from "react";

import NewPostForm from "../components/NewPostForm";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/loginReducer";
import LoginForm from "../components/LoginForm";

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
        <div>
          <NewPostForm />
          <button onClick={handleLogout}>logout</button>
        </div>
      )}
    </>
  );
};

export default Admin;
