/* eslint-disable indent */
import loginService from "../services/login";
import postalService from "../services/postalService";
import { setNotification } from "./notificationReducer";

const loginReducer = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      return action.data;
    case "LOGOUT":
      return action.data;
    case "VALIDATE":
      return action.data;
    default:
      return state;
  }
};
export const userValidation = () => {
  return async (dispatch) => {
    const loggedUserJSON = window.sessionStorage.getItem("loggedUser");
    const login = JSON.parse(loggedUserJSON);
    if (loggedUserJSON) {
      postalService.setToken(login.token);
      dispatch({
        type: "VALIDATE",
        data: login,
      });
    }
  };
};
export const userLogin = (username, password) => {
  return async (dispatch) => {
    await loginService
      .login({
        username,
        password,
      })
      .then((data) => {
        if (data.error) {
          return dispatch(setNotification("login failed", "error", 5));
        }
        postalService.setToken(data.token);
        window.sessionStorage.setItem("loggedUser", JSON.stringify(data));
        dispatch(setNotification("logged in " + data.username, "success", 5));
        dispatch({
          type: "LOGIN",
          data,
        });
      });
  };
};

export const logout = () => {
  return async (dispatch) => {
    window.sessionStorage.removeItem("loggedUser");
    postalService.setToken(null);
    dispatch({
      type: "LOGOUT",
      data: [],
    });
  };
};

export default loginReducer;
