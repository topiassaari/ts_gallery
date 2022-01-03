import React from "react";
import loginService from "../services/login";
import postalService from "../services/postalService";

const LoginForm = () => {
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("logging in ", event.target.username.value);
    loginService
      .login({
        username: event.target.username.value,
        password: event.target.password.value,
      })
      .then((login) => {
        postalService.setToken(login.token);
        window.localStorage.setItem("loggedUser", JSON.stringify(login));
        console.log("logged in");
      });
  };
  return (
    <div>
      <form id="loginForm" onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">username</label>
          <input id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input id="password" type="password" name="password" />
        </div>
        <button id="login" type="submit">
          login
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
