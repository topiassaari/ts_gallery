import React from "react";

import NewPostForm from "../components/NewPostForm";
import { useState, useEffect } from "react";
import postalService from "../services/postalService";
import loginService from "../services/login";

const Admin = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const login = JSON.parse(loggedUserJSON);
      setToken(login.token);
      postalService.setToken(login.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("logging in ", event.target.username.value);
    loginService
      .login({
        username: event.target.username.value,
        password: event.target.password.value,
      })
      .then((login) => {
        setToken(login.token);
        postalService.setToken(token);
        window.localStorage.setItem("loggedUser", JSON.stringify(login));
        console.log("logged in");
      });
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    loginService.logout().then(() => {
      setToken(null);
      console.log("logged out");
    });
  };

  // eslint-disable-next-line react/prop-types
  return (
    <>
      {!token ? (
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
              <button id="login" type="submit">
                login
              </button>
            </form>
          </div>
        </div>
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
