import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="headerContainer">
      <Link to="/admin">admin</Link>
      <Link to="/">gallery</Link>
    </div>
  );
};
export default Header;
