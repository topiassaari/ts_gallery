import React from "react";
import { Link } from "react-router-dom";
import signature from "../assets/ts_signature.png";
import admin from "../assets/admin.png";
import logoutImg from "../assets/logout.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/loginReducer";

const Header = () => {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const handleLogout = async (event) => {
    event.preventDefault();
    dispatch(logout()).then(() => {
      console.log("logged out");
    });
  };
  return (
    <div id="headerContainer">
      <Link to="/">
        <img src={signature} id="signature" />
      </Link>
      <div>
        <Link to="/admin">
          <img src={admin} id="admin" />
        </Link>
        {login.token ? (
          <img src={logoutImg} onClick={handleLogout} id="logout" />
        ) : null}
      </div>
    </div>
  );
};
export default Header;
