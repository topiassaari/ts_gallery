import React from "react";
import light from "../assets/light.png";
import dark from "../assets/dark.png";
import { useDispatch, useSelector } from "react-redux";
import { lightTheme, darkTheme } from "../reducers/themeReducer";

const ThemeSelector = () => {
  const currentTheme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const changeTheme = () => {
    if (currentTheme === "light") {
      dispatch(darkTheme());
    }
    if (currentTheme === "dark") {
      dispatch(lightTheme());
    }
  };
  return (
    <button id="themeSelector" onClick={changeTheme}>
      <img src={currentTheme === "light" ? light : dark} alt="theme selector" />
    </button>
  );
};
export default ThemeSelector;
