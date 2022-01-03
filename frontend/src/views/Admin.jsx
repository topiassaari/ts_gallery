import React from "react";
import LoginForm from "../components/LoginForm";
import NewPostForm from "../components/NewPostForm";

const Admin = (props) => {
  // eslint-disable-next-line react/prop-types
  return <>{!props.token ? <LoginForm /> : <NewPostForm />}</>;
};

export default Admin;
