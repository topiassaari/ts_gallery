import React from "react";
import { Link } from "react-router-dom";
import signature from "../assets/ts_signature.png";
import admin from "../assets/admin.png";

const Header = () => {
  return (
    <div id="headerContainer">
      <Link to="/">
        <img src={signature} id="headerLogo" />
      </Link>
      <Link to="/admin">
        <img src={admin} id="headerLogo" />
      </Link>
    </div>
  );
};
export default Header;
