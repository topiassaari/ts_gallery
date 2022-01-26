/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button";
import { useState } from "react";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    props.login(username, password);
  };

  return (
    <div className="formContainer">
      <div>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">username</label>
            <input id="username" name="username" onChange={handleUsername} />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={handlePassword}
            />
          </div>
          <Button variant="login" />
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
