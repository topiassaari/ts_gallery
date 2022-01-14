import React from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../reducers/loginReducer";
import Button from "./Button";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(
      userLogin(event.target.username.value, event.target.password.value)
    );
  };
  return (
    <div id="loginForm">
      <div>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">username</label>
            <input id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input id="password" type="password" name="password" />
          </div>
          <Button variant="login" />
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
