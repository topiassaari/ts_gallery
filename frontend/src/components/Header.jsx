import React from "react";
import { Link } from "react-router-dom";
import signature from "../assets/ts_signature.png";
import admin from "../assets/admin.png";
import logoutImg from "../assets/logout.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/loginReducer";
import { setNotification } from "../reducers/notificationReducer";
import ThemeSelector from "./ThemeSelector";
const Header = () => {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const handleLogout = async (event) => {
    event.preventDefault();
    dispatch(logout()).then(() => {
      dispatch(setNotification("logged out", "success", 5));
    });
  };
  return (
    <div id="headerContainer" role="navigation">
      <Link to="/">
        <img src={signature} id="signature" alt="home" />
      </Link>
      <div id="titleContainer">
        <h1>A GALLERY OF IMAGES I&apos;VE MADE IN THE PAST 6 YEARS</h1>
      </div>

      <div>
        <Link to="/admin">
          <img src={admin} id="admin" alt="admin" />
        </Link>
        {login.token ? (
          <button onClick={handleLogout} onKeyDown={handleLogout}>
            <img src={logoutImg} id="logout" alt="logout" />
          </button>
        ) : null}
        <ThemeSelector />
      </div>
    </div>
  );
};
export default Header;
