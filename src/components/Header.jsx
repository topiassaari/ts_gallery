import React from "react";
import signatureLight from "../assets/ts_signature_black.png";
import signatureDark from "../assets/ts_signature_white.png";
import adminLight from "../assets/admin_light.png";
import adminDark from "../assets/admin_dark.png";
import logoutLight from "../assets/logout_light.svg";
import logoutDark from "../assets/logout_dark.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/loginReducer";
import { setNotification } from "../reducers/notificationReducer";
import ThemeSelector from "./ThemeSelector";
import PropTypes from "prop-types";
const Header = (props) => {
  const login = useSelector((state) => state.login);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleLogout = async (event) => {
    event.preventDefault();
    dispatch(logout()).then(() => {
      dispatch(setNotification("logged out", "success", 5));
    });
  };
  return (
    <div id="headerContainer" role="navigation">
      <button onClick={() => props.handleNav("gallery")}>
        <img
          src={theme === "light" ? signatureLight : signatureDark}
          id="signature"
          alt="home"
        />
      </button>
      <div id="titleContainer">
        <h1>A GALLERY OF IMAGES I&apos;VE MADE IN THE PAST 6 YEARS</h1>
      </div>

      <div className="iconContainer">
        <button onClick={() => props.handleNav("admin")}>
          <img
            src={theme === "light" ? adminLight : adminDark}
            id="admin"
            alt="admin"
          />
        </button>
        {login.token ? (
          <button onClick={handleLogout} onKeyDown={handleLogout}>
            <img
              src={theme === "light" ? logoutLight : logoutDark}
              id="logout"
              alt="logout"
            />
          </button>
        ) : null}
        <ThemeSelector />
      </div>
    </div>
  );
};
export default Header;

Header.propTypes = {
  handleNav: PropTypes.func,
};
