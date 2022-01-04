import React from "react";
import { Link } from "react-router-dom";
import signature from "../assets/ts_signature.png";
import lock from "../assets/lock.svg";
const Header = () => {
  return (
    <div id="headerContainer">
      <Link to="/">
        <img src={signature} id="headerLogo" />
      </Link>
      <Link to="/admin">
        <img src={lock} id="headerLogo" />
      </Link>
    </div>
  );
};
export default Header;
