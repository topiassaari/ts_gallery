import React from "react";
import lightbulbLight from "../assets/lightbulb_light.svg";
import lightbulbDark from "../assets/lightbulb_dark.svg";
import { useDispatch, useSelector } from "react-redux";
import { lightTheme, darkTheme } from "../reducers/themeReducer";

const ThemeSelector = () => {
  const currentTheme = useSelector((state) => state.theme);
  const overlay = useSelector((state) => state.overlay);
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
    <button
      id="themeSelector"
      onClick={changeTheme}
      tabIndex={overlay ? -1 : 1}
    >
      <img
        src={currentTheme === "light" ? lightbulbLight : lightbulbDark}
        alt="theme selector"
      />
    </button>
  );
};
export default ThemeSelector;
